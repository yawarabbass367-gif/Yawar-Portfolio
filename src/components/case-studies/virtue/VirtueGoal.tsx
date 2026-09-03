"use client";

import { Reveal } from "@/components/Reveal";
import { virtueAssets, virtueGoalCopy } from "@/data/virtue-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtueGoal() {
  const avatar = virtueAssets.section3.avatar;

  return (
    <section className="virtue-goal bg-white pb-14 pt-4 md:pb-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <div className="virtue-goal__layout">
          <Reveal>
            <h2 className="virtue-section-title virtue-section-title--decorated">{virtueGoalCopy.heading}</h2>
            <p className="virtue-body mt-5 max-w-[741px]">{virtueGoalCopy.body}</p>
          </Reveal>

          <Reveal delay={0.06} className="virtue-goal__avatar">
            <VirtueFigmaImage
              src={avatar.src}
              alt={avatar.alt}
              width={avatar.width}
              height={avatar.height}
              className="virtue-goal__avatar-img h-auto w-full max-w-[310px]"
              sizes="(max-width: 1024px) 68vw, 310px"
              quality={100}
              unoptimized
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
