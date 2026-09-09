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
import { TawhaPersonalBenchmark } from "./tawha/TawhaPersonalBenchmark";
import { TawhaBenchmarkFindings } from "./tawha/TawhaBenchmarkFindings";
import { TawhaUxOpportunities } from "./tawha/TawhaUxOpportunities";
import { TawhaBusinessBenchmark } from "./tawha/TawhaBusinessBenchmark";
import { TawhaBusinessFindings } from "./tawha/TawhaBusinessFindings";
import { TawhaBusinessUxOpportunities } from "./tawha/TawhaBusinessUxOpportunities";
import { TawhaModule1Accounts } from "./tawha/TawhaModule1Accounts";
import { TawhaModule2Payments } from "./tawha/TawhaModule2Payments";
import { TawhaModule3Collections } from "./tawha/TawhaModule3Collections";
import { TawhaModule4Reports } from "./tawha/TawhaModule4Reports";
import { TawhaModule5Users } from "./tawha/TawhaModule5Users";
import { TawhaClosing } from "./tawha/TawhaClosing";

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
      <TawhaPersonalBenchmark />
      <TawhaBenchmarkFindings />
      <TawhaUxOpportunities />
      <TawhaBusinessBenchmark />
      <TawhaBusinessFindings />
      <TawhaBusinessUxOpportunities />
      <TawhaModule1Accounts />
      <TawhaModule2Payments />
      <TawhaModule3Collections />
      <TawhaModule4Reports />
      <TawhaModule5Users />
      <TawhaClosing />
    </main>
  );
}
