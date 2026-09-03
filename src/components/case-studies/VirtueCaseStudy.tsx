"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { VirtueAbout } from "./virtue/VirtueAbout";
import { VirtueCompetitiveAnalysis } from "./virtue/VirtueCompetitiveAnalysis";
import { VirtueDesignProcess } from "./virtue/VirtueDesignProcess";
import { VirtueGoal } from "./virtue/VirtueGoal";
import { VirtueHero } from "./virtue/VirtueHero";
import { VirtueAccessibility } from "./virtue/VirtueAccessibility";
import { VirtueHighFidelity } from "./virtue/VirtueHighFidelity";
import { VirtueInsightMoney } from "./virtue/VirtueInsightMoney";
import { VirtueInsightYoutube } from "./virtue/VirtueInsightYoutube";
import { VirtuePersona } from "./virtue/VirtuePersona";
import { VirtuePersonaTwo } from "./virtue/VirtuePersonaTwo";
import { VirtueProblem } from "./virtue/VirtueProblem";
import { VirtueStayConnected } from "./virtue/VirtueStayConnected";
import { VirtueTakeaways } from "./virtue/VirtueTakeaways";
import { VirtueUsabilityFindings } from "./virtue/VirtueUsabilityFindings";
import { VirtueUsabilitySolution } from "./virtue/VirtueUsabilitySolution";
import { VirtueUsabilityStudy } from "./virtue/VirtueUsabilityStudy";
import { VirtueUserResearch } from "./virtue/VirtueUserResearch";
import { VirtueWireframes } from "./virtue/VirtueWireframes";

const virtueFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

/** Virtue case study — Hero through closing footer */
export function VirtueCaseStudy() {
  return (
    <main className={`virtue-case overflow-x-clip pt-[88px] ${virtueFont.className}`}>
      <div className="border-b border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
        <div className="container-wide flex items-center justify-between py-3">
          <Link
            href="/works"
            data-cursor="Back"
            className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
          >
            ← All Works
          </Link>
          <p className="text-sm text-[color:var(--color-soft)]">Virtue Case Study</p>
        </div>
      </div>

      <VirtueHero />
      <VirtueAbout />
      <VirtueProblem />
      <VirtueGoal />
      <VirtueDesignProcess />
      <VirtueUserResearch />
      <VirtueCompetitiveAnalysis />
      <VirtuePersona />
      <VirtuePersonaTwo />
      <VirtueUsabilityStudy />
      <VirtueUsabilityFindings />
      <VirtueUsabilitySolution />
      <VirtueInsightYoutube />
      <VirtueInsightMoney />
      <VirtueAccessibility />
      <VirtueWireframes />
      <VirtueHighFidelity />
      <VirtueTakeaways />
      <VirtueStayConnected />
    </main>
  );
}
