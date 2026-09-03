type PlumWaveformProps = {
  className?: string;
  /** Number of bars (odd looks best) */
  bars?: number;
};

/** Editable green waveform mark — diamond/eye shape matching Figma Plum brand */
export function PlumWaveform({ className, bars = 13 }: PlumWaveformProps) {
  const count = Math.max(5, bars % 2 === 0 ? bars + 1 : bars);
  const mid = (count - 1) / 2;
  // Explicit diamond profile (matches Figma brand lockup)
  const heights = Array.from({ length: count }, (_, i) => {
    const t = Math.abs(i - mid) / mid;
    return 0.18 + (1 - t) * (1 - t * 0.15) * 0.82;
  });

  const vbW = count * 10;
  const vbH = 48;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${vbW} ${vbH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {heights.map((h, i) => {
        const barH = h * (vbH - 4);
        const y = (vbH - barH) / 2;
        return (
          <rect
            key={i}
            x={i * 10 + 2.5}
            y={y}
            width={5}
            height={barH}
            rx={2.5}
            fill="currentColor"
          />
        );
      })}
    </svg>
  );
}
