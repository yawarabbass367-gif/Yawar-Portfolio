"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFeature1Copy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

export function NayapayFeature1Intro() {
  const { background, phone } = nayapayFigmaAssets.feature1;

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-[var(--np-text-secondary,#666)] md:text-base">
            {nayapayFeature1Copy.index}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight text-[var(--np-text,#333)]">
            {nayapayFeature1Copy.title}
          </h2>
        </Reveal>

        {/* Phone + copy; blur band sits slightly above phone bottom */}
        <div className="relative mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-1/2 z-0 h-[400px] w-screen -translate-x-1/2 md:bottom-8"
          >
            <NayapayFigmaImage
              src={background.src}
              alt=""
              width={background.width}
              height={background.height}
              fill
              className="object-cover object-center"
              sizes="100vw"
              unoptimized
            />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(280px,520px)_1fr] lg:items-end lg:gap-16">
            <Reveal delay={0.05} className="relative mx-auto w-full max-w-[520px] lg:mx-0">
              <NayapayFigmaImage
                src={phone.src}
                alt={phone.alt}
                width={phone.width}
                height={phone.height}
                className="nayapay-comp nayapay-comp--f1-phone relative z-10 mx-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
                sizes="(max-width: 768px) 72vw, 520px"
                quality={100}
                unoptimized
              />
            </Reveal>

            <Reveal
              delay={0.1}
              className="relative mb-6 flex h-[400px] max-w-xl flex-col justify-center md:mb-8"
            >
              <p className="text-sm uppercase tracking-[0.14em] text-[var(--np-text-secondary,#666)]">
                {nayapayFeature1Copy.subtitle}
              </p>
              <h2 className="mt-3 text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight text-[var(--np-text,#333)]">
                {nayapayFeature1Copy.heading}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
                {nayapayFeature1Copy.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
