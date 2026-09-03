"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import {
  virtuePhase2Assets,
  virtueUsabilitySolutionCopy,
} from "@/data/virtue-phase2-assets";

const imageMap = {
  beforeLogin: virtuePhase2Assets.usability.beforeLogin,
  afterLogin: virtuePhase2Assets.usability.afterLogin,
  beforeInstagram: virtuePhase2Assets.usability.beforeInstagram,
  afterInstagram: virtuePhase2Assets.usability.afterInstagram,
} as const;

type CompareCallout = {
  number: number;
  label?: string;
  body?: string;
  muted?: boolean;
};

type CompareRow = (typeof virtueUsabilitySolutionCopy.rows)[number];

function CompareCalloutItem({ callout }: { callout: CompareCallout }) {
  const text = callout.label ?? callout.body ?? "";
  const isLabel = Boolean(callout.label);

  return (
    <div className="virtue-p2-compare-callout">
      <span className="virtue-p2-compare-callout__badge" aria-hidden>
        {callout.number}
      </span>
      <p
        className={[
          "virtue-p2-compare-callout__text",
          isLabel ? "virtue-p2-compare-callout__text--label" : "",
          callout.muted ? "virtue-p2-compare-callout__text--muted" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {text}
      </p>
    </div>
  );
}

function CompareRowBlock({
  row,
  variant = "default",
}: {
  row: CompareRow;
  variant?: "login" | "restriction" | "default";
}) {
  const before = imageMap[row.beforeImage as keyof typeof imageMap];
  const after = imageMap[row.afterImage as keyof typeof imageMap];
  const arrowBefore = virtuePhase2Assets.usability.arrowBefore;

  return (
    <div
      className={[
        "virtue-p2-compare-stage",
        variant === "login" ? "virtue-p2-compare-stage--login" : "",
        variant === "restriction" ? "virtue-p2-compare-stage--restriction" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="virtue-p2-compare-stage__inner">
        <div className="virtue-p2-compare-stage__labels">
          <h3 className="virtue-p2-compare__label">{row.beforeLabel}</h3>
          <h3 className="virtue-p2-compare__label">{row.afterLabel}</h3>
        </div>

        <div className="virtue-p2-compare-stage__grid">
          <div className="virtue-p2-compare-stage__phone virtue-p2-compare-stage__phone--before">
            <Image
              src={before.src}
              alt=""
              width={before.width}
              height={before.height}
              className="virtue-p2-compare-stage__phone-img"
              unoptimized
            />
          </div>

          <div className="virtue-p2-compare-stage__before-notes">
            <Image
              src={arrowBefore.src}
              alt=""
              width={arrowBefore.width}
              height={arrowBefore.height}
              className="virtue-p2-compare-stage__arrow virtue-p2-compare-stage__arrow--before"
              unoptimized
            />
            <div className="virtue-p2-compare-stage__callout-stack">
              {row.beforeCallouts.map((callout, index) => (
                <CompareCalloutItem key={`before-${index}`} callout={callout} />
              ))}
            </div>
          </div>

          <div className="virtue-p2-compare-stage__after-notes">
            <div className="virtue-p2-compare-stage__callout-stack">
              {row.afterCallouts.map((callout, index) => (
                <CompareCalloutItem key={`after-${index}`} callout={callout} />
              ))}
            </div>
            <Image
              src={arrowBefore.src}
              alt=""
              width={arrowBefore.width}
              height={arrowBefore.height}
              className="virtue-p2-compare-stage__arrow virtue-p2-compare-stage__arrow--after"
              unoptimized
            />
          </div>

          <div className="virtue-p2-compare-stage__phone virtue-p2-compare-stage__phone--after">
            <Image
              src={after.src}
              alt=""
              width={after.width}
              height={after.height}
              className="virtue-p2-compare-stage__phone-img"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function VirtueUsabilitySolution() {
  return (
    <section className="virtue-p2-solution bg-white pb-14 pt-4 md:pb-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">
            {virtueUsabilitySolutionCopy.heading}
          </h2>
          <p className="virtue-body mt-6 max-w-[922px]">{virtueUsabilitySolutionCopy.intro}</p>
        </Reveal>

        <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
          {virtueUsabilitySolutionCopy.rows.map((row, rowIndex) => (
            <Reveal key={rowIndex} delay={0.04 * (rowIndex + 1)}>
              <CompareRowBlock
                row={row}
                variant={rowIndex === 0 ? "login" : "restriction"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
