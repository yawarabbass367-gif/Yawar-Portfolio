"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DEFAULT_LABEL = "Nebula";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState(DEFAULT_LABEL);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
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
        setLabel(DEFAULT_LABEL);
        return;
      }
      setHovering(true);
      setLabel(target.dataset.cursor?.trim() || DEFAULT_LABEL);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      aria-hidden
      className="nebula-cursor pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="nebula-cursor__cluster"
        animate={{ scale: hovering ? 1.06 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <svg
          className="nebula-cursor__arrow"
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2 1.2 L1.2 18.4 L5.6 14.2 L9.4 20.8 L12.2 19.4 L8.4 12.8 L14.4 12.8 Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="rgba(0,0,0,0.35)"
          />
        </svg>
        <span className="nebula-cursor__pill">{label}</span>
      </motion.div>
    </motion.div>
  );
}
