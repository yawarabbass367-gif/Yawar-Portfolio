"use client";

import { Reveal } from "@/components/Reveal";
import { virtueAssets, virtueHeroCopy } from "@/data/virtue-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtueHero() {
  const { logoMark, phones, starLeft, starRight, wave, arrowLeft, arrowRight } = virtueAssets.hero;

  return (
    <section className="virtue-hero relative z-[1] overflow-x-clip bg-white pb-0 pt-8 md:pt-10">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal className="text-center">
          <div className="virtue-hero__brand-row mx-auto inline-flex items-center justify-center gap-2.5">
            <VirtueFigmaImage
              src={logoMark.src}
              alt={logoMark.alt}
              width={logoMark.width}
              height={logoMark.height}
              className="virtue-hero__logo h-auto w-[56px] shrink-0"
              sizes="56px"
              priority
              unoptimized
            />
            <p className="virtue-hero__brand">{virtueHeroCopy.brand}</p>
          </div>
          <h1 className="virtue-hero__title">{virtueHeroCopy.title}</h1>
          <p className="virtue-hero__subtitle mx-auto">{virtueHeroCopy.subtitle}</p>
        </Reveal>

        <Reveal delay={0.06} className="virtue-hero__stage relative mx-auto mt-6 md:mt-8">
          <VirtueFigmaImage
            src={wave.src}
            alt=""
            width={wave.width}
            height={wave.height}
            className="virtue-hero__wave pointer-events-none absolute right-[29%] top-[1%] z-20 h-auto w-[52px] md:right-[32%] md:w-[71px]"
            sizes="71px"
            unoptimized
          />

          <VirtueFigmaImage
            src={starLeft.src}
            alt=""
            width={starLeft.width}
            height={starLeft.height}
            className="virtue-hero__star virtue-hero__star--left pointer-events-none absolute left-[17%] top-[36%] z-20 h-auto w-[34px] md:left-[18%] md:w-[41px]"
            sizes="41px"
            unoptimized
          />
          <VirtueFigmaImage
            src={starRight.src}
            alt=""
            width={starRight.width}
            height={starRight.height}
            className="virtue-hero__star virtue-hero__star--right pointer-events-none absolute right-[17%] top-[36%] z-20 h-auto w-[34px] md:right-[18%] md:w-[41px]"
            sizes="41px"
            unoptimized
          />

          <VirtueFigmaImage
            src={arrowLeft.src}
            alt=""
            width={arrowLeft.width}
            height={arrowLeft.height}
            className="virtue-hero__arrow virtue-hero__arrow--left pointer-events-none absolute left-[12%] top-[26%] z-20 hidden h-auto w-[72px] md:block md:w-[96px]"
            sizes="96px"
            unoptimized
          />
          <VirtueFigmaImage
            src={arrowRight.src}
            alt=""
            width={arrowRight.width}
            height={arrowRight.height}
            className="virtue-hero__arrow virtue-hero__arrow--right pointer-events-none absolute right-[12%] top-[26%] z-20 hidden h-auto w-[72px] md:block md:w-[96px]"
            sizes="96px"
            unoptimized
          />

          <VirtueFigmaImage
            src={phones.src}
            alt={phones.alt}
            width={phones.width}
            height={phones.height}
            priority
            className="virtue-hero__phones relative z-10 mx-auto h-auto w-full"
            sizes="(max-width: 768px) 92vw, 619px"
            quality={100}
            unoptimized
          />
        </Reveal>
      </div>
    </section>
  );
}
