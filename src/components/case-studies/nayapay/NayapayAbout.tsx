"use client";

import { Reveal } from "@/components/Reveal";
import {
  nayapayAboutCopy,
  nayapayFigmaAssets,
} from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

function highlightCopy(text: string, words: readonly string[]) {
  const pattern = new RegExp(
    `(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
      <span key={`${part}-${index}`} className="font-semibold text-[#ff7a45]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function NayapayAbout() {
  const { about } = nayapayFigmaAssets;

  return (
    <div className="relative z-10 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="max-w-xl">
            <h2 className="flex flex-wrap items-end gap-x-3 gap-y-1 text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[0.92] tracking-tight">
              <span>{nayapayAboutCopy.titleLead}</span>
              <span className="mb-2 text-[clamp(1rem,2.5vw,1.35rem)] font-medium uppercase tracking-[0.18em] text-white/70 [writing-mode:vertical-rl]">
                {nayapayAboutCopy.titleMid}
              </span>
              <span>{nayapayAboutCopy.titleEnd}</span>
            </h2>

            <p className="mt-8 text-lg font-medium text-white/92">{nayapayAboutCopy.intro}</p>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-white/78 md:text-base">
              {nayapayAboutCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{highlightCopy(paragraph, nayapayAboutCopy.highlights)}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto w-full max-w-[320px] lg:max-w-[340px] lg:justify-self-end">
            <NayapayFigmaImage
              src={about.composition.src}
              alt="NayaPay top-up success phone composition"
              width={about.composition.width}
              height={about.composition.height}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 70vw, 340px"
              unoptimized
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
