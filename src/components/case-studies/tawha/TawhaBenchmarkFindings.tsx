import Image from "next/image";
import { tawhaCopy } from "@/data/tawha-case-study";

export function TawhaBenchmarkFindings() {
  const { personalBenchmarkFindings } = tawhaCopy;

  return (
    <section
      className="tawha-findings"
      aria-labelledby="tawha-findings-heading"
    >
      <div className="tawha-board tawha-findings__panel">
        <header className="tawha-findings__header">
          <h2 id="tawha-findings-heading" className="tawha-findings__title">
            {personalBenchmarkFindings.title}
          </h2>
          <p className="tawha-findings__subtitle">{personalBenchmarkFindings.subtitle}</p>
        </header>

        <div className="tawha-findings__blocks">
          {personalBenchmarkFindings.blocks.map((block) => (
            <article key={block.id} className="tawha-findings__block">
              <h3 className="tawha-findings__block-title">{block.title}</h3>

              <div
                className={`tawha-findings__phones ${
                  block.phones.length === 2 ? "tawha-findings__phones--two" : ""
                }`}
              >
                {block.phones.map((phone) => (
                  <figure key={phone.src} className="tawha-findings__phone">
                    <Image
                      src={phone.src}
                      alt={phone.alt}
                      width={phone.width}
                      height={phone.height}
                      className="tawha-findings__phone-img"
                      sizes="(max-width: 720px) 70vw, 200px"
                    />
                  </figure>
                ))}
              </div>

              <div className="tawha-findings__copy">
                <p className="tawha-findings__line">
                  <span className="tawha-findings__label">
                    {personalBenchmarkFindings.findingLabel}
                  </span>{" "}
                  {block.finding}
                </p>
                <p className="tawha-findings__line">
                  <span className="tawha-findings__label">
                    {personalBenchmarkFindings.insightLabel}
                  </span>{" "}
                  {block.insight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
