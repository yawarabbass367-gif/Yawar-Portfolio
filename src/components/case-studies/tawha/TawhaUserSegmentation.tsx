import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

function Stem() {
  return (
    <div className="tawha-segments__stem" aria-hidden>
      <span className="tawha-segments__line" />
      <span className="tawha-segments__node" />
    </div>
  );
}

export function TawhaUserSegmentation() {
  const { userSegmentation } = tawhaCopy;
  const { segmentLogo, segmentUsers, segmentBusiness } = tawhaAssets;
  const { personal, business, note } = userSegmentation;

  return (
    <section className="tawha-segments" aria-labelledby="tawha-segments-heading">
      <div className="tawha-board">
        <div className="tawha-segments__panel">
          <h2 id="tawha-segments-heading" className="tawha-segments__title">
            {userSegmentation.title}
          </h2>

          <div className="tawha-segments__tree">
            <div className="tawha-segments__root">
              <Image
                src={segmentLogo.src}
                alt={segmentLogo.alt}
                width={segmentLogo.width}
                height={segmentLogo.height}
                className="tawha-segments__logo"
                sizes="122px"
                priority={false}
              />
            </div>

            <Stem />

            <div className="tawha-segments__tier">
              <div className="tawha-segments__fork" aria-hidden>
                <span className="tawha-segments__fork-bar" />
              </div>

              <div className="tawha-segments__branches">
                {/* Personal */}
                <div className="tawha-segments__branch tawha-segments__branch--personal">
                  <span className="tawha-segments__drop" aria-hidden />
                  <div className="tawha-segments__icon-wrap">
                    <Image
                      src={segmentUsers.src}
                      alt=""
                      width={segmentUsers.width}
                      height={segmentUsers.height}
                      className="tawha-segments__icon"
                      sizes="86px"
                    />
                  </div>
                  <p className="tawha-segments__label">{personal.label}</p>
                  <Stem />
                  <p className="tawha-segments__step">{personal.context}</p>
                  <Stem />
                  <p className="tawha-segments__step">{personal.user}</p>
                </div>

                {/* Business */}
                <div className="tawha-segments__branch tawha-segments__branch--business">
                  <span className="tawha-segments__drop" aria-hidden />
                  <div className="tawha-segments__icon-wrap">
                    <Image
                      src={segmentBusiness.src}
                      alt=""
                      width={segmentBusiness.width}
                      height={segmentBusiness.height}
                      className="tawha-segments__icon"
                      sizes="86px"
                    />
                  </div>
                  <p className="tawha-segments__label">{business.label}</p>
                  <Stem />
                  <p className="tawha-segments__step">{business.context}</p>
                  <Stem />
                  <p className="tawha-segments__step">{business.user}</p>

                  <Stem />

                  <div className="tawha-segments__fork tawha-segments__fork--sub" aria-hidden>
                    <span className="tawha-segments__fork-bar" />
                  </div>

                  <div className="tawha-segments__subbranches">
                    <div className="tawha-segments__subbranch">
                      <span className="tawha-segments__drop" aria-hidden />
                      <p className="tawha-segments__step tawha-segments__step--muted">
                        {business.userTypes.title}
                      </p>
                      <Stem />
                      <ul className="tawha-segments__list">
                        {business.userTypes.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="tawha-segments__subbranch">
                      <span className="tawha-segments__drop" aria-hidden />
                      <p className="tawha-segments__step tawha-segments__step--muted">
                        {business.systemTypes.title}
                      </p>
                      <Stem />
                      <ul className="tawha-segments__list">
                        {business.systemTypes.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tawha-segments__note">
            <h3 className="tawha-segments__note-title">{note.title}</h3>
            <p className="tawha-segments__note-body">{note.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
