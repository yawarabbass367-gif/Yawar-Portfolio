import Image from "next/image";
import { plumAssets, plumCopy } from "@/data/plum-case-study";

function FeatureBlock({
  copy,
  image,
}: {
  copy: { before: string; highlight: string; after: string };
  image: { src: string; width: number; height: number; alt: string };
}) {
  return (
    <div className="plum-feature">
      <p className="plum-feature__copy">
        {copy.before}
        <span className="plum-accent">{copy.highlight}</span>
        {copy.after}
      </p>
      <div className="plum-feature__phone">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="plum-feature__img"
          sizes="(max-width: 768px) 220px, 280px"
        />
      </div>
    </div>
  );
}

export function PlumFeaturesSection() {
  return (
    <section className="plum-features" aria-label="Product features">
      {/* Editable black shell — rounded bottom only; does not wrap/move the phone */}
      <div className="plum-features__black" aria-hidden />
      <div className="plum-board">
        <FeatureBlock
          copy={plumCopy.features.notifications}
          image={plumAssets.phoneNotifications}
        />
        <FeatureBlock copy={plumCopy.features.apps} image={plumAssets.phoneApps} />
      </div>
    </section>
  );
}
