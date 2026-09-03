import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaChallenge1() {
  const { challenge1 } = tawhaCopy;
  const { challenge1ConsumerPhone, challenge1BusinessPhone } = tawhaAssets;

  return (
    <section className="tawha-challenge1" aria-labelledby="tawha-challenge1-heading">
      <div className="tawha-board tawha-challenge1__panel">
        <header className="tawha-challenge1__header">
          <h2 id="tawha-challenge1-heading" className="tawha-challenge1__title">
            {challenge1.title}
          </h2>
          <p className="tawha-challenge1__subtitle">{challenge1.subtitle}</p>
          <span className="tawha-challenge1__badge">{challenge1.badge}</span>
        </header>

        <div className="tawha-challenge1__phones">
          <figure className="tawha-challenge1__phone">
            <figcaption className="tawha-challenge1__phone-label">
              {challenge1.consumerLabel}
            </figcaption>
            <Image
              src={challenge1ConsumerPhone.src}
              alt={challenge1ConsumerPhone.alt}
              width={challenge1ConsumerPhone.width}
              height={challenge1ConsumerPhone.height}
              className="tawha-challenge1__phone-img"
              sizes="(max-width: 720px) 70vw, 262px"
            />
          </figure>

          <figure className="tawha-challenge1__phone">
            <figcaption className="tawha-challenge1__phone-label">
              {challenge1.businessLabel}
            </figcaption>
            <Image
              src={challenge1BusinessPhone.src}
              alt={challenge1BusinessPhone.alt}
              width={challenge1BusinessPhone.width}
              height={challenge1BusinessPhone.height}
              className="tawha-challenge1__phone-img"
              sizes="(max-width: 720px) 70vw, 236px"
            />
          </figure>
        </div>

        <div className="tawha-challenge1__why">
          <h3 className="tawha-challenge1__why-title">{challenge1.whyTitle}</h3>
          <p className="tawha-challenge1__why-body">{challenge1.whyBody}</p>
        </div>
      </div>
    </section>
  );
}
