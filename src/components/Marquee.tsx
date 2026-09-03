"use client";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[color:var(--color-line)] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--color-bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--color-bg)] to-transparent" />
      <div className="marquee-track flex items-center gap-10 pr-10">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-4xl">
              {item}
            </span>
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
