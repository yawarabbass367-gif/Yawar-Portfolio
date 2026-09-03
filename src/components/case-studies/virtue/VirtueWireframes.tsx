"use client";

import { Reveal } from "@/components/Reveal";
import { virtuePhase2Assets, virtueWireframesCopy } from "@/data/virtue-phase2-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

const wireframeGroups = [
  virtuePhase2Assets.wireframes.group1,
  virtuePhase2Assets.wireframes.group2,
  virtuePhase2Assets.wireframes.group3,
  virtuePhase2Assets.wireframes.group4,
] as const;

export function VirtueWireframes() {
  const { phoneInstagramLimit, phoneHdfcNetbanking } = virtuePhase2Assets.wireframes;

  return (
    <section className="virtue-p2-wireframes">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal className="virtue-p2-screens-header">
          <h2 className="virtue-section-title virtue-section-title--decorated">
            {virtueWireframesCopy.heading}
          </h2>
          <p className="virtue-body mt-3 max-w-[641px] md:mt-4">{virtueWireframesCopy.intro}</p>
        </Reveal>
      </div>

      <div className="virtue-p2-screens-bleed" aria-label="Digital wireframe screens">
        <div className="virtue-p2-screens-bleed__inner">
          {wireframeGroups.map((group) => (
            <VirtueFigmaImage
              key={group.src}
              src={group.src}
              alt=""
              width={group.width}
              height={group.height}
              className="virtue-p2-screens-bleed__img"
              sizes="(max-width: 768px) 100vw, 1001px"
              unoptimized
            />
          ))}

          {/* Figma Group 369 bottom row: Instagram limit (center) + HDFC (right) */}
          <div className="virtue-p2-wireframe-row5">
            <VirtueFigmaImage
              src={phoneInstagramLimit.src}
              alt=""
              width={phoneInstagramLimit.width}
              height={phoneInstagramLimit.height}
              className="virtue-p2-wireframe-row5__phone virtue-p2-wireframe-row5__phone--instagram"
              sizes="(max-width: 768px) 45vw, 293px"
              unoptimized
            />
            <VirtueFigmaImage
              src={phoneHdfcNetbanking.src}
              alt=""
              width={phoneHdfcNetbanking.width}
              height={phoneHdfcNetbanking.height}
              className="virtue-p2-wireframe-row5__phone virtue-p2-wireframe-row5__phone--hdfc"
              sizes="(max-width: 768px) 45vw, 293px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
