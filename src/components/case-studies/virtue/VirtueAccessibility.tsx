"use client";

import { Reveal } from "@/components/Reveal";
import { virtueAccessibilityCopy, virtuePhase2Assets } from "@/data/virtue-phase2-assets";
import { VirtueFigmaImage } from "./VirtueFigmaImage";

export function VirtueAccessibility() {
  const { navBar, settingsPhone, notificationsPanel } = virtuePhase2Assets.accessibility;
  const [navCard, alertsCard] = virtueAccessibilityCopy.cards;

  return (
    <section className="virtue-p2-accessibility bg-white py-14 md:py-20">
      <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
        <Reveal>
          <h2 className="virtue-section-title virtue-section-title--decorated">
            {virtueAccessibilityCopy.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="virtue-p2-a11y-stage">
          <div className="virtue-p2-a11y-stage__col virtue-p2-a11y-stage__col--nav">
            <div className="virtue-p2-a11y-stage__badge" aria-hidden>
              {navCard.number}
            </div>
            <h3 className="virtue-p2-a11y-stage__title">{navCard.title}</h3>
            <VirtueFigmaImage
              src={navBar.src}
              alt=""
              width={navBar.width}
              height={navBar.height}
              className="virtue-p2-a11y-stage__nav"
              sizes="355px"
              unoptimized
            />
            <p className="virtue-body virtue-p2-a11y-stage__body">{navCard.body}</p>
          </div>

          <div className="virtue-p2-a11y-stage__col virtue-p2-a11y-stage__col--alerts">
            <div className="virtue-p2-a11y-stage__badge" aria-hidden>
              {alertsCard.number}
            </div>
            <h3 className="virtue-p2-a11y-stage__title">{alertsCard.title}</h3>
            <p className="virtue-body virtue-p2-a11y-stage__body">{alertsCard.body}</p>
          </div>

          <div className="virtue-p2-a11y-stage__visual">
            <VirtueFigmaImage
              src={settingsPhone.src}
              alt=""
              width={settingsPhone.width}
              height={settingsPhone.height}
              className="virtue-p2-a11y-stage__phone"
              sizes="260px"
              unoptimized
            />
            <VirtueFigmaImage
              src={notificationsPanel.src}
              alt=""
              width={notificationsPanel.width}
              height={notificationsPanel.height}
              className="virtue-p2-a11y-stage__notifications"
              sizes="247px"
              unoptimized
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
