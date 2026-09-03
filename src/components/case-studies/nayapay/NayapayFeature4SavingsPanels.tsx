"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

/** Figma Group 1010108037–8039 — three savings flow panels below helps heading */
export function NayapayFeature4SavingsPanels() {
  const panels = nayapayFigmaAssets.feature4.savingsPanels;

  return (
    <div className="nayapay-f4-savings-panels mt-12 overflow-x-clip md:mt-16">
      <Reveal className="mx-auto w-full max-w-[1047px] px-5 md:px-8">
        <div className="nayapay-f4-savings-panels__grid">
          {panels.map((panel, index) => (
            <NayapayFigmaImage
              key={panel.src}
              src={panel.src}
              alt={panel.alt}
              width={panel.width}
              height={panel.height}
              className="nayapay-f4-savings-panels__item h-auto w-full rounded-[20px]"
              sizes="(max-width: 768px) 88vw, 320px"
              quality={100}
              unoptimized
              priority={index === 0}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
