const ICONS = [
  // row 1 — 4
  "home",
  "bell",
  "signal",
  "settings",
  // row 2 — 5
  "history",
  "close",
  "power",
  "swap",
  "up",
  // row 3 — 3
  "pause",
  "play",
  "search",
] as const;

function IconGlyph({ name }: { name: (typeof ICONS)[number] }) {
  const stroke = "currentColor";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "home":
      return (
        <path {...common} d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
      );
    case "bell":
      return (
        <>
          <path {...common} d="M6 16h12l-1.2-2.2V10a4.8 4.8 0 1 0-9.6 0v3.8L6 16Z" />
          <path {...common} d="M10 18.5a2 2 0 0 0 4 0" />
        </>
      );
    case "signal":
      return (
        <>
          <path {...common} d="M8 6v12" />
          <path {...common} d="M16 6v12" />
        </>
      );
    case "settings":
      return (
        <>
          <circle {...common} cx="12" cy="12" r="3" />
          <path
            {...common}
            d="M12 3.5v2.2M12 18.3v2.2M4.8 7.2l1.9 1.1M17.3 15.7l1.9 1.1M4.8 16.8l1.9-1.1M17.3 8.3l1.9-1.1"
          />
        </>
      );
    case "history":
      return (
        <>
          <path {...common} d="M5.5 12a6.5 6.5 0 1 0 1.8-4.5" />
          <path {...common} d="M5 6.5v4h4" />
          <path {...common} d="M12 8.5V12l2.5 1.5" />
        </>
      );
    case "close":
      return (
        <>
          <circle {...common} cx="12" cy="12" r="7.5" />
          <path {...common} d="m9 9 6 6M15 9l-6 6" />
        </>
      );
    case "power":
      return (
        <>
          <path {...common} d="M12 4.5v7" />
          <path {...common} d="M7.2 7.8a6.5 6.5 0 1 0 9.6 0" />
        </>
      );
    case "swap":
      return (
        <>
          <path {...common} d="M8 17V7m0 0 2.5 2.5M8 7 5.5 9.5" />
          <path {...common} d="M16 7v10m0 0 2.5-2.5M16 17l-2.5-2.5" />
        </>
      );
    case "up":
      return <path {...common} d="M12 18V6m0 0 4 4M12 6 8 10" />;
    case "pause":
      return (
        <>
          <rect x="8" y="6.5" width="2.8" height="11" rx="1" fill={stroke} stroke="none" />
          <rect x="13.2" y="6.5" width="2.8" height="11" rx="1" fill={stroke} stroke="none" />
        </>
      );
    case "play":
      return <path fill={stroke} stroke="none" d="M9 7.2v9.6L17.2 12 9 7.2Z" />;
    case "search":
      return (
        <>
          <circle {...common} cx="11" cy="11" r="5.5" />
          <path {...common} d="m15.5 15.5 3.2 3.2" />
        </>
      );
    default:
      return null;
  }
}

/** Native icon set matching the Plum brand sheet */
export function PlumIconGrid() {
  const rows: (typeof ICONS)[number][][] = [
    ICONS.slice(0, 4),
    ICONS.slice(4, 9),
    ICONS.slice(9, 12),
  ];

  return (
    <div className="plum-icons" role="list" aria-label="Plum icon set">
      {rows.map((row, ri) => (
        <div key={ri} className="plum-icons__row">
          {row.map((name) => (
            <div key={name} className="plum-icons__cell" role="listitem" title={name}>
              <svg viewBox="0 0 24 24" className="plum-icons__glyph" aria-hidden>
                <IconGlyph name={name} />
              </svg>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
