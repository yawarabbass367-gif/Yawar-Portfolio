"use client";

import { Reveal } from "@/components/Reveal";
import { nayapayFeature4Copy } from "@/data/nayapay-figma-assets";

export function NayapayFeature4HelpsGrid() {
  return (
    <div className="nayapay-f4-helps-grid mt-8 md:mt-10">
      {nayapayFeature4Copy.cards.map((card, index) => (
        <Reveal
          key={card.id}
          delay={index * 0.04}
          className={`nayapay-f4-helps-card nayapay-f4-helps-card--${card.id}`}
        >
          <article
            className="h-full rounded-[18px] p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:rounded-[20px] md:p-5"
            style={{ backgroundColor: card.bg }}
          >
            <p className="text-[13px] leading-[1.55] text-[var(--np-text-secondary,#555)] md:text-[14px]">
              <span className="nayapay-f4-helps-card__title">{card.title}:</span> {card.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
