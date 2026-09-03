import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaDesignOpportunity() {
  const { designOpportunity } = tawhaCopy;
  const { designTarget } = tawhaAssets;

  return (
    <section className="tawha-opportunity" aria-labelledby="tawha-opportunity-heading">
      <div className="tawha-board tawha-opportunity__grid">
        <article className="tawha-opportunity__card tawha-opportunity__card--left">
          <div className="tawha-opportunity__copy">
            <h2 id="tawha-opportunity-heading" className="tawha-opportunity__title">
              {designOpportunity.opportunity.title}
            </h2>
            <p className="tawha-opportunity__body">{designOpportunity.opportunity.body}</p>
          </div>
          <div className="tawha-opportunity__target tawha-opportunity__target--large" aria-hidden>
            <Image
              src={designTarget.src}
              alt=""
              width={designTarget.width}
              height={designTarget.height}
              className="tawha-opportunity__target-img"
              sizes="(max-width: 900px) 55vw, 275px"
            />
          </div>
        </article>

        <article className="tawha-opportunity__card tawha-opportunity__card--right">
          <div className="tawha-opportunity__copy">
            <h2 className="tawha-opportunity__title">{designOpportunity.objectives.title}</h2>
            <ul className="tawha-opportunity__objectives">
              {designOpportunity.objectives.items.map((item) => (
                <li key={item.title} className="tawha-opportunity__objective">
                  <span className="tawha-opportunity__objective-icon" aria-hidden>
                    {item.icon}
                  </span>
                  <p className="tawha-opportunity__objective-text">
                    <strong>{item.title}</strong> {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="tawha-opportunity__target tawha-opportunity__target--small" aria-hidden>
            <Image
              src={designTarget.src}
              alt=""
              width={designTarget.width}
              height={designTarget.height}
              className="tawha-opportunity__target-img"
              sizes="(max-width: 900px) 40vw, 207px"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
