import Image from "next/image";
import { tawhaCopy } from "@/data/tawha-case-study";

export function TawhaUxOpportunities() {
  const { personalUxOpportunities } = tawhaCopy;

  return (
    <section
      className="tawha-ux-opp"
      aria-labelledby="tawha-ux-opp-heading"
    >
      <div className="tawha-board tawha-ux-opp__panel">
        <header className="tawha-ux-opp__header">
          <h2 id="tawha-ux-opp-heading" className="tawha-ux-opp__title">
            {personalUxOpportunities.title}
          </h2>
          <p className="tawha-ux-opp__subtitle">
            {personalUxOpportunities.subtitle}
          </p>
        </header>

        <div className="tawha-ux-opp__blocks">
          {personalUxOpportunities.blocks.map((block) => (
            <article key={block.id} className="tawha-ux-opp__block">
              <div className="tawha-ux-opp__intro">
                <div className="tawha-ux-opp__number-row" aria-hidden>
                  <span className="tawha-ux-opp__number">{block.number}</span>
                  <span className="tawha-ux-opp__number-label">
                    {personalUxOpportunities.findingLabel}
                  </span>
                </div>
                <h3 className="tawha-ux-opp__block-title">{block.title}</h3>
                <p className="tawha-ux-opp__description">{block.description}</p>
                <div className="tawha-ux-opp__callout">
                  <p className="tawha-ux-opp__callout-label">
                    {personalUxOpportunities.keyFeatureLabel}
                  </p>
                  <p className="tawha-ux-opp__callout-body">
                    <strong>{block.keyFeatureTitle}.</strong>{" "}
                    {block.keyFeatureBody}
                  </p>
                </div>
              </div>

              <div
                className={`tawha-ux-opp__phones ${
                  block.phones.length === 1 ? "tawha-ux-opp__phones--one" : ""
                }`}
              >
                {block.phones.map((phone) => (
                  <figure key={phone.src} className="tawha-ux-opp__phone">
                    <Image
                      src={phone.src}
                      alt={phone.alt}
                      width={phone.width}
                      height={phone.height}
                      className="tawha-ux-opp__phone-img"
                      sizes={
                        block.phones.length === 1
                          ? "(max-width: 720px) 55vw, 240px"
                          : "(max-width: 720px) 42vw, 180px"
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
