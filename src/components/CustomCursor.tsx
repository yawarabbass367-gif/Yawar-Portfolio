"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/** Display width — keep existing size */
const CLIPPY_WIDTH_PX = 42;

/**
 * Tunables
 * - BLINK_MIN/MAX_MS: gap between idle blinks
 * - BLINK_MS: must match CSS animation duration
 * - LOOK_MAX: max pupil travel as a fraction of eye diameter (tune this)
 */
const BLINK_MIN_MS = 3000;
const BLINK_MAX_MS = 7000;
const BLINK_MS = 520;
/** Max pupil offset as fraction of eye size — raise for stronger glances */
const LOOK_MAX = 0.32;

/**
 * Measured from clippy-cursor.png eye-white regions.
 * Base image has baked pupils whitened so only these layered pupils show.
 */
const EYES = [
  { id: "left", cx: 18.67, cy: 29.02, size: 34 },
  { id: "right", cx: 70.76, cy: 34.78, size: 35 },
] as const;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ClippyEye({
  cx,
  cy,
  size,
  lookX,
  lookY,
  blinking,
  blinkKey,
}: {
  cx: number;
  cy: number;
  size: number;
  lookX: MotionValue<number>;
  lookY: MotionValue<number>;
  blinking: boolean;
  blinkKey: number;
}) {
  // Framer x/y need px — % strings don't move the pupil reliably
  const travelPx = ((CLIPPY_WIDTH_PX * size) / 100) * LOOK_MAX;
  const pupilX = useTransform(lookX, [-1, 1], [-travelPx, travelPx]);
  const pupilY = useTransform(lookY, [-1, 1], [-travelPx, travelPx]);

  return (
    <span
      className="clippy-eye"
      style={{
        left: `${cx}%`,
        top: `${cy}%`,
        width: `${size}%`,
      }}
    >
      <span className="clippy-sclera" />
      <span className="clippy-pupil-anchor">
        <motion.span className="clippy-pupil" style={{ x: pupilX, y: pupilY }}>
          <span className="clippy-pupil-shine" />
        </motion.span>
      </span>
      <span
        key={blinkKey}
        className={`clippy-lid ${blinking ? "clippy-lid--blink" : ""}`}
      />
    </span>
  );
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [blinking, setBlinking] = useState(false);
  const [blinkKey, setBlinkKey] = useState(0);

  const blinkCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blinkScheduleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  // Normalized look target from mouse position (−1…1). Springs keep motion smooth.
  const lookX = useMotionValue(0);
  const lookY = useMotionValue(0);
  const springLookX = useSpring(lookX, { stiffness: 220, damping: 28, mass: 0.3 });
  const springLookY = useSpring(lookY, { stiffness: 220, damping: 28, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const clearBlinkTimers = () => {
      if (blinkCloseTimer.current) clearTimeout(blinkCloseTimer.current);
      if (blinkScheduleTimer.current) clearTimeout(blinkScheduleTimer.current);
    };

    const runBlink = (then?: () => void) => {
      setBlinkKey((k) => k + 1);
      setBlinking(true);
      if (blinkCloseTimer.current) clearTimeout(blinkCloseTimer.current);
      blinkCloseTimer.current = setTimeout(() => {
        setBlinking(false);
        then?.();
      }, BLINK_MS);
    };

    const scheduleNaturalBlink = () => {
      const delay = BLINK_MIN_MS + Math.random() * (BLINK_MAX_MS - BLINK_MIN_MS);
      blinkScheduleTimer.current = setTimeout(() => {
        runBlink(() => {
          if (Math.random() < 0.14) {
            blinkScheduleTimer.current = setTimeout(() => {
              runBlink(scheduleNaturalBlink);
            }, 260);
          } else {
            scheduleNaturalBlink();
          }
        });
      }, delay);
    };

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      /*
       * Gaze from mouse POSITION (not movement delta).
       *
       * Clippy’s hotspot is the mouse, so eyeCenter→mouse collapses to ~0 when
       * settled. Meaningful “look at where the mouse is on screen” = map the
       * mouse’s place in the viewport to a look vector, then aim pupils that way.
       * Visual Clippy lag (spring) still softens motion via springLook*.
       */
      const vw = window.innerWidth || 1;
      const vh = window.innerHeight || 1;
      const clippyX = springX.get();
      const clippyY = springY.get();
      const clippyH = CLIPPY_WIDTH_PX * (981 / 510);
      const eyeCenterX =
        clippyX +
        CLIPPY_WIDTH_PX * ((EYES[0].cx + EYES[1].cx) / 2 / 100);
      const eyeCenterY =
        clippyY + clippyH * ((EYES[0].cy + EYES[1].cy) / 2 / 100);

      // Vector from eye center → mouse (spring lag = look-ahead while moving)
      let dx = e.clientX - eyeCenterX;
      let dy = e.clientY - eyeCenterY;
      const lagDist = Math.hypot(dx, dy);

      // When settled on the cursor, fall back to viewport position so gaze
      // still reflects left/right/top/bottom of the screen (and holds when idle).
      if (lagDist < 12) {
        dx = e.clientX - vw / 2;
        dy = e.clientY - vh / 2;
      }

      const rangeX = vw * 0.45;
      const rangeY = vh * 0.45;
      lookX.set(clamp(dx / rangeX, -1, 1));
      lookY.set(clamp(dy / rangeY, -1, 1));
    };

    const leave = () => {
      setVisible(false);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]",
      );
      if (!target) {
        setHovering(false);
        setLabel("");
        return;
      }
      setHovering(true);
      setLabel(target.dataset.cursor ?? "");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    scheduleNaturalBlink();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      clearBlinkTimers();
    };
  }, [x, y, lookX, lookY, springX, springY]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex flex-col items-start gap-1"
        animate={{
          scale: hovering ? (label ? 1.12 : 1.06) : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <div className="clippy-root relative" style={{ width: CLIPPY_WIDTH_PX }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- exact cursor asset, no optimization */}
          <img
            src="/cursor/clippy-cursor-base.png"
            alt=""
            width={510}
            height={981}
            draggable={false}
            className="block h-auto w-full max-w-none select-none"
          />
          {EYES.map((eye) => (
            <ClippyEye
              key={eye.id}
              cx={eye.cx}
              cy={eye.cy}
              size={eye.size}
              lookX={springLookX}
              lookY={springLookY}
              blinking={blinking}
              blinkKey={blinkKey}
            />
          ))}
        </div>
        {hovering && label ? (
          <span className="whitespace-nowrap rounded-full bg-[color:var(--color-ink)] px-2.5 py-1 text-[10px] font-medium tracking-wide text-white">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
