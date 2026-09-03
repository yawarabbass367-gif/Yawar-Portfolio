"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {
  nayapayFigmaAssets,
  nayapayGoalsCopy,
  nayapayGoalsLayout,
} from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

export function NayapayGoals() {
  const { goals } = nayapayFigmaAssets;

  return (
    <div className="relative z-10 pb-20 pt-4 md:pb-28 md:pt-8">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2.25rem,5.5vw,4rem)] font-semibold tracking-tight">
            Project{" "}
            <span className="relative inline-block">
              Goals
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#ff5018]"
              />
            </span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/75 md:text-base">
            {nayapayGoalsCopy.intro}
          </p>
        </Reveal>

        <RevealGroup className="relative mx-auto mt-14 hidden min-h-[340px] max-w-[1047px] lg:block">
          {nayapayGoalsLayout.map((goal) => {
            const icon = goals[goal.iconKey];
            return (
              <RevealItem key={goal.id}>
                <article
                  className="absolute flex w-[min(260px,24%)] items-start gap-3 text-left"
                  style={{ top: goal.desktop.top, left: goal.desktop.left }}
                >
                  <NayapayFigmaImage
                    src={icon.src}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                    aria-hidden
                    className="h-[64px] w-[64px] shrink-0 object-contain"
                    sizes="64px"
                  />
                  <div className="min-w-0 pt-1">
                    <h3 className="text-base font-semibold leading-tight">{goal.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-snug text-white/72">
                      {goal.description}
                    </p>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
          {nayapayGoalsLayout.map((goal) => {
            const icon = goals[goal.iconKey];
            return (
              <RevealItem key={goal.id}>
                <article className="flex gap-4">
                  <NayapayFigmaImage
                    src={icon.src}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                    aria-hidden
                    className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
                    sizes="80px"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{goal.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">{goal.description}</p>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
