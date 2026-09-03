"use client";

import { Reveal } from "@/components/Reveal";
import { virtueStayConnectedCopy } from "@/data/virtue-phase2-assets";

function LinkedInIcon() {
  return (
    <svg
      className="virtue-p2-footer__icon virtue-p2-footer__icon--linkedin"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67v-8.52h2.67v8.52zM7 8.69A1.55 1.55 0 1 1 7 5.6a1.55 1.55 0 0 1 0 3.09zM18.34 18.34h-2.67v-4.53c0-1.26-.45-2.12-1.58-2.12-.86 0-1.37.58-1.6 1.14-.08.2-.1.48-.1.76v4.75h-2.67s.04-7.71 0-8.52h2.67v1.21c.35-.55 1-1.33 2.42-1.33 1.77 0 3.1 1.16 3.1 3.64v5z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="virtue-p2-footer__icon virtue-p2-footer__icon--email"
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
      aria-hidden
    >
      <path
        d="M1.5 1.5h21v16h-21v-16z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M1.5 3.2 12 10.5 22.5 3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VirtueStayConnected() {
  return (
    <section className="virtue-p2-footer" aria-label="Contact">
      <div className="virtue-p2-footer__panel">
        <div className="virtue-board mx-auto px-[var(--vt-gutter)]">
          <Reveal className="virtue-p2-footer__content">
            <h2 className="virtue-p2-footer__title">{virtueStayConnectedCopy.heading}</h2>
            <p className="virtue-p2-footer__intro">{virtueStayConnectedCopy.intro}</p>

            <div className="virtue-p2-footer__contacts">
              <a
                href={virtueStayConnectedCopy.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="virtue-p2-footer__row"
              >
                <LinkedInIcon />
                <span className="virtue-p2-footer__link-text">
                  {virtueStayConnectedCopy.linkedin}
                </span>
              </a>

              <a
                href={`mailto:${virtueStayConnectedCopy.email}`}
                className="virtue-p2-footer__row"
              >
                <EmailIcon />
                <span className="virtue-p2-footer__link-text virtue-p2-footer__link-text--email">
                  {virtueStayConnectedCopy.email}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
