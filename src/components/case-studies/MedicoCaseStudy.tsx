"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { MedicoHero } from "./medico/MedicoHero";
import {
  MedicoBackgroundProblems,
  MedicoOverview,
  MedicoSolution,
} from "./medico/MedicoIntroSections";
import {
  MedicoInsights,
  MedicoResearch,
} from "./medico/MedicoResearchSections";
import {
  MedicoHmw,
  MedicoJourney,
  MedicoPersona,
} from "./medico/MedicoDefineSections";
import {
  MedicoCompetitive,
  MedicoFeatures,
  MedicoSitemap,
} from "./medico/MedicoProductSections";
import {
  MedicoAppointmentBand,
  MedicoConclusion,
  MedicoConsultation,
  MedicoExperience,
  MedicoRxFlowBand,
  MedicoShowcaseBand,
  MedicoSymptoms,
  MedicoThankYou,
  MedicoUpload,
  MedicoUsability,
} from "./medico/MedicoClosingSections";

const medicoFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Medico Healthcare App — native editable case study (PDF is design reference only) */
export function MedicoCaseStudy() {
  return (
    <main className={`medico-case overflow-x-clip pt-[88px] ${medicoFont.className}`}>
      <div className="border-b border-[color:var(--medico-line)] bg-white">
        <div className="medico-board flex items-center justify-between py-3">
          <Link
            href="/works"
            data-cursor="Back"
            className="text-sm text-[color:var(--medico-muted)] transition hover:text-[color:var(--medico-ink)]"
          >
            ← All Works
          </Link>
          <p className="text-sm text-[color:var(--medico-muted)]">Medico Case Study</p>
        </div>
      </div>

      <MedicoHero />
      <MedicoShowcaseBand />
      <MedicoBackgroundProblems />
      <MedicoSolution />
      <MedicoOverview />
      <MedicoResearch />
      <MedicoInsights />
      <MedicoPersona />
      <MedicoJourney />
      <MedicoHmw />
      <MedicoCompetitive />
      <MedicoFeatures />
      <MedicoSitemap />
      <MedicoExperience />
      <MedicoConsultation />
      <MedicoAppointmentBand />
      <MedicoUpload />
      <MedicoRxFlowBand />
      <MedicoSymptoms />
      <MedicoUsability />
      <MedicoConclusion />
      <MedicoThankYou />

      <div className="border-t border-[color:var(--medico-line)] bg-white px-5 py-8 text-center">
        <Link
          href="/works"
          data-cursor="Back"
          className="text-sm text-[color:var(--medico-muted)] transition hover:text-[color:var(--medico-ink)]"
        >
          ← Back to All Works
        </Link>
      </div>
    </main>
  );
}
