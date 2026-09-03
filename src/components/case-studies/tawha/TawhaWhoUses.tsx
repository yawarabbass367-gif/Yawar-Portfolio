import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

export function TawhaWhoUses() {
  const { whoUses } = tawhaCopy;
  const { whoUsesBg } = tawhaAssets;

  return (
    <section className="tawha-who" aria-labelledby="tawha-who-heading">
      <div className="tawha-board">
        <div className="tawha-who__stage">
          <Image
            src={whoUsesBg.src}
            alt=""
            fill
            priority={false}
            className="tawha-who__bg"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />

          <h2 id="tawha-who-heading" className="tawha-who__title">
            {whoUses.title}
          </h2>

          <div className="tawha-who__grid">
            {whoUses.roles.map((role) => (
              <article
                key={role.id}
                className={`tawha-who__role tawha-who__role--${role.id}`}
              >
                <h3 className="tawha-who__role-title">{role.title}</h3>
                <p className="tawha-who__needs-label">Needs</p>
                <ul className="tawha-who__pills">
                  {role.needs.map((need) => (
                    <li key={need}>
                      <span className="tawha-who__pill">{need}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
