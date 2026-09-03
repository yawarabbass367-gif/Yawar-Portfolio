"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { virtuePhase2Assets, virtueYoutubeInsightCopy } from "@/data/virtue-phase2-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtueInsightYoutube() {
  const {
    youtubeHeadingIcon,
    youtubePhoneLeft,
    youtubePhoneRight,
    arrowCurved,
  } = virtuePhase2Assets.insights;
  const { callout } = virtueYoutubeInsightCopy;

  return (
    <section className="virtue-p2-youtube bg-white py-14 md:py-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated virtue-p2-youtube__title">
            {virtueYoutubeInsightCopy.headingBeforeIcon}
            <VirtueFigmaImage
              src={youtubeHeadingIcon.src}
              alt=""
              width={youtubeHeadingIcon.width}
              height={youtubeHeadingIcon.height}
              className="virtue-p2-youtube__yt-icon"
              sizes="34px"
              unoptimized
            />
            {virtueYoutubeInsightCopy.headingAfterIcon}
          </h2>
          <p className="virtue-body mt-4 max-w-[995px] md:mt-5">
            {virtueYoutubeInsightCopy.body}
          </p>
        </Reveal>

        <Reveal delay={0.06} className="virtue-p2-youtube-stage">
          <div className="virtue-p2-youtube-stage__phone virtue-p2-youtube-stage__phone--left">
            <VirtueFigmaImage
              src={youtubePhoneLeft.src}
              alt=""
              width={youtubePhoneLeft.width}
              height={youtubePhoneLeft.height}
              className="virtue-p2-youtube-stage__phone-img"
              sizes="270px"
              unoptimized
            />
          </div>

          <div className="virtue-p2-youtube-stage__callout">
            <span className="virtue-p2-callout__num" aria-hidden>
              {callout.number}
            </span>
            <p className="virtue-body">{callout.body}</p>
          </div>

          <div className="virtue-p2-youtube-stage__phone virtue-p2-youtube-stage__phone--right">
            <VirtueFigmaImage
              src={youtubePhoneRight.src}
              alt=""
              width={youtubePhoneRight.width}
              height={youtubePhoneRight.height}
              className="virtue-p2-youtube-stage__phone-img"
              sizes="270px"
              unoptimized
            />
          </div>

          <Image
            src={arrowCurved.src}
            alt=""
            width={arrowCurved.width}
            height={arrowCurved.height}
            className="virtue-p2-youtube-stage__arrow"
            unoptimized
          />
        </Reveal>
      </div>
    </section>
  );
}
