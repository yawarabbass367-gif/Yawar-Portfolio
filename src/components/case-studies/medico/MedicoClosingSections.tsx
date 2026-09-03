import Image from "next/image";
import { medicoAssets, medicoCopy } from "@/data/medico-case-study";

export function MedicoExperience() {
  const { experience } = medicoCopy;

  return (
    <section className="medico-section medico-experience" aria-labelledby="medico-exp-title">
      <div className="medico-board">
        <h2 id="medico-exp-title" className="medico-h2">
          {experience.title}
        </h2>
        <p className="medico-display">{experience.headline}</p>

        <div className="medico-experience__gallery">
          {experience.gallery.map((assetKey) => {
            const photo = medicoAssets[assetKey];
            return (
              <div key={photo.src} className="medico-experience__gallery-item">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="medico-experience__gallery-photo"
                  sizes="(max-width: 640px) 38vw, 220px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MedicoConsultation() {
  const { experience } = medicoCopy;
  const phone = medicoAssets.phoneHome;

  return (
    <section className="medico-section medico-consultation" aria-labelledby="medico-consultation-title">
      <div className="medico-board medico-consultation__layout">
        <div className="medico-consultation__phone-wrap">
          <Image
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            className="medico-phone medico-consultation__phone"
            sizes="(max-width: 800px) 62vw, 300px"
          />
          <svg
            className="medico-consultation__arrow"
            viewBox="0 0 140 72"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 38C42 10 78 8 118 22"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path
              d="M110 16L118 22L112 28"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="medico-consultation__copy">
          <h2 id="medico-consultation-title" className="medico-consultation__headline">
            {experience.sub}
          </h2>
          <div className="medico-consultation__points">
            {experience.points.map((point) => (
              <article key={point.title}>
                <p>
                  <strong>{point.title}:</strong> {point.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicoAppointmentBand() {
  const { appointmentBandBg, appointmentPhones } = medicoAssets;

  return (
    <section
      className="medico-section medico-appointment-band"
      aria-label={appointmentPhones.alt}
    >
      <div className="medico-appointment-band__stage">
        <div
          className="medico-appointment-band__bg-top"
          style={{ backgroundImage: `url(${appointmentBandBg.src})` }}
          aria-hidden
        />
        <div className="medico-appointment-band__bg-bottom" aria-hidden />

        <Image
          src={appointmentPhones.src}
          alt={appointmentPhones.alt}
          width={appointmentPhones.width}
          height={appointmentPhones.height}
          className="medico-appointment-band__phones"
          sizes="(max-width: 800px) 100vw, 1100px"
          priority={false}
        />
      </div>
    </section>
  );
}

export function MedicoUpload() {
  const { upload } = medicoCopy;
  const { uploadPhone, uploadArrow } = medicoAssets;
  const { experience } = medicoCopy;

  return (
    <section className="medico-section medico-upload" aria-labelledby="medico-upload-title">
      <div className="medico-board medico-upload__layout">
        <div className="medico-upload__phone-col">
          <Image
            src={uploadPhone.src}
            alt={uploadPhone.alt}
            width={uploadPhone.width}
            height={uploadPhone.height}
            className="medico-phone medico-upload__phone"
            sizes="(max-width: 800px) 58vw, 280px"
          />
          <Image
            src={uploadArrow.src}
            alt=""
            width={uploadArrow.width}
            height={uploadArrow.height}
            className="medico-upload__arrow"
            aria-hidden
          />
        </div>

        <div className="medico-upload__copy">
          <h2 id="medico-upload-title" className="medico-h2">
            {upload.title}
          </h2>
          <p className="medico-upload__lead">{experience.headline}</p>

          <div className="medico-upload__curve-wrap">
            <svg
              className="medico-upload__curve"
              viewBox="0 0 420 90"
              aria-hidden={false}
              role="img"
            >
              <title>{upload.headline}</title>
              <defs>
                <path id="medico-upload-arc" d="M 8 72 C 120 8, 300 8, 412 58" />
              </defs>
              <text className="medico-upload__curve-text">
                <textPath xlinkHref="#medico-upload-arc" href="#medico-upload-arc" startOffset="0%">
                  {upload.headline}
                </textPath>
              </text>
            </svg>
          </div>

          <div className="medico-upload__points">
            {upload.points.map((p) => (
              <article key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MedicoRxFlowBand() {
  const { rxFlowBg, rxFlowPhones } = medicoAssets;

  return (
    <section
      className="medico-section medico-appointment-band medico-rx-flow-band"
      aria-label={rxFlowPhones.alt}
    >
      <div className="medico-appointment-band__stage medico-rx-flow-band__stage">
        <div
          className="medico-appointment-band__bg-top"
          style={{ backgroundImage: `url(${rxFlowBg.src})` }}
          aria-hidden
        />
        <div className="medico-appointment-band__bg-bottom" aria-hidden />

        <Image
          src={rxFlowPhones.src}
          alt={rxFlowPhones.alt}
          width={rxFlowPhones.width}
          height={rxFlowPhones.height}
          className="medico-appointment-band__phones medico-rx-flow-band__phones"
          sizes="(max-width: 800px) 100vw, 820px"
          priority={false}
        />
      </div>
    </section>
  );
}

export function MedicoSymptoms() {
  const { symptoms } = medicoCopy;
  const { symptomsPhone, symptomsArrow } = medicoAssets;

  return (
    <section className="medico-section medico-symptoms" aria-labelledby="medico-symptoms-title">
      <div className="medico-board medico-symptoms__layout">
        <div className="medico-symptoms__copy">
          <h2 id="medico-symptoms-title" className="medico-h2">
            {symptoms.title}
          </h2>
          <p className="medico-display medico-display--sm">{symptoms.headline}</p>
          <p className="medico-symptoms__sub">{symptoms.sub}</p>
          <div className="medico-symptoms__points">
            {symptoms.points.map((p) => (
              <article key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="medico-symptoms__phone-col">
          <Image
            src={symptomsArrow.src}
            alt=""
            width={symptomsArrow.width}
            height={symptomsArrow.height}
            className="medico-symptoms__arrow"
            aria-hidden
          />
          <Image
            src={symptomsPhone.src}
            alt={symptomsPhone.alt}
            width={symptomsPhone.width}
            height={symptomsPhone.height}
            className="medico-phone medico-symptoms__phone"
            sizes="(max-width: 800px) 58vw, 280px"
          />
        </div>
      </div>
    </section>
  );
}

export function MedicoUsability() {
  const { usability, analysis } = medicoCopy;
  return (
    <>
      <section className="medico-section medico-usability" aria-labelledby="medico-usability-title">
        <div className="medico-board">
          <h2 id="medico-usability-title" className="medico-h2">
            {usability.title}
          </h2>
          <p className="medico-lead">{usability.intro}</p>
          <div className="medico-two-col">
            <article className="medico-panel">
              <h3>Goals</h3>
              <ul>
                {usability.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </article>
            <article className="medico-panel">
              <h3>Tasks</h3>
              <ul>
                {usability.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="medico-section medico-analysis" aria-labelledby="medico-analysis-title">
        <div className="medico-board">
          <h2 id="medico-analysis-title" className="medico-h2">
            {analysis.title}
          </h2>
          <p className="medico-lead">{analysis.body}</p>
        </div>
      </section>
    </>
  );
}

export function MedicoConclusion() {
  const { conclusion, recommendations } = medicoCopy;
  return (
    <>
      <section className="medico-section medico-conclusion" aria-labelledby="medico-conclusion-title">
        <div className="medico-board">
          <h2 id="medico-conclusion-title" className="medico-h2">
            {conclusion.title}
          </h2>
          <div className="medico-two-col">
            <article className="medico-panel medico-panel--good">
              <h3>{conclusion.workedTitle}</h3>
              <ul>
                {conclusion.worked.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="medico-panel medico-panel--need">
              <h3>{conclusion.needsTitle}</h3>
              <ul>
                {conclusion.needs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        className="medico-section medico-recommendations"
        aria-labelledby="medico-rec-title"
      >
        <div className="medico-board">
          <h2 id="medico-rec-title" className="medico-h2">
            {recommendations.title}
          </h2>
          <ol className="medico-rec-list">
            {recommendations.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export function MedicoThankYou() {
  const { thankYou } = medicoCopy;
  return (
    <section className="medico-thanks" aria-labelledby="medico-thanks-title">
      <div className="medico-board medico-thanks__inner">
        <span className="medico-thanks__mark" aria-hidden>
          <svg viewBox="0 0 32 32" width="64" height="64" fill="none">
            <path
              d="M16 27s-9.5-5.8-12.5-11C1.5 12.2 3.2 7.5 7.5 6.2c2.5-.8 5 .3 6.5 2.3C15.5 6.5 18 5.4 20.5 6.2c4.3 1.3 6 6 4 9.8C25.5 21.2 16 27 16 27z"
              fill="var(--medico-blue)"
            />
          </svg>
        </span>
        <h2 id="medico-thanks-title">{thankYou.title}</h2>
        <p>{medicoCopy.brand}</p>
        <Image
          src={medicoAssets.phoneFinal.src}
          alt={medicoAssets.phoneFinal.alt}
          width={medicoAssets.phoneFinal.width}
          height={medicoAssets.phoneFinal.height}
          className="medico-phone medico-thanks__phone"
          sizes="(max-width: 800px) 50vw, 240px"
        />
      </div>
    </section>
  );
}

export function MedicoShowcaseBand() {
  const { showcaseBg, showcasePhones } = medicoAssets;

  return (
    <section
      className="medico-showcase-band"
      aria-label="Medico product screens"
      style={{ backgroundImage: `url(${showcaseBg.src})` }}
    >
      <div className="medico-showcase-band__inner">
        <Image
          src={showcasePhones.src}
          alt={showcasePhones.alt}
          width={showcasePhones.width}
          height={showcasePhones.height}
          className="medico-showcase-band__phones"
          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 88vw, 1100px"
        />
      </div>
    </section>
  );
}
