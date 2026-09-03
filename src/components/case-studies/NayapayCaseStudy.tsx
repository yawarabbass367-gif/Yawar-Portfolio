"use client";

import Link from "next/link";
import { NayapayAbout } from "./nayapay/NayapayAbout";
import { NayapayBrandSystem } from "./nayapay/NayapayBrandSystem";
import { NayapayClosing } from "./nayapay/NayapayClosing";
import { NayapayFeature1Intro } from "./nayapay/NayapayFeature1Intro";
import { NayapayFeature1Rest } from "./nayapay/NayapayFeature1Rest";
import { NayapayFeature2Section } from "./nayapay/NayapayFeature2Section";
import { NayapayFeature3Section } from "./nayapay/NayapayFeature3Section";
import {
  NayapayFeature4Helps,
  NayapayFeature4Intro,
} from "./nayapay/NayapayFeature4Section";
import { NayapayGoals } from "./nayapay/NayapayGoals";
import { NayapayHero } from "./nayapay/NayapayHero";
import { NayapayPersona } from "./nayapay/NayapayPersona";
import { nayapayFigmaAssets } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./nayapay/NayapayFigmaImage";

/**
 * NayaPay case study — Figma frame "3" (198:632) is the source of truth.
 */
export function NayapayCaseStudy() {
  const { aboutGoalsBg } = nayapayFigmaAssets;

  return (
    <main className="nayapay-case overflow-x-clip pt-[88px]">
      <div className="border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)] font-[family-name:var(--font-stenz)]">
        <div className="container-wide flex items-center justify-between py-3">
          <Link
            href="/works"
            data-cursor="Back"
            className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
          >
            ← All Works
          </Link>
          <p className="text-sm text-[color:var(--color-soft)]">NayaPay Case Study</p>
        </div>
      </div>

      <NayapayHero />

      {/* Figma 668:6 — About + Goals share one continuous dark background */}
      <section className="nayapay-dark-story relative isolate overflow-hidden bg-[var(--np-dark,#2b1424)] text-white">
        <NayapayFigmaImage
          src={aboutGoalsBg.src}
          alt=""
          width={aboutGoalsBg.width}
          height={aboutGoalsBg.height}
          fill
          aria-hidden
          className="pointer-events-none -z-10 object-cover object-top opacity-90"
          sizes="100vw"
        />
        <NayapayAbout />
        <NayapayGoals />
      </section>

      <NayapayFeature1Intro />
      <NayapayFeature1Rest />
      <NayapayFeature2Section />
      <NayapayFeature3Section />
      <NayapayFeature4Intro />
      <NayapayPersona />
      <NayapayFeature4Helps />
      <NayapayBrandSystem />
      <NayapayClosing />
    </main>
  );
}
