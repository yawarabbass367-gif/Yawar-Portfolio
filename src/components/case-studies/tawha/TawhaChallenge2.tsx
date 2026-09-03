import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaChallenge2() {
  const { challenge2 } = tawhaCopy;
  const { challenge2Phones } = tawhaAssets;

  return (
    <section className="tawha-challenge1 tawha-challenge2" aria-labelledby="tawha-challenge2-heading">
      <div className="tawha-board tawha-challenge1__panel">
        <header className="tawha-challenge1__header tawha-challenge2__header">
          <span className="tawha-challenge1__badge tawha-challenge2__badge">{challenge2.badge}</span>
          <h2 id="tawha-challenge2-heading" className="tawha-challenge1__title">
            {challenge2.title}
          </h2>
          <p className="tawha-challenge1__subtitle">{challenge2.subtitle}</p>
        </header>

        <ul className="tawha-challenge2__roles" aria-label="Approval roles">
          {challenge2.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <div className="tawha-challenge1__phones tawha-challenge2__phones">
          {challenge2Phones.map((phone) => (
            <figure key={phone.src} className="tawha-challenge1__phone">
              <Image
                src={phone.src}
                alt={phone.alt}
                width={phone.width}
                height={phone.height}
                className="tawha-challenge1__phone-img tawha-challenge2__phone-img"
                sizes="(max-width: 720px) 70vw, 220px"
              />
            </figure>
          ))}
        </div>

        <div className="tawha-challenge1__why">
          <h3 className="tawha-challenge1__why-title">{challenge2.whyTitle}</h3>
          <p className="tawha-challenge1__why-body">{challenge2.whyBody}</p>
        </div>
      </div>
    </section>
  );
}
