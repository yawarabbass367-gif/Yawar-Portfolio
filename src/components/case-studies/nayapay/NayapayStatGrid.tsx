"use client";

import { RevealGroup, RevealItem } from "@/components/Reveal";
import type { NayapayStat } from "@/data/nayapay-figma-assets";

export function NayapayStatGrid({
  stats,
  className = "",
}: {
  stats: NayapayStat[];
  className?: string;
}) {
  return (
    <RevealGroup className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {stats.map((stat) => (
        <RevealItem key={stat.label}>
          <div className="rounded-2xl bg-[#dff4e8] px-6 py-5">
            <p className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-none tracking-tight text-[#0f5132]">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#1f2937] md:text-[15px]">
              {stat.label}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
