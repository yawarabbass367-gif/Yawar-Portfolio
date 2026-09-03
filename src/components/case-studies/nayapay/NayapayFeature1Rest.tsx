
"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { nayapayFeature1Copy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

function MintPanel({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[24px] bg-[var(--np-mint-card,#dff4e8)] p-6 md:p-8 ${className}`}
    >
      <h3 className="text-xl font-semibold text-[#0f5132] md:text-2xl">{title}</h3>
      <div className="mt-4 text-[15px] leading-relaxed text-[var(--np-text,#333)] md:text-base">
        {children}
      </div>
    </article>
  );
}

export function NayapayFeature1Rest() {
  const { whatItDoes, paytmInspired, merchantFlows } = nayapayFigmaAssets.feature1;

  return (
    <>
      <section className="bg-white py-16 md:pb-16 md:pt-20">
        <div className="mx-auto w-full max-w-[1200px] space-y-14 px-5 md:px-10">
          {/* Figma 670:21 — equal-height cards; left image+overlay caption, right mint */}
          <RevealGroup className="grid auto-rows-fr gap-6 lg:grid-cols-2">
            <RevealItem className="h-full min-h-[300px] md:min-h-[340px]">
              <article className="relative h-full overflow-hidden rounded-[24px]">
                <NayapayFigmaImage
                  src={whatItDoes.src}
                  alt={whatItDoes.alt}
                  width={whatItDoes.width}
                  height={whatItDoes.height}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 560px"
                  unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-8 text-white">
                  <h3 className="text-xl font-semibold drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] md:text-2xl">
                    What it does
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] md:text-[15px]">
                    {nayapayFeature1Copy.whatItDoes}
                  </p>
                </div>
              </article>
            </RevealItem>

            <RevealItem className="h-full min-h-[300px] md:min-h-[340px]">
              <MintPanel title="Survey Insights" className="flex h-full flex-col">
                <p className="flex-1">{nayapayFeature1Copy.surveyInsights}</p>
              </MintPanel>
            </RevealItem>

            <RevealItem className="h-full min-h-[300px] md:min-h-[340px]">
              <article className="relative h-full overflow-hidden rounded-[24px]">
                <NayapayFigmaImage
                  src={paytmInspired.src}
                  alt={paytmInspired.alt}
                  width={paytmInspired.width}
                  height={paytmInspired.height}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 560px"
                  unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-8 text-white">
                  <h3 className="text-xl font-semibold drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] md:text-2xl">
                    Inspired by Paytm
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] md:text-[15px]">
                    {nayapayFeature1Copy.paytmInspired}
                  </p>
                </div>
              </article>
            </RevealItem>

            <RevealItem className="h-full min-h-[300px] md:min-h-[340px]">
              <MintPanel title="Value for Nayapay" className="flex h-full flex-col">
                <ul className="mt-auto space-y-4">
                  {nayapayFeature1Copy.valueItems.map((item) => (
                    <li key={item}>
                      <div className="mb-2 text-sm font-medium">{item}</div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/70">
                        <div className="h-full w-[88%] rounded-full bg-[var(--np-tertiary,#20b47a)]" />
                      </div>
                    </li>
                  ))}
                </ul>
              </MintPanel>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            <RevealItem>
              <article className="h-full rounded-[24px] bg-[var(--np-mint-card,#dff4e8)] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#0f5132] md:text-2xl">
                  The Future Outlook
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--np-text,#333)] md:text-base">
                  {nayapayFeature1Copy.outlook}
                </p>
              </article>
            </RevealItem>
            <RevealItem>
              <article className="h-full rounded-[24px] bg-[var(--np-mint-card,#dff4e8)] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#0f5132] md:text-2xl">Conclusion</h3>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[var(--np-text,#333)]">
                  {nayapayFeature1Copy.conclusion.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="text-[var(--np-tertiary,#20b47a)]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Figma 671:23 — single merchant phones PNG over orange band 259:767 */}
      <section className="nayapay-merchant" aria-label="NayaPay for Business merchant flows">
        <div className="nayapay-merchant__stage">
          <div aria-hidden className="nayapay-merchant__bg" />
          <Reveal>
            <NayapayFigmaImage
              src={merchantFlows.src}
              alt={merchantFlows.alt}
              width={merchantFlows.width}
              height={merchantFlows.height}
              className="nayapay-merchant__img"
              sizes="(max-width: 767px) 94vw, 1100px"
              quality={100}
              unoptimized
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
