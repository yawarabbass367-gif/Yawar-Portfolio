"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { PlumColorsSection } from "./plum/PlumColorsSection";
import { PlumFeaturesSection } from "./plum/PlumFeaturesSection";
import { PlumFontSection } from "./plum/PlumFontSection";
import { PlumFooterSection } from "./plum/PlumFooterSection";
import { PlumHero } from "./plum/PlumHero";
import { PlumIconSection } from "./plum/PlumIconSection";
import { PlumIconsSection } from "./plum/PlumIconsSection";
import { PlumMobileScreensSection } from "./plum/PlumMobileScreensSection";
import { PlumQuotesSection } from "./plum/PlumQuotesSection";
import { PlumShowcaseSection } from "./plum/PlumShowcaseSection";
import { PlumWelcomeSection } from "./plum/PlumWelcomeSection";
import { PlumWireframesSection } from "./plum/PlumWireframesSection";

const plumFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Plum Music App — native editable case study (PDF is design reference only) */
export function PlumCaseStudy() {
  return (
    <main className={`plum-case overflow-x-clip pt-[88px] ${plumFont.className}`}>
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-3 md:px-8">
          <Link
            href="/works"
            data-cursor="Back"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← All Works
          </Link>
          <p className="text-sm text-white/45">Plum Case Study</p>
        </div>
      </div>

      <PlumHero />
      <PlumIconSection />
      <PlumColorsSection />
      <PlumIconsSection />
      <PlumQuotesSection />
      <PlumFontSection />
      <PlumShowcaseSection />
      <PlumWireframesSection />
      <PlumFeaturesSection />
      <PlumWelcomeSection />
      <PlumMobileScreensSection />
      <PlumFooterSection />

      <div className="border-t border-white/10 bg-black px-5 py-8 text-center md:px-8">
        <Link
          href="/works"
          data-cursor="Back"
          className="text-sm text-white/60 transition hover:text-white"
        >
          ← Back to All Works
        </Link>
      </div>
    </main>
  );
}
