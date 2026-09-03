import { medicoCopy } from "@/data/medico-case-study";

function PieChart({
  segments,
}: {
  segments: readonly { label: string; value: number; tone: "blue" | "orange" }[];
}) {
  const [a] = segments;
  const grad = `conic-gradient(var(--medico-orange) 0 ${a.value}%, var(--medico-blue) ${a.value}% 100%)`;
  return (
    <div className="medico-pie" style={{ background: grad }} aria-hidden>
      <span className="medico-pie__hole" />
    </div>
  );
}

export function MedicoResearch() {
  const { research } = medicoCopy;
  return (
    <section className="medico-section medico-research" aria-labelledby="medico-research-title">
      <div className="medico-board">
        <p className="medico-kicker">{research.phase}</p>
        <h2 id="medico-research-title" className="medico-h2">
          {research.title}
        </h2>
        <p className="medico-lead">{research.intro}</p>
        <ul className="medico-chip-row">
          {research.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
        <div className="medico-chart-grid">
          {research.charts.map((chart) => (
            <article key={chart.title} className="medico-chart-card">
              <PieChart segments={chart.segments} />
              <h3>{chart.title}</h3>
              <ul>
                {chart.segments.map((s) => (
                  <li key={s.label}>
                    <span className={`medico-dot medico-dot--${s.tone}`} />
                    {s.label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MedicoInsights() {
  const { insights, painPoints } = medicoCopy;

  return (
    <section className="medico-insights-band" aria-labelledby="medico-insights-title">
      <div className="medico-board medico-insights-band__inner">
        <div className="medico-insights-band__top">
          <div className="medico-insights-band__col">
            <h2 id="medico-insights-title" className="medico-insights-band__heading">
              <span aria-hidden>🔎 </span>
              {insights.title}
            </h2>
            <p className="medico-insights-band__body">{insights.intro}</p>
            <p className="medico-insights-band__ask">{insights.askedLead}</p>
            <ul className="medico-insights-band__bullets">
              {insights.askedAbout.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="medico-insights-band__col">
            <h2 className="medico-insights-band__heading">
              <span aria-hidden>🚑 </span>
              {painPoints.title}
            </h2>
            <p className="medico-insights-band__body">{painPoints.intro}</p>
          </div>
        </div>

        <div className="medico-insights-band__summary">
          <p className="medico-insights-band__summary-lead">{insights.summaryLead}</p>
          <ol className="medico-insights-band__numbers">
            {insights.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
