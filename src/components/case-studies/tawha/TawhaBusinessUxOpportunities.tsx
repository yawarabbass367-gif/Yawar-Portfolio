import Image from "next/image";
import { tawhaCopy } from "@/data/tawha-case-study";

export function TawhaBusinessUxOpportunities() {
  const { businessUxOpportunities } = tawhaCopy;

  return (
    <section
      className="tawha-biz-ux"
      aria-labelledby="tawha-biz-ux-heading"
    >
      <div className="tawha-board tawha-biz-ux__panel">
        <header className="tawha-biz-ux__header">
          <h2 id="tawha-biz-ux-heading" className="tawha-biz-ux__title">
            {businessUxOpportunities.title}
          </h2>
          <p className="tawha-biz-ux__subtitle">
            {businessUxOpportunities.subtitle}
          </p>
        </header>

        <div className="tawha-biz-ux__blocks">
          {businessUxOpportunities.blocks.map((block) => (
            <article key={block.id} className="tawha-biz-ux__block">
              <div className="tawha-biz-ux__intro">
                <div className="tawha-biz-ux__number-row" aria-hidden>
                  <span className="tawha-biz-ux__number">{block.number}</span>
                  <span className="tawha-biz-ux__number-label">
                    {businessUxOpportunities.findingLabel}
                  </span>
                </div>
                <h3 className="tawha-biz-ux__block-title">{block.title}</h3>
                <p className="tawha-biz-ux__description">{block.description}</p>
                <div className="tawha-biz-ux__callout">
                  <p className="tawha-biz-ux__callout-label">
                    {businessUxOpportunities.keyFeatureLabel}
                  </p>
                  <p className="tawha-biz-ux__callout-body">
                    <strong>{block.keyFeatureTitle}.</strong>{" "}
                    {block.keyFeatureBody}
                  </p>
                </div>
              </div>

              <div
                className={`tawha-biz-ux__screens ${
                  block.screens.length === 1
                    ? "tawha-biz-ux__screens--one"
                    : "tawha-biz-ux__screens--grid"
                }`}
              >
                {block.screens.map((screen) => (
                  <figure key={screen.src} className="tawha-biz-ux__shot">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      className="tawha-biz-ux__shot-img"
                      sizes={
                        block.screens.length === 1
                          ? "(max-width: 900px) 92vw, 960px"
                          : "(max-width: 900px) 92vw, 480px"
                      }
                    />
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
