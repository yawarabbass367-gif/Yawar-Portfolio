import Image from "next/image";
import { plumAssets, plumCopy } from "@/data/plum-case-study";

export function PlumWelcomeSection() {
  const cluster = plumAssets.phonesWelcome;

  return (
    <section className="plum-welcome" aria-labelledby="plum-welcome-heading">
      <div className="plum-board">
        <h2 id="plum-welcome-heading" className="plum-section-label plum-section-label--dark">
          {plumCopy.sections.welcome}
        </h2>
        <div className="plum-welcome__stage">
          <Image
            src={cluster.src}
            alt={cluster.alt}
            width={cluster.width}
            height={cluster.height}
            className="plum-welcome__img"
            sizes="(max-width: 1200px) 94vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
