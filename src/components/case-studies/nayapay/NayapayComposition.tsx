"use client";

import { Reveal } from "@/components/Reveal";
import type { FigmaAsset } from "@/data/nayapay-figma-assets";
import { NayapayFigmaImage } from "./NayapayFigmaImage";

export function NayapayComposition({
  asset,
  className = "",
  priority = false,
  maxWidthClass = "max-w-[1200px]",
  imgClassName = "nayapay-comp",
}: {
  asset: FigmaAsset;
  className?: string;
  priority?: boolean;
  maxWidthClass?: string;
  imgClassName?: string;
}) {
  return (
    <Reveal className={`mx-auto flex w-full justify-center ${maxWidthClass} ${className}`}>
      <NayapayFigmaImage
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        className={imgClassName}
        sizes="(max-width: 1200px) 94vw, 1200px"
        quality={100}
        unoptimized
      />
    </Reveal>
  );
}
