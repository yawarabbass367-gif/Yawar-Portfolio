import Image from "next/image";
import { plumAssets, plumCopy } from "@/data/plum-case-study";

export function PlumQuotesSection() {
  const photo = plumAssets.phoneRocky;

  return (
    <section className="plum-quotes" aria-label="Music quotes">
      <div className="plum-board plum-quotes__layout">
        <div className="plum-quotes__media">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="plum-quotes__img"
            sizes="(max-width: 900px) 90vw, 420px"
          />
        </div>
        <div className="plum-quotes__list">
          {plumCopy.quotes.map((q) => (
            <blockquote
              key={q.author}
              className={`plum-quotes__item plum-quotes__item--${q.align}`}
            >
              <p className="plum-quotes__text">{q.text}</p>
              <footer className="plum-quotes__author">- {q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
