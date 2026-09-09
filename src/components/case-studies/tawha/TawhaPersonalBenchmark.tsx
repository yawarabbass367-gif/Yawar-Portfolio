import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaPersonalBenchmark() {
  const { personalBenchmark } = tawhaCopy;
  const { personalBenchmarkRows } = tawhaAssets;

  return (
    <section
      className="tawha-benchmark"
      aria-labelledby="tawha-benchmark-heading"
    >
      <div className="tawha-board tawha-benchmark__panel">
        <h2 id="tawha-benchmark-heading" className="tawha-benchmark__title">
          {personalBenchmark.title}
        </h2>

        <div className="tawha-benchmark__rows">
          {personalBenchmarkRows.map((row) => (
            <div key={row.id} className="tawha-benchmark__row">
              <h3 className="tawha-benchmark__row-title">{row.title}</h3>

              <div className="tawha-benchmark__grid">
                {row.phones.map((phone) => (
                  <article key={phone.src} className="tawha-benchmark__col">
                    <p className="tawha-benchmark__app">{phone.app}</p>
                    <figure className="tawha-benchmark__phone">
                      <Image
                        src={phone.src}
                        alt={phone.alt}
                        width={phone.width}
                        height={phone.height}
                        className="tawha-benchmark__phone-img"
                        sizes="(max-width: 720px) 70vw, 220px"
                      />
                    </figure>
                    <div className="tawha-benchmark__observation">
                      <h4 className="tawha-benchmark__observation-label">
                        {personalBenchmark.observationLabel}
                      </h4>
                      <p className="tawha-benchmark__observation-body">
                        {phone.observation}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
