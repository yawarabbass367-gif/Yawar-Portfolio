"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFeature2Copy, nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayComposition } from "./NayapayComposition";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

export function NayapayFeature2Section() {
  const assets = nayapayFigmaAssets.feature2;

  return (
    <>
      <section className="overflow-hidden bg-white py-10 md:py-14">
        <NayapayComposition
          asset={assets.cardsStrip}
          maxWidthClass="max-w-[1400px]"
          imgClassName="nayapay-comp nayapay-comp--full"
        />
      </section>

      <section className="relative isolate overflow-x-clip bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
          <Reveal className="text-center">
            <p className="text-sm font-medium text-[var(--np-text-secondary,#666)] md:text-base">
              {nayapayFeature2Copy.index}
            </p>
          </Reveal>
        </div>

        {/* Figma 259:768–259:772 — left phone, right title + body, full-bleed orange band */}
        <div className="nayapay-f2-intro relative mx-auto mt-10 max-w-[1047px] md:mt-14">
          <div aria-hidden className="nayapay-f2-intro__band" />

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
                className="nayapay-comp nayapay-comp--f2-phone relative z-10 mx-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.14)] lg:mx-0"
                sizes="(max-width: 768px) 78vw, 340px"
                quality={100}
                unoptimized
              />
            </Reveal>

            <Reveal
              delay={0.1}
              className="nayapay-f2-intro__copy relative order-1 mt-8 flex max-w-[418px] flex-col lg:absolute lg:left-[50%] lg:top-[24%] lg:order-none lg:mt-0 lg:max-w-[418px]"
            >
              <h2 className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-semibold leading-[1.05] tracking-tight text-[var(--np-text,#333)]">
                {nayapayFeature2Copy.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
                {nayapayFeature2Copy.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
          {/* Figma hierarchy: left text→image, right text→image */}
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10">
            <Reveal className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Introduction</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-muted)] md:text-base">
                  {nayapayFeature2Copy.introduction}
                </p>
              </div>
              <NayapayComposition
                asset={assets.cnicScreen}
                maxWidthClass="max-w-[420px]"
                imgClassName="nayapay-comp nayapay-comp--pair"
              />
            </Reveal>

            <Reveal delay={0.06} className="space-y-8 lg:pt-24">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Feature Description & Purpose
                </h3>
                <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[color:var(--color-muted)]">
                  {nayapayFeature2Copy.descriptionBullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span aria-hidden className="text-[#20b47a]">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <NayapayComposition
                asset={assets.addressScreen}
                maxWidthClass="max-w-[420px]"
                imgClassName="nayapay-comp nayapay-comp--pair"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#2b1424] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
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
        <div className="mx-auto w-full max-w-[1200px] space-y-10 px-5 md:px-10">
          <Reveal>
            <h3 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Quantitative Survey
            </h3>
          </Reveal>
          <NayapayComposition
            asset={assets.surveyCharts}
            maxWidthClass="max-w-[1000px]"
            imgClassName="nayapay-comp"
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] space-y-14 px-5 md:px-10">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)] md:text-base">
              {nayapayFeature2Copy.surveyIntro}
            </p>
          </Reveal>

          {/* Figma 530:834 — Insights | User Pain Points side by side */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <article className="h-full rounded-[24px] bg-[var(--np-mint-card,#dff4e8)] p-6 md:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-[#0f5132] md:text-3xl">
                  Insights
                </h3>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#1f2937]">
                  {nayapayFeature2Copy.stats.map((stat) => (
                    <li key={stat.label} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-1.5 h-[18px] w-[18px] shrink-0 rounded-full bg-[var(--np-tertiary,#20b47a)]"
                      />
                      <span>
                        <span className="font-semibold text-[#0f5132]">{stat.value}</span>{" "}
                        {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="h-full rounded-[24px] bg-[var(--np-mint-card,#dff4e8)] p-6 md:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-[#0f5132] md:text-3xl">
                  User Pain Points
                </h3>
                <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#1f2937]">
                  {nayapayFeature2Copy.painPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-1.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[var(--np-tertiary,#20b47a)] text-[10px] text-white"
                      >
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
              NayaPay Current Sign In Process
            </h3>
            <NayapayComposition asset={assets.currentSignIn} />
          </Reveal>

          <Reveal>
            <h3 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
              NayaPay New Sign In Process
            </h3>
            <NayapayComposition
              asset={assets.newSignIn}
              maxWidthClass="max-w-[900px]"
              imgClassName="nayapay-comp"
            />
            <div className="mt-12">
              <NayapayComposition
                asset={assets.newSignInDiagram}
                maxWidthClass="max-w-[900px]"
                imgClassName="nayapay-comp"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
