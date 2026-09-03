"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { virtueMoneyInsightCopy, virtuePhase2Assets } from "@/data/virtue-phase2-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtueInsightMoney() {
  const { moneyPhoneLeft, moneyPhoneRight, arrowCurved } = virtuePhase2Assets.insights;
  const [stakeCallout, rewardsCallout] = virtueMoneyInsightCopy.callouts;

  return (
    <section className="virtue-p2-money bg-white py-14 md:py-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated max-w-[808px]">
            {virtueMoneyInsightCopy.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="virtue-p2-money-stage">
          <div className="virtue-p2-money-stage__phone virtue-p2-money-stage__phone--left">
            <VirtueFigmaImage
              src={moneyPhoneLeft.src}
              alt=""
              width={moneyPhoneLeft.width}
              height={moneyPhoneLeft.height}
              className="virtue-p2-money-stage__phone-img"
              sizes="273px"
              unoptimized
            />
          </div>

          <div className="virtue-p2-money-stage__callouts">
            <div className="virtue-p2-money-stage__callout virtue-p2-money-stage__callout--stake">
              <span className="virtue-p2-callout__num" aria-hidden>
                {stakeCallout.number}
              </span>
              <p className="virtue-body">{stakeCallout.body}</p>
            </div>
            <div className="virtue-p2-money-stage__callout virtue-p2-money-stage__callout--rewards">
              <span className="virtue-p2-callout__num" aria-hidden>
                {rewardsCallout.number}
              </span>
              <p className="virtue-body">{rewardsCallout.body}</p>
            </div>
          </div>

          <div className="virtue-p2-money-stage__phone virtue-p2-money-stage__phone--right">
            <VirtueFigmaImage
              src={moneyPhoneRight.src}
              alt=""
              width={moneyPhoneRight.width}
              height={moneyPhoneRight.height}
              className="virtue-p2-money-stage__phone-img"
              sizes="276px"
              unoptimized
            />
          </div>

          <Image
            src={arrowCurved.src}
            alt=""
            width={arrowCurved.width}
            height={arrowCurved.height}
            className="virtue-p2-money-stage__arrow virtue-p2-money-stage__arrow--stake"
            unoptimized
          />
          <Image
            src={arrowCurved.src}
            alt=""
            width={arrowCurved.width}
            height={arrowCurved.height}
            className="virtue-p2-money-stage__arrow virtue-p2-money-stage__arrow--rewards"
            unoptimized
          />
        </Reveal>
      </div>
    </section>
  );
}
