import Image from "next/image";
import { plumAssets } from "@/data/plum-case-study";

export function PlumShowcaseSection() {
  const shot = plumAssets.showcaseSearch;

  return (
    <section className="plum-showcase" aria-label="Product showcase">
      <div className="plum-board">
        <div className="plum-showcase__frame">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            className="plum-showcase__img"
            sizes="(max-width: 1200px) 94vw, 1100px"
          />
        </div>
      </div>
    </section>
  );
}
