import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaBusinessBenchmark() {
  const { businessBenchmark } = tawhaCopy;
  const { businessBenchmarkRows } = tawhaAssets;

  return (
    <section
      className="tawha-biz-bench"
      aria-labelledby="tawha-biz-bench-heading"
    >
      <div className="tawha-board tawha-biz-bench__panel">
        <h2 id="tawha-biz-bench-heading" className="tawha-biz-bench__title">
          {businessBenchmark.title}
        </h2>

        <div className="tawha-biz-bench__rows">
          {businessBenchmarkRows.map((row) => (
            <div key={row.id} className="tawha-biz-bench__row">
              <h3 className="tawha-biz-bench__row-title">{row.title}</h3>

              <div className="tawha-biz-bench__grid">
                {row.screens.map((screen) => (
                  <article key={screen.src} className="tawha-biz-bench__col">
                    <figure className="tawha-biz-bench__shot">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        width={screen.width}
                        height={screen.height}
                        className="tawha-biz-bench__shot-img"
                        sizes="(max-width: 720px) 90vw, 480px"
                      />
                    </figure>
                    <div className="tawha-biz-bench__observation">
                      <h4 className="tawha-biz-bench__observation-label">
                        {businessBenchmark.observationLabel}
                      </h4>
                      <p className="tawha-biz-bench__observation-body">
                        {screen.observation}
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
