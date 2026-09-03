import Image from "next/image";
import { medicoAssets, medicoCopy } from "@/data/medico-case-study";

export function MedicoPersona() {
  const { persona } = medicoCopy;
  return (
    <section className="medico-section medico-persona" aria-labelledby="medico-persona-title">
      <div className="medico-board">
        <p className="medico-kicker">{persona.phase}</p>
        <h2 id="medico-persona-title" className="medico-h2">
          {persona.title}
        </h2>
        <p className="medico-headline">{persona.subtitle}</p>
        <p className="medico-lead">{persona.intro}</p>

        <article className="medico-persona-card">
          <Image
            src={medicoAssets.personaTaha.src}
            alt={medicoAssets.personaTaha.alt}
            width={medicoAssets.personaTaha.width}
            height={medicoAssets.personaTaha.height}
            className="medico-persona-card__photo"
            sizes="(max-width: 700px) 60vw, 240px"
          />
          <div className="medico-persona-card__body">
            <header>
              <h3>{persona.name}</h3>
              <dl className="medico-persona-meta">
                <div>
                  <dt>Age</dt>
                  <dd>{persona.age}</dd>
                </div>
                <div>
                  <dt>Occupation</dt>
                  <dd>{persona.occupation}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{persona.location}</dd>
                </div>
                <div>
                  <dt>Weight</dt>
                  <dd>{persona.weight}</dd>
                </div>
              </dl>
            </header>
            <div>
              <h4>Background</h4>
              <p>{persona.background}</p>
            </div>
            <div className="medico-persona-card__cols">
              <div>
                <h4>Goals</h4>
                <ul>
                  {persona.goals.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Pain Points</h4>
                <ul>
                  {persona.pains.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function MedicoJourney() {
  const { journey } = medicoCopy;
  return (
    <section className="medico-section medico-journey" aria-labelledby="medico-journey-title">
      <div className="medico-board">
        <h2 id="medico-journey-title" className="medico-h2">
          {journey.title}
        </h2>
        <p className="medico-lead">{journey.intro}</p>
        <p className="medico-task">
          <strong>User task:</strong> {journey.task}
        </p>

        <div className="medico-journey-scroll" role="region" aria-label="User journey stages">
          <div className="medico-journey-track">
            {journey.stages.map((stage) => (
              <article key={stage.stage} className="medico-journey-card">
                <h3>{stage.stage}</h3>
                <div>
                  <h4>Actions</h4>
                  <p>{stage.actions}</p>
                </div>
                <div>
                  <h4>Emotions</h4>
                  <p>{stage.emotions}</p>
                </div>
                <div>
                  <h4>Pain Points</h4>
                  <p>{stage.painPoints}</p>
                </div>
                <div>
                  <h4>Opportunities</h4>
                  <p>{stage.opportunities}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicoHmw() {
  const { hmw } = medicoCopy;
  return (
    <section className="medico-section medico-hmw" aria-labelledby="medico-hmw-title">
      <div className="medico-board">
        <p className="medico-kicker">{hmw.phase}</p>
        <h2 id="medico-hmw-title" className="medico-h2">
          {hmw.title}
        </h2>
        <p className="medico-lead">{hmw.intro}</p>
        <ol className="medico-hmw-list">
          {hmw.questions.map((q) => (
            <li key={q}>
              <p>{q}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
