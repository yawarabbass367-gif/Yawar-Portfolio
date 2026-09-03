import Image from "next/image";
import { medicoAssets, medicoCopy } from "@/data/medico-case-study";

export function MedicoCompetitive() {
  const { competitive } = medicoCopy;
  return (
    <section className="medico-section medico-competitive" aria-labelledby="medico-comp-title">
      <div className="medico-board">
        <h2 id="medico-comp-title" className="medico-h2">
          <span aria-hidden>✨ </span>
          {competitive.title}
        </h2>
        <p className="medico-headline">{competitive.headline}</p>
        <p className="medico-lead">{competitive.body}</p>
        <div className="medico-comp-grid">
          {competitive.competitors.map((comp) => (
            <article key={comp.name} className="medico-comp-card">
              <Image
                src={comp.src}
                alt={comp.name}
                width={comp.width}
                height={comp.height}
                className="medico-comp-card__logo"
                sizes="140px"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MedicoFeatures() {
  const { features } = medicoCopy;
  return (
    <section className="medico-section medico-features" aria-labelledby="medico-features-title">
      <div className="medico-board">
        <h2 id="medico-features-title" className="medico-h2">
          <span aria-hidden>🏅 </span>
          {features.title}
        </h2>
        <p className="medico-lead">{features.intro}</p>
        <ol className="medico-feature-list">
          {features.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function MedicoSitemap() {
  const { sitemap } = medicoCopy;

  return (
    <section className="medico-section medico-sitemap" aria-labelledby="medico-sitemap-title">
      <div className="medico-board">
        <p className="medico-kicker">{sitemap.phase}</p>
        <h2 id="medico-sitemap-title" className="medico-h2">
          <span className="medico-sitemap__info" aria-hidden>
            i
          </span>
          {sitemap.title}
        </h2>
        <p className="medico-lead">{sitemap.intro}</p>

        <div className="medico-sitemap-tree">
          <div className="medico-sitemap-tree__root">{sitemap.root}</div>

          <div className="medico-sitemap-tree__spine" aria-hidden />

          <div className="medico-sitemap-tree__branches">
            {sitemap.branches.map((branch) => (
              <div
                key={branch.title}
                className={
                  branch.children.length > 0
                    ? "medico-sitemap-tree__branch"
                    : "medico-sitemap-tree__branch medico-sitemap-tree__branch--leaf"
                }
              >
                <span className="medico-sitemap-tree__joint" aria-hidden />
                <div className="medico-sitemap-tree__node medico-sitemap-tree__node--branch">
                  {branch.title}
                </div>
                {branch.children.length > 0 ? (
                  <div className="medico-sitemap-tree__child-wrap">
                    <span className="medico-sitemap-tree__child-stem" aria-hidden />
                    <ul className="medico-sitemap-tree__children">
                      {branch.children.map((child) => (
                        <li key={child}>
                          <span className="medico-sitemap-tree__child-elbow" aria-hidden />
                          <span className="medico-sitemap-tree__child-label">{child}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
