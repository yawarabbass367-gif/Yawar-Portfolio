import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaModule3Collections() {
  const { module3Collections } = tawhaCopy;
  const { module3CollectionsBg, module3CollectionsPhones } = tawhaAssets;
  const topPhones = module3CollectionsPhones.slice(0, 4);
  const bottomPhones = module3CollectionsPhones.slice(4);

  return (
    <section
      className="tawha-module3"
      aria-labelledby="tawha-module3-heading"
    >
      <div className="tawha-module3__stage">
        <Image
          src={module3CollectionsBg.src}
          alt=""
          fill
          priority={false}
          className="tawha-module3__bg"
          sizes="(max-width: 1200px) 100vw, 1200px"
          aria-hidden
        />

        <div className="tawha-module3__panel">
          <header className="tawha-module3__header">
            <span className="tawha-module3__badge">
              {module3Collections.badge}
            </span>
            <h2 id="tawha-module3-heading" className="tawha-module3__title">
              {module3Collections.title}
            </h2>
          </header>

          <aside className="tawha-module3__callout">
            <p className="tawha-module3__callout-line">
              <span className="tawha-module3__callout-label">
                {module3Collections.problemLabel}
              </span>{" "}
              {module3Collections.problem}
            </p>
            <p className="tawha-module3__callout-line">
              <span className="tawha-module3__callout-label">
                {module3Collections.solutionLabel}
              </span>{" "}
              {module3Collections.solution}
            </p>
          </aside>

          <div
            className="tawha-module3__phones"
            aria-label="Collections module screens"
          >
            <div className="tawha-module3__phones-row">
              {topPhones.map((phone) => (
                <figure key={phone.src} className="tawha-module3__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module3__phone-img"
                    sizes="(max-width: 900px) 42vw, 160px"
                  />
                </figure>
              ))}
            </div>
            <div className="tawha-module3__phones-row">
              {bottomPhones.map((phone) => (
                <figure key={phone.src} className="tawha-module3__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module3__phone-img"
                    sizes="(max-width: 900px) 42vw, 160px"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
