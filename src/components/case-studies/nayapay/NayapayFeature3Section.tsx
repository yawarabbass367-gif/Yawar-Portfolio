"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFeature3Copy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayComparison } from "./NayapayComparison";
import { NayapayComposition } from "./NayapayComposition";
import { NayapayFeature3InsightsGrid } from "./NayapayFeature3InsightsGrid";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

export function NayapayFeature3Section() {
  const assets = nayapayFigmaAssets.feature3;

  return (
    <section className="overflow-x-clip bg-[#fffaf7]">
      {/* Figma 363:812–363:809 — intro: left phone, right title, full-bleed orange band */}
      <div className="overflow-x-clip py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
          <Reveal className="text-center">
            <p className="text-sm font-medium text-[var(--np-text-secondary,#666)] md:text-base">
              {nayapayFeature3Copy.index}
            </p>
          </Reveal>
        </div>

        <div className="nayapay-f3-intro relative mx-auto mt-10 max-w-[1047px] md:mt-14">
          <div aria-hidden className="nayapay-f3-intro__band" />

          <div className="relative z-10 flex flex-col px-5 lg:block lg:pl-[8%] lg:pr-0">
            <Reveal
              delay={0.05}
              className="relative order-2 mx-auto w-full lg:order-none lg:mx-0 lg:w-[28%]"
            >
                <NayapayFigmaImage
                  src={assets.phone.src}
                  alt={assets.phone.alt}
                  width={assets.phone.width}
                  height={assets.phone.height}
                  className="nayapay-comp nayapay-comp--f3-phone relative z-10 mx-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.14)] lg:mx-0"
                  sizes="(max-width: 768px) 78vw, 340px"
                  quality={100}
                  unoptimized
                />
              </Reveal>

              <Reveal
                delay={0.1}
                className="nayapay-f3-intro__copy relative order-1 mt-8 flex max-w-[418px] flex-col lg:absolute lg:left-[50%] lg:top-[24%] lg:order-none lg:mt-0 lg:max-w-[418px]"
              >
                <h2 className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-[1.05] tracking-tight text-[var(--np-text,#333)]">
                  {nayapayFeature3Copy.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
                  {nayapayFeature3Copy.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

      {/* Figma 695:2 / 695:3 — Problem | Solution side by side, below orange band */}
      <div className="mx-auto mt-14 w-full max-w-[1200px] px-5 pb-16 md:mt-16 md:px-10 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-x-10">
          <Reveal className="flex flex-col">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">📌 The Problem</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
              {nayapayFeature3Copy.problem}
            </p>
            <div className="mt-8">
              <NayapayFigmaImage
                src={assets.problemPhone.src}
                alt={assets.problemPhone.alt}
                width={assets.problemPhone.width}
                height={assets.problemPhone.height}
                className="nayapay-comp nayapay-comp--f3-problem mx-auto lg:mx-0"
                sizes="(max-width: 1024px) 88vw, 351px"
                quality={100}
                unoptimized
              />
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              💡 The Solution: Scheduled Payments
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
              {nayapayFeature3Copy.solution}
            </p>
            <div className="mt-8">
              <NayapayFigmaImage
                src={assets.solutionPhone.src}
                alt={assets.solutionPhone.alt}
                width={assets.solutionPhone.width}
                height={assets.solutionPhone.height}
                className="nayapay-comp nayapay-comp--f3-solution mx-auto lg:mx-0"
                sizes="(max-width: 1024px) 88vw, 351px"
                quality={100}
                unoptimized
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] space-y-14 px-5 pb-16 md:px-10 md:pb-24">
        <Reveal className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            🚀 Strategic Advantage for NayaPay
          </h3>
          <p className="mx-auto mt-6 max-w-[42rem] text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
            {nayapayFeature3Copy.advantage}
          </p>
          <NayapayComparison
            title="🔍 How It Compares in the Pakistani Market"
            rows={nayapayFeature3Copy.comparison}
          />
        </Reveal>

        <NayapayFeature3InsightsGrid />

        <Reveal>
          <h3 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
            Quantitative Survey
          </h3>
        </Reveal>
      </div>

      {/* F3 quantitative survey — full-bleed brown bg + charts PNG */}
      <div className="relative isolate overflow-x-clip py-10 md:py-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 h-full w-screen -translate-x-1/2">
            <NayapayFigmaImage
              src={assets.surveyBackground.src}
              alt=""
              width={assets.surveyBackground.width}
              height={assets.surveyBackground.height}
              fill
              className="object-cover object-center"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 md:px-10">
          <Reveal>
            <NayapayComposition
              asset={assets.surveyCharts}
              maxWidthClass="max-w-[1000px]"
              imgClassName="nayapay-comp nayapay-comp--f3-survey-charts"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
