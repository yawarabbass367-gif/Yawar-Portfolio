import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaModule5Users() {
  const { module5Users } = tawhaCopy;
  const { module5UsersBg, module5UserPhones, module5WorkflowPhones } =
    tawhaAssets;

  return (
    <section className="tawha-module5" aria-labelledby="tawha-module5-heading">
      <div className="tawha-module5__stage">
        <Image
          src={module5UsersBg.src}
          alt=""
          fill
          priority={false}
          className="tawha-module5__bg"
          sizes="(max-width: 1200px) 100vw, 1200px"
          aria-hidden
        />

        <div className="tawha-module5__panel">
          <header className="tawha-module5__header">
            <span className="tawha-module5__badge">{module5Users.badge}</span>
            <h2 id="tawha-module5-heading" className="tawha-module5__title">
              {module5Users.title}
            </h2>
          </header>

          <aside className="tawha-module5__callout">
            <p className="tawha-module5__callout-line">
              <span className="tawha-module5__callout-label">
                {module5Users.problemLabel}
              </span>{" "}
              {module5Users.problem}
            </p>
            <p className="tawha-module5__callout-line">
              <span className="tawha-module5__callout-label">
                {module5Users.solutionLabel}
              </span>{" "}
              {module5Users.solution}
            </p>
          </aside>

          <div
            className="tawha-module5__phones"
            aria-label="User management screens"
          >
            {module5UserPhones.map((phone) => (
              <figure key={phone.src} className="tawha-module5__phone">
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={phone.width}
                  height={phone.height}
                  className="tawha-module5__phone-img"
                  sizes="(max-width: 900px) 42vw, 160px"
                />
              </figure>
            ))}
          </div>

          <div className="tawha-module5__block">
            <h3 className="tawha-module5__block-title">
              {module5Users.workflowTitle}
            </h3>
            <div
              className="tawha-module5__phones"
              aria-label="Maker checker viewer screens"
            >
              {module5WorkflowPhones.map((phone) => (
                <figure key={phone.src} className="tawha-module5__phone">
                  <Image
                    src={phone.src}
                    alt={phone.alt}
                    width={phone.width}
                    height={phone.height}
                    className="tawha-module5__phone-img"
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
