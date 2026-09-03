import Image from "next/image";
import { medicoAssets, medicoCopy } from "@/data/medico-case-study";

export function MedicoBackgroundProblems() {
  const { background, problem } = medicoCopy;
  const {
    backgroundPhotosPair,
    backgroundPhotosTrio,
    backgroundProblemsPhone,
    problemsBg,
  } = medicoAssets;

  return (
    <div className="medico-bg-problems">
      <section className="medico-bg-problems__background" aria-labelledby="medico-bg-title">
        <div className="medico-board medico-bg-problems__background-inner">
          <div className="medico-bg-problems__text">
            <h2 id="medico-bg-title" className="medico-h2">
              <span aria-hidden>🎥 </span>
              {background.title}
            </h2>
            <p className="medico-lead">{background.body}</p>
          </div>

          <Image
            src={backgroundPhotosTrio.src}
            alt=""
            width={backgroundPhotosTrio.width}
            height={backgroundPhotosTrio.height}
            className="medico-bg-problems__photos-trio"
            sizes="(max-width: 900px) 88vw, 480px"
          />
        </div>
      </section>

      <div className="medico-bg-problems__right">
        <Image
          src={backgroundPhotosPair.src}
          alt={backgroundPhotosPair.alt}
          width={backgroundPhotosPair.width}
          height={backgroundPhotosPair.height}
          className="medico-bg-problems__photos-pair"
          sizes="(max-width: 900px) 88vw, 480px"
        />
        <Image
          src={backgroundProblemsPhone.src}
          alt={backgroundProblemsPhone.alt}
          width={backgroundProblemsPhone.width}
          height={backgroundProblemsPhone.height}
          className="medico-bg-problems__phone"
          sizes="(max-width: 900px) 42vw, 360px"
        />
      </div>

      <section
        className="medico-bg-problems__problems"
        aria-labelledby="medico-problem-title"
        style={{ backgroundImage: `url(${problemsBg.src})` }}
      >
        <div className="medico-board medico-bg-problems__problems-inner">
          <div className="medico-bg-problems__text medico-bg-problems__text--on-blue">
            <h2 id="medico-problem-title" className="medico-h2 medico-h2--on-blue">
              <span aria-hidden>☹️ </span>
              {problem.title}
            </h2>
            <p className="medico-problem__headline">{problem.headline}</p>
            <p className="medico-problem__body">{problem.body}</p>
            <p className="medico-problem__q">{problem.question}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function MedicoSolution() {
  const { solution } = medicoCopy;
  const { solutionPhoneArc } = medicoAssets;

  return (
    <section className="medico-section medico-solution" aria-labelledby="medico-solution-title">
      <div className="medico-board">
        <div className="medico-solution__intro">
          <h2 id="medico-solution-title" className="medico-solution__title">
            <span aria-hidden>🎉 </span>
            {solution.title}
          </h2>
          <p className="medico-solution__headline">{solution.headline}</p>
          <p className="medico-solution__lede">{solution.intro}</p>
        </div>

        <div className="medico-solution__row">
          <div className="medico-solution__visual">
            <Image
              src={solutionPhoneArc.src}
              alt={solutionPhoneArc.alt}
              width={solutionPhoneArc.width}
              height={solutionPhoneArc.height}
              className="medico-solution__phone-arc"
              sizes="(max-width: 800px) 70vw, 420px"
            />
          </div>

          <div className="medico-solution__aside">
            <h3 className="medico-solution__aside-title">{solution.calloutTitle}</h3>
            <p className="medico-solution__aside-body">{solution.calloutBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicoOverview() {
  const { overview } = medicoCopy;
  const { highlightsRoad } = medicoAssets;

  return (
    <section className="medico-highlights" aria-labelledby="medico-overview-title">
      <div className="medico-board medico-highlights__inner">
        <h2 id="medico-overview-title" className="medico-highlights__title">
          <span aria-hidden>📸 </span>
          {overview.title}
        </h2>

        <div className="medico-highlights__meta">
          {overview.items.map((item) => (
            <div key={item.label} className="medico-highlights__meta-item">
              <p className="medico-highlights__meta-label">{item.label}</p>
              <p className="medico-highlights__meta-value">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="medico-highlights__process">
          {overview.process.map((phase) => (
            <div key={phase.title} className="medico-highlights__phase">
              <h3 className="medico-highlights__phase-title">{phase.title}</h3>
              <ul className="medico-highlights__phase-list">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={highlightsRoad.src}
        alt=""
        width={highlightsRoad.width}
        height={highlightsRoad.height}
        className="medico-highlights__road"
        aria-hidden
        sizes="(max-width: 900px) 90vw, 720px"
      />
    </section>
  );
}
