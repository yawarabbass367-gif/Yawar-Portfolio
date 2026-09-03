"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFeature3Copy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

export function NayapayFeature3InsightsGrid() {
  const { whyImageCard, walletCard } = nayapayFigmaAssets.feature3;

  return (
    <Reveal className="nayapay-f3-grid mx-auto mt-14 md:mt-16">
      {/* TOP-LEFT — image card with overlaid text */}
      <article className="nayapay-f3-grid__cell nayapay-f3-grid__cell--top relative h-full min-h-0 overflow-hidden rounded-[20px]">
        <NayapayFigmaImage
          src={whyImageCard.src}
          alt={whyImageCard.alt}
          width={whyImageCard.width}
          height={whyImageCard.height}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 520px"
          quality={100}
          unoptimized
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/75 via-black/45 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-10 md:px-6 md:pb-6">
          <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
            🔍 Why It Matters
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/90 md:text-[14px]">
            {nayapayFeature3Copy.whyOverlayIntro}
          </p>
        </div>
      </article>

      {/* TOP-RIGHT — mint bullet card */}
      <article className="nayapay-f3-grid__cell nayapay-f3-grid__cell--top flex h-full min-h-0 flex-col rounded-[20px] bg-[var(--np-mint-card,#dff4e8)] p-5 md:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-[#0f5132] md:text-xl">
          🔍 Why It Matters
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-[#1f2937] md:text-[15px]">
          This feature not only improves the user experience, but also:
        </p>
        <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-[#1f2937] md:text-[15px]">
          {nayapayFeature3Copy.whyBullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span
                aria-hidden
                className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[var(--np-tertiary,#20b47a)] text-[10px] text-white"
              >
                ✓
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* BOTTOM-LEFT — strategic advantage mint card */}
      <article className="nayapay-f3-grid__cell nayapay-f3-grid__cell--bottom relative h-full min-h-0 overflow-hidden rounded-[20px] bg-[var(--np-mint-card,#dff4e8)] p-5 md:p-6">
        <span
          aria-hidden
          className="pointer-events-none absolute left-5 top-12 select-none font-serif text-[3.5rem] leading-none text-[#b8e8d4] md:left-6 md:top-14 md:text-[4rem]"
        >
          &ldquo;
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-5 right-5 select-none font-serif text-[3.5rem] leading-none text-[#b8e8d4] md:bottom-6 md:right-6 md:text-[4rem]"
        >
          &rdquo;
        </span>
        <h3 className="relative text-lg font-semibold tracking-tight text-[#0f5132] md:text-xl">
          🚀 Strategic Advantage for NayaPay
        </h3>
        <p className="relative mt-5 max-w-[95%] text-[14px] leading-relaxed text-[#1f2937] md:mt-6 md:text-[15px]">
          {nayapayFeature3Copy.strategicAdvantageCard}
        </p>
      </article>

      {/* BOTTOM-RIGHT — wallet image card */}
      <article className="nayapay-f3-grid__cell nayapay-f3-grid__cell--bottom relative h-full min-h-0 overflow-hidden rounded-[20px]">
        <NayapayFigmaImage
          src={walletCard.src}
          alt={walletCard.alt}
          width={walletCard.width}
          height={walletCard.height}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 520px"
          quality={100}
          unoptimized
        />
      </article>
    </Reveal>
  );
}
