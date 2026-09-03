import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

function PlatformIcons() {
  const { platformAndroid, platformIos } = tawhaAssets;

  return (
    <div className="tawha-intro__platforms">
      <Image
        src={platformAndroid.src}
        alt={platformAndroid.alt}
        width={platformAndroid.width}
        height={platformAndroid.height}
        className="tawha-intro__platform"
      />
      <Image
        src={platformIos.src}
        alt={platformIos.alt}
        width={platformIos.width}
        height={platformIos.height}
        className="tawha-intro__platform"
      />
    </div>
  );
}

export function TawhaIntro() {
  const { intro } = tawhaCopy;
  const { notificationPhone, appIconPhone } = tawhaAssets;

  return (
    <section className="tawha-intro" aria-labelledby="tawha-intro-heading">
      <div className="tawha-board tawha-intro__inner">
        <h2 id="tawha-intro-heading" className="tawha-intro__headline">
          {intro.headlineBefore}
          <span className="tawha-intro__highlight">{intro.headlineHighlight}</span>
          {intro.headlineAfter}
        </h2>
        <p className="tawha-intro__subheadline">{intro.subheadline}</p>

        <ul className="tawha-intro__stats" aria-label="Project scope">
          {intro.stats.map((stat) => (
            <li key={stat.label} className="tawha-intro__stat">
              <span className="tawha-intro__stat-value">{stat.value}</span>
              <span className="tawha-intro__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <div className="tawha-intro__cards">
          <figure className="tawha-intro__card tawha-intro__card--notify">
            <Image
              src={notificationPhone.src}
              alt={notificationPhone.alt}
              width={notificationPhone.width}
              height={notificationPhone.height}
              className="tawha-intro__card-img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>

          <article className="tawha-intro__card tawha-intro__card--icon">
            <div className="tawha-intro__icon-copy">
              <span className="tawha-intro__badge">{intro.appIconBadge}</span>
              <p className="tawha-intro__icon-body">{intro.appIconBody}</p>
              <PlatformIcons />
            </div>
            <div className="tawha-intro__icon-media">
              <Image
                src={appIconPhone.src}
                alt={appIconPhone.alt}
                width={appIconPhone.width}
                height={appIconPhone.height}
                className="tawha-intro__icon-phone"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
