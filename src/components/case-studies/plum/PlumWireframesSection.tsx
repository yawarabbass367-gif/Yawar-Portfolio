import Image from "next/image";
import { plumAssets } from "@/data/plum-case-study";

export function PlumWireframesSection() {
  const grid = plumAssets.wireframesGrid;
  const extra = plumAssets.wireframesExtra;

  return (
    <section className="plum-wireframes" aria-label="Wireframes">
      <div className="plum-board">
        <Image
          src={grid.src}
          alt={grid.alt}
          width={grid.width}
          height={grid.height}
          className="plum-wireframes__img"
          sizes="(max-width: 1200px) 94vw, 1100px"
        />
        <Image
          src={extra.src}
          alt={extra.alt}
          width={extra.width}
          height={extra.height}
          className="plum-wireframes__img plum-wireframes__img--extra"
          sizes="(max-width: 1200px) 94vw, 1100px"
        />
      </div>
    </section>
  );
}
