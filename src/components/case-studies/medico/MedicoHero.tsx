import Image from "next/image";
import { medicoAssets, medicoCopy } from "@/data/medico-case-study";

function MedicoHeartMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <path
        d="M16.2 27.2C10.4 23.1 5.2 18.4 3.6 13.6 2.2 9.4 4.4 5.4 8.4 4.6c2.2-.4 4.4.5 5.8 2.3C15.6 5.1 17.8 4.2 20 4.6c4 .8 6.2 4.8 4.8 9-1.6 4.8-6.8 9.5-8.6 13.6z"
        fill="#1a6dff"
      />
      <path
        d="M17.2 26.4c4.8-3.6 8.6-7.6 9.8-11.4 1.2-3.6-.4-7-3.6-7.8-1.8-.4-3.6.3-4.8 1.8"
        fill="#4d8fff"
        opacity="0.95"
      />
      <path d="M15.2 11.2h1.8v8.2h-1.8V11.2zm-3.2 3.2h8.2v1.8h-8.2v-1.8z" fill="#fff" />
    </svg>
  );
}

export function MedicoHero() {
  const { heroComposition } = medicoAssets;

  return (
    <section className="medico-hero" aria-labelledby="medico-hero-title">
      <div className="medico-board medico-hero__inner">
        <div className="medico-hero__brand-row">
          <div className="medico-hero__brand">
            <MedicoHeartMark size={30} />
            <p className="medico-hero__name">{medicoCopy.brand}</p>
          </div>
          <p className="medico-hero__badge">{medicoCopy.badge}</p>
        </div>

        <h1 id="medico-hero-title" className="medico-hero__title">
          Your <span>Personal Health</span>
          <br />
          <span>Assistant</span> in Your Pocket
        </h1>

        <div className="medico-hero__stage">
          <Image
            src={heroComposition.src}
            alt={heroComposition.alt}
            width={heroComposition.width}
            height={heroComposition.height}
            className="medico-hero__composition"
            priority
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 88vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
