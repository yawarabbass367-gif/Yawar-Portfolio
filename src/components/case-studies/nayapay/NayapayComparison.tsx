"use client";

import { Reveal } from "@/components/Reveal";
import type { NayapayComparisonRow } from "@/data/nayapay-figma-assets";

function formatScheduledPayments(wallet: string, status: string) {
  if (wallet === "NayaPay") {
    return `⏳ ${status}`;
  }

  return `❌ ${status}`;
}

export function NayapayComparison({
  title,
  rows,
}: {
  title: string;
  rows: NayapayComparisonRow[];
}) {
  return (
    <Reveal className="mt-12 text-center md:mt-14">
      <h4 className="text-xl font-semibold tracking-tight text-[var(--np-text,#333)] md:text-2xl">
        {title}
      </h4>
      <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--np-text-secondary,#666)]">
        Let&apos;s look at some of the major digital wallets in Pakistan:
      </p>

      <div className="nayapay-comparison mx-auto mt-8 max-w-[52rem] overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-[15px] leading-relaxed">
          <thead>
            <tr className="border-b border-[#e0e0e0]">
              <th className="w-[17%] pb-3 pr-6 font-semibold text-[var(--np-text,#333)]">
                Wallet
              </th>
              <th className="w-[28%] pb-3 pr-6 font-semibold text-[var(--np-text,#333)]">
                Scheduled Payments
              </th>
              <th className="pb-3 font-semibold text-[var(--np-text,#333)]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.wallet} className="border-b border-[#e0e0e0] last:border-b-0">
                <td className="py-4 pr-6 align-top font-medium text-[var(--np-text,#333)]">
                  {row.wallet}
                </td>
                <td className="py-4 pr-6 align-top text-[var(--np-text,#333)]">
                  {formatScheduledPayments(row.wallet, row.scheduledPayments)}
                </td>
                <td className="py-4 align-top text-[var(--np-text-secondary,#666)]">
                  {row.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
