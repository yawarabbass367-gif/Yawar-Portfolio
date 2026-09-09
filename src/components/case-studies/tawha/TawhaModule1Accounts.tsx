import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaModule1Accounts() {
  const { module1Accounts } = tawhaCopy;
  const { module1AccountsBg, module1AccountsPhones } = tawhaAssets;
  const topPhones = module1AccountsPhones.slice(0, 6);
  const bottomPhones = module1AccountsPhones.slice(6);

  return (
    <section className="tawha-module1" aria-labelledby="tawha-module1-heading">
      <div className="tawha-module1__stage">
        <Image
          src={module1AccountsBg.src}
          alt=""
          fill
          priority={false}
          className="tawha-module1__bg"
          sizes="(max-width: 1200px) 100vw, 1200px"
          aria-hidden
        />

        <div className="tawha-module1__panel">
          <div className="tawha-module1__intro">
            <header className="tawha-module1__header">
              <span className="tawha-module1__badge">
                {module1Accounts.badge}
              </span>
              <h2 id="tawha-module1-heading" className="tawha-module1__title">
                {module1Accounts.title}
              </h2>
            </header>

            <aside className="tawha-module1__callout">
              <p className="tawha-module1__callout-line">
                <span className="tawha-module1__callout-label">
                  {module1Accounts.problemLabel}
                </span>{" "}
                {module1Accounts.problem}
              </p>
              <p className="tawha-module1__callout-line">
                <span className="tawha-module1__callout-label">
                  {module1Accounts.solutionLabel}
                </span>{" "}
                {module1Accounts.solution}
              </p>
            </aside>
          </div>

          <div
            className="tawha-module1__phones"
            aria-label="Accounts module screens"
          >
            <div className="tawha-module1__phones-row tawha-module1__phones-row--top">
              {topPhones.map((phone) => (
                <figure key={phone.src} className="tawha-module1__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module1__phone-img"
                    sizes="(max-width: 900px) 42vw, 170px"
                  />
                </figure>
              ))}
            </div>

            <div className="tawha-module1__phones-row tawha-module1__phones-row--bottom">
              {bottomPhones.map((phone) => (
                <figure key={phone.src} className="tawha-module1__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module1__phone-img"
                    sizes="(max-width: 900px) 42vw, 170px"
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
