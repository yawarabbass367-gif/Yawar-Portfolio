import Image from "next/image";
import { plumAssets, plumCopy } from "@/data/plum-case-study";

export function PlumMobileScreensSection() {
  const {
    mobileBgLeft,
    mobileBgRight,
    mobilePhonesTop,
    mobilePhonesMid,
    mobilePhonesBot,
  } = plumAssets;

  return (
    <section className="plum-mobile-screens" aria-labelledby="plum-mobile-heading">
      <div className="plum-board">
        <h2 id="plum-mobile-heading" className="plum-mobile-screens__title">
          {plumCopy.sections.mobileScreens}
        </h2>
      </div>

      <div className="plum-mobile-screens__stage">
        <Image
          src={mobileBgLeft.src}
          alt=""
          width={mobileBgLeft.width}
          height={mobileBgLeft.height}
          className="plum-mobile-screens__bg plum-mobile-screens__bg--left"
          sizes="12vw"
          aria-hidden
        />
        <Image
          src={mobileBgRight.src}
          alt=""
          width={mobileBgRight.width}
          height={mobileBgRight.height}
          className="plum-mobile-screens__bg plum-mobile-screens__bg--right"
          sizes="12vw"
          aria-hidden
        />

        <div className="plum-mobile-screens__phones">
          <div className="plum-mobile-screens__row-eq plum-mobile-screens__row-eq--top">
            {mobilePhonesTop.map((phone) => (
              <div key={phone.src} className="plum-mobile-screens__phone">
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={phone.width}
                  height={phone.height}
                  className="plum-mobile-screens__phone-img"
                  sizes="(max-width: 640px) 30vw, (max-width: 900px) 26vw, 280px"
                />
              </div>
            ))}
          </div>

          <div className="plum-mobile-screens__row-eq plum-mobile-screens__row-eq--mid">
            {mobilePhonesMid.map((phone, i) => (
              <div
                key={phone.src}
                className={
                  i === 1
                    ? "plum-mobile-screens__phone plum-mobile-screens__phone--raised"
                    : "plum-mobile-screens__phone"
                }
              >
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={phone.width}
                  height={phone.height}
                  className="plum-mobile-screens__phone-img"
                  sizes="(max-width: 640px) 30vw, (max-width: 900px) 26vw, 280px"
                />
              </div>
            ))}
          </div>

          <div className="plum-mobile-screens__row-eq plum-mobile-screens__row-eq--bot">
            {mobilePhonesBot.map((phone, i) => (
              <div
                key={phone.src}
                className={
                  i === 1
                    ? "plum-mobile-screens__phone plum-mobile-screens__phone--raised"
                    : "plum-mobile-screens__phone"
                }
              >
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={phone.width}
                  height={phone.height}
                  className="plum-mobile-screens__phone-img"
                  sizes="(max-width: 640px) 42vw, (max-width: 900px) 36vw, 280px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
