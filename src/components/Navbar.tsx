"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(49,46,129,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-lg font-extrabold text-white shadow-lg shadow-brand-600/30">
            B
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-extrabold text-ink">
              Brain Recharge
            </span>
            <span className="block text-[11px] font-semibold tracking-wide text-brand-600">
              GLOBAL SCHOOL
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/75 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#admissions"
            className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-accent-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book a Tour
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 rounded bg-current transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[28rem] border-t border-brand-100" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-2.5 font-medium text-ink/80 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-3 text-center font-bold text-white"
            >
              Book a Tour
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
