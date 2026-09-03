"use client";

import { Poppins } from "next/font/google";
import { TawhaHero } from "./tawha/TawhaHero";
import { TawhaIntro } from "./tawha/TawhaIntro";
import { TawhaProblemDiscovery } from "./tawha/TawhaProblemDiscovery";
import { TawhaCoreProblems } from "./tawha/TawhaCoreProblems";
import { TawhaFeatureBand } from "./tawha/TawhaFeatureBand";
import { TawhaDesignOpportunity } from "./tawha/TawhaDesignOpportunity";
import { TawhaUserSegmentation } from "./tawha/TawhaUserSegmentation";
import { TawhaWhoUses } from "./tawha/TawhaWhoUses";
import { TawhaChallenge1 } from "./tawha/TawhaChallenge1";
import { TawhaChallenge2 } from "./tawha/TawhaChallenge2";

const tawhaFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Tawha Pay — native editable case study (Figma is design reference) */
export function TawhaPayCaseStudy() {
  return (
    <main className={`tawha-case overflow-x-clip pt-[88px] ${tawhaFont.className}`}>
      <TawhaHero />
      <TawhaIntro />
      <TawhaProblemDiscovery />
      <TawhaCoreProblems />
      <TawhaFeatureBand />
      <TawhaDesignOpportunity />
      <TawhaUserSegmentation />
      <TawhaWhoUses />
      <TawhaChallenge1 />
      <TawhaChallenge2 />
    </main>
  );
}
