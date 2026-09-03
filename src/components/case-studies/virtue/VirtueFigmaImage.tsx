"use client";

import Image from "next/image";

type VirtueFigmaImageProps = {
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

export function VirtueFigmaImage({
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
}: VirtueFigmaImageProps) {
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
