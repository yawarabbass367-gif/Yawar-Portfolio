"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayBrandSystemCopy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

/** Figma Group 1010108040 + typography/color palette — brand system appendix */
export function NayapayBrandSystem() {
  const { accent, colorPalette } = nayapayFigmaAssets.brandSystem;

  return (
    <section className="nayapay-brand-system overflow-x-clip bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1047px] px-5 md:px-10">
        <div className="nayapay-brand-system__top">
          <Reveal className="nayapay-brand-system__type">
            <p className="nayapay-brand-system__font-name">{nayapayBrandSystemCopy.fontName}</p>
            <p className="nayapay-brand-system__charset">{nayapayBrandSystemCopy.alphabet}</p>
            <p className="nayapay-brand-system__charset">{nayapayBrandSystemCopy.symbols}</p>
          </Reveal>

          <Reveal delay={0.05} className="nayapay-brand-system__accent-wrap">
            <div aria-hidden className="nayapay-brand-system__accent-glow" />
            <NayapayFigmaImage
              src={accent.src}
              alt=""
              width={accent.width}
              height={accent.height}
              className="nayapay-brand-system__accent"
              sizes="(max-width: 768px) 220px, 280px"
              quality={100}
              unoptimized
            />
          </Reveal>
        </div>

        <Reveal delay={0.08} className="nayapay-brand-system__palette">
          <NayapayFigmaImage
            src={colorPalette.src}
            alt={colorPalette.alt}
            width={colorPalette.width}
            height={colorPalette.height}
            className="nayapay-brand-system__palette-img h-auto w-full"
            sizes="(max-width: 768px) 88vw, 520px"
            quality={100}
            unoptimized
          />
        </Reveal>
      </div>
    </section>
  );
}
