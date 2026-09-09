import Image from "next/image";
import { tawhaCopy } from "@/data/tawha-case-study";

export function TawhaBusinessFindings() {
  const { businessBenchmarkFindings } = tawhaCopy;

  return (
    <section
      className="tawha-biz-findings"
      aria-labelledby="tawha-biz-findings-heading"
    >
      <div className="tawha-board tawha-biz-findings__panel">
        <header className="tawha-biz-findings__header">
          <h2
            id="tawha-biz-findings-heading"
            className="tawha-biz-findings__title"
          >
            {businessBenchmarkFindings.title}
          </h2>
          <p className="tawha-biz-findings__subtitle">
            {businessBenchmarkFindings.subtitle}
          </p>
        </header>

        <div className="tawha-biz-findings__blocks">
          {businessBenchmarkFindings.blocks.map((block) => (
            <article key={block.id} className="tawha-biz-findings__block">
              <h3 className="tawha-biz-findings__block-title">{block.title}</h3>

              <div className="tawha-biz-findings__grid">
                {block.screens.map((screen) => (
                  <figure key={screen.src} className="tawha-biz-findings__shot">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      className="tawha-biz-findings__shot-img"
                      sizes="(max-width: 720px) 90vw, 480px"
                    />
                  </figure>
                ))}
              </div>

              <div className="tawha-biz-findings__copy">
                <p className="tawha-biz-findings__line">
                  <span className="tawha-biz-findings__label">
                    {businessBenchmarkFindings.findingLabel}
                  </span>{" "}
                  {block.finding}
                </p>
                <p className="tawha-biz-findings__line">
                  <span className="tawha-biz-findings__label">
                    {businessBenchmarkFindings.insightLabel}
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
