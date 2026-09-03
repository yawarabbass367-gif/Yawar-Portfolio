import Image from "next/image";
import { tawhaAssets } from "@/data/tawha-case-study";

export function TawhaFeatureBand() {
  const { featureBand } = tawhaAssets;

  return (
    <section className="tawha-feature-band" aria-label="Product feature illustration">
      <div className="tawha-board">
        <div className="tawha-feature-band__frame">
          <Image
            src={featureBand.src}
            alt={featureBand.alt}
            width={featureBand.width}
            height={featureBand.height}
            className="tawha-feature-band__img"
            sizes="(max-width: 640px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
