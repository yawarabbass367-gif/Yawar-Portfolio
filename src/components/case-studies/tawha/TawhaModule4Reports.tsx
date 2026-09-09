import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaModule4Reports() {
  const { module4Reports } = tawhaCopy;
  const { module4ReportsBg, module4ReportsPhones } = tawhaAssets;

  return (
    <section className="tawha-module4" aria-labelledby="tawha-module4-heading">
      <div className="tawha-module4__stage">
        <Image
          src={module4ReportsBg.src}
          alt=""
          fill
          priority={false}
          className="tawha-module4__bg"
          sizes="(max-width: 1200px) 100vw, 1200px"
          aria-hidden
        />

        <div className="tawha-module4__panel">
          <header className="tawha-module4__header">
            <span className="tawha-module4__badge">{module4Reports.badge}</span>
            <h2 id="tawha-module4-heading" className="tawha-module4__title">
              {module4Reports.title}
            </h2>
          </header>

          <aside className="tawha-module4__callout">
            <p className="tawha-module4__callout-line">
              <span className="tawha-module4__callout-label">
                {module4Reports.problemLabel}
              </span>{" "}
              {module4Reports.problem}
            </p>
            <p className="tawha-module4__callout-line">
              <span className="tawha-module4__callout-label">
                {module4Reports.solutionLabel}
              </span>{" "}
              {module4Reports.solution}
            </p>
          </aside>

          <div
            className="tawha-module4__phones"
            aria-label="Reports module screens"
          >
            {module4ReportsPhones.map((phone) => (
              <figure key={phone.src} className="tawha-module4__phone">
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={phone.width}
                  height={phone.height}
                  className="tawha-module4__phone-img"
                  sizes="(max-width: 900px) 42vw, 160px"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
