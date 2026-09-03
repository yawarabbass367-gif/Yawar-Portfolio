"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFeature4Copy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFeature4HelpsGrid } from "./NayapayFeature4HelpsGrid";
import { NayapayFeature4SavingsPanels } from "./NayapayFeature4SavingsPanels";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

/** Figma 407:690–477:696 — Feature 4 intro: centered title, left phone, full-bleed peach band, right copy */
export function NayapayFeature4Intro() {
  const { phone } = nayapayFigmaAssets.feature4;

  return (
    <section className="overflow-x-clip bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-[var(--np-text-secondary,#666)] md:text-base">
            {nayapayFeature4Copy.index}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-[var(--np-text,#333)]">
            {nayapayFeature4Copy.title}
          </h2>
        </Reveal>
      </div>

      <div className="nayapay-f4-intro relative mx-auto mt-10 max-w-[1047px] md:mt-14">
        <div aria-hidden className="nayapay-f4-intro__band" />

        <div className="nayapay-f4-intro__stage relative z-10 px-5 lg:pl-[11%] lg:pr-5">
          <Reveal delay={0.05} className="nayapay-f4-intro__phone">
            <NayapayFigmaImage
              src={phone.src}
              alt={phone.alt}
              width={phone.width}
              height={phone.height}
              className="nayapay-comp nayapay-comp--f4-phone relative z-10 drop-shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
              sizes="(max-width: 768px) 72vw, 289px"
              quality={100}
              unoptimized
            />
          </Reveal>

          <Reveal delay={0.1} className="nayapay-f4-intro__copy">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--np-text-secondary,#666)] md:text-sm">
              {nayapayFeature4Copy.subtitle}
            </p>
            <h3 className="mt-3 text-[clamp(1.5rem,2.8vw,2.25rem)] font-semibold leading-[1.12] tracking-tight text-[var(--np-text,#333)]">
              {nayapayFeature4Copy.headingLine1}
              <br />
              {nayapayFeature4Copy.headingLine2}
            </h3>
            {nayapayFeature4Copy.intro ? (
              <p className="mt-5 max-w-[32rem] text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:mt-6 md:text-base">
                {nayapayFeature4Copy.intro}
              </p>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function NayapayFeature4Helps() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1047px] px-5 md:px-10">
        <Reveal>
          <h3 className="max-w-[815px] text-[clamp(1.125rem,2vw,1.625rem)] font-semibold leading-[1.25] tracking-tight text-[var(--np-text,#333)]">
            👥 {nayapayFeature4Copy.helpsTitle}
          </h3>
        </Reveal>

        <NayapayFeature4HelpsGrid />
      </div>

      <NayapayFeature4SavingsPanels />
    </section>
  );
}
