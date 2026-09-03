"use client";

import Image from "next/image";

type NayapayFigmaImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

export function NayapayFigmaImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes,
  fill = false,
  quality = 85,
  unoptimized = false,
}: NayapayFigmaImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={className}
        sizes={sizes ?? "100vw"}
        quality={quality}
        unoptimized={unoptimized}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
      sizes={sizes ?? "(max-width: 768px) 100vw, 1200px"}
      quality={quality}
      unoptimized={unoptimized}
    />
  );
}
