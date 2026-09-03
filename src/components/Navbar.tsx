"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: easeOut }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[color:var(--color-bg)]/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-[88px] w-full max-w-[920px] items-center justify-center px-6">
          {/* Desktop centered nav */}
          <nav className="hidden w-full items-center justify-center gap-10 md:flex lg:gap-14">
            <Link
              href="/works"
              data-cursor="Go"
              className={`text-[15px] transition-colors ${
                pathname.startsWith("/works")
                  ? "text-[color:var(--color-navy)]"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-navy)]"
              }`}
            >
              Works
            </Link>

            <Link
              href="/"
              data-cursor="Home"
              className="group text-center leading-none"
              aria-label="Artemis home"
            >
              <span className="block text-[22px] font-bold leading-[1.05] text-[color:var(--color-accent)] transition group-hover:opacity-90 lg:text-[26px]">
                Artemis &amp;
              </span>
              <span className="block text-[22px] font-bold leading-[1.05] text-[color:var(--color-accent)] transition group-hover:opacity-90 lg:text-[26px]">
                Artemis
              </span>
            </Link>

            <Link
              href="/playground"
              data-cursor="Go"
              className={`text-[15px] transition-colors ${
                pathname.startsWith("/playground")
                  ? "text-[color:var(--color-navy)]"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-navy)]"
              }`}
            >
              Playground
            </Link>
          </nav>

          {/* Mobile */}
          <Link
            href="/"
            className="text-center md:hidden"
            data-cursor="Home"
            aria-label="Artemis home"
          >
            <span className="block text-[20px] font-bold leading-tight text-[color:var(--color-accent)]">
              Artemis &amp;
            </span>
            <span className="block text-[20px] font-bold leading-tight text-[color:var(--color-accent)]">
              Artemis
            </span>
          </Link>

          <button
            className="absolute right-5 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-px w-full bg-[color:var(--color-navy)]"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="h-px w-full bg-[color:var(--color-navy)]"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="h-px w-full bg-[color:var(--color-navy)]"
              />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[color:var(--color-bg)] md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
              {[
                { href: "/works", label: "Works" },
                { href: "/", label: "Home" },
                { href: "/playground", label: "Playground" },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: easeOut }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-medium tracking-tight text-[color:var(--color-navy)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
