import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaModule2Payments() {
  const { module2Payments } = tawhaCopy;
  const { module2PaymentsBg, module2SinglePhones, module2BulkPhones } =
    tawhaAssets;

  return (
    <section className="tawha-module2" aria-labelledby="tawha-module2-heading">
      <div className="tawha-module2__stage">
        <Image
          src={module2PaymentsBg.src}
          alt=""
          fill
          priority={false}
          className="tawha-module2__bg"
          sizes="(max-width: 1200px) 100vw, 1200px"
          aria-hidden
        />

        <div className="tawha-module2__panel">
          <header className="tawha-module2__header">
            <span className="tawha-module2__badge">{module2Payments.badge}</span>
            <h2 id="tawha-module2-heading" className="tawha-module2__title">
              {module2Payments.title}
            </h2>
          </header>

          <aside className="tawha-module2__callout">
            <p className="tawha-module2__callout-line">
              <span className="tawha-module2__callout-label">
                {module2Payments.problemLabel}
              </span>{" "}
              {module2Payments.problem}
            </p>
            <p className="tawha-module2__callout-line">
              <span className="tawha-module2__callout-label">
                {module2Payments.solutionLabel}
              </span>{" "}
              {module2Payments.solution}
            </p>
          </aside>

          <div className="tawha-module2__block">
            <h3 className="tawha-module2__block-title">
              {module2Payments.singleTitle}
            </h3>
            <div
              className="tawha-module2__phones"
              aria-label="Single payment screens"
            >
              {module2SinglePhones.map((phone) => (
                <figure key={phone.src} className="tawha-module2__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module2__phone-img"
                    sizes="(max-width: 900px) 42vw, 160px"
                  />
                </figure>
              ))}
            </div>
          </div>

          <div className="tawha-module2__block">
            <h3 className="tawha-module2__block-title">
              {module2Payments.bulkTitle}
            </h3>
            <div
              className="tawha-module2__phones"
              aria-label="Bulk payment screens"
            >
              {module2BulkPhones.map((phone) => (
                <figure key={phone.src} className="tawha-module2__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module2__phone-img"
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
