"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

const navLinks = [
  {
    href: "/works",
    label: "Works",
    icon: "/nav/works.png",
    cursor: "Go",
    match: (pathname: string) => pathname.startsWith("/works"),
  },
  {
    href: "/",
    label: "Home",
    icon: "/nav/home.svg",
    cursor: "Home",
    match: (pathname: string) => pathname === "/",
    accent: true,
  },
  {
    href: "/playground",
    label: "Playground",
    icon: "/nav/playground.png",
    cursor: "Go",
    match: (pathname: string) => pathname.startsWith("/playground"),
  },
] as const;

function NavIcon({
  src,
  active,
  accent,
  size = 28,
}: {
  src: string;
  active?: boolean;
  accent?: boolean;
  size?: number;
}) {
  const tone = accent
    ? "bg-[color:var(--color-accent)]"
    : active
      ? "bg-[color:var(--color-navy)]"
      : "bg-[color:var(--color-muted)] group-hover:bg-[color:var(--color-navy)]";

  return (
    <span
      aria-hidden
      className={`block transition-colors ${tone}`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: easeOut }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[color:var(--color-bg)]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-[88px] w-full max-w-[920px] items-center justify-center px-6">
        <nav className="flex w-full items-center justify-center gap-10 sm:gap-12 lg:gap-16" aria-label="Primary">
          {navLinks.map((link) => {
            const active = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor={link.cursor}
                aria-label={link.label}
                aria-current={active ? "page" : undefined}
                className="group inline-flex flex-col items-center justify-center gap-1.5 rounded-full px-2 py-1 transition hover:opacity-90"
              >
                <NavIcon
                  src={link.icon}
                  active={active}
                  accent={"accent" in link && link.accent}
                  size={26}
                />
                <span
                  className={`text-[13px] leading-none transition-colors ${
                    "accent" in link && link.accent
                      ? "font-medium text-[color:var(--color-accent)]"
                      : active
                        ? "text-[color:var(--color-navy)]"
                        : "text-[color:var(--color-muted)] group-hover:text-[color:var(--color-navy)]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
