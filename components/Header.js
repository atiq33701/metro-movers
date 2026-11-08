"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuote } from "./Quote";

const SERVICES = [
  ["/house-moving", "House Moving"],
  ["/office-movers", "Office Moving"],
  ["/long-distance-movers-nz", "Long Distance"],
  ["/moving-services", "Moving Services"],
  ["/piano-movers", "Piano Movers"],
  ["/pool-table-movers", "Pool Table Movers"],
  ["/spa-pool-movers", "Spa Pool Movers"],
  ["/rubbish-removal", "Rubbish Removal"],
];

const WHATSAPP = "https://wa.me/64226871426";

const navItem =
  "relative block whitespace-nowrap border-b border-white/20 px-1 py-3.5 font-display text-[1.1rem] font-semibold transition-colors hover:text-orange lg:rounded-md lg:border-0 lg:px-3 lg:py-2.5 lg:text-[.98rem]";

function PhoneIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1L6.6 10.8z"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const { openQuote } = useQuote();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSubOpen(false);
  }, [pathname]);

  const cls = (href) =>
    `${navItem} ${
      pathname === href
        ? "text-orange lg:after:absolute lg:after:inset-x-3 lg:after:bottom-1 lg:after:h-0.5 lg:after:rounded-sm lg:after:bg-orange lg:after:content-['']"
        : ""
    }`;

  const bar = "block h-0.5 w-6 rounded-sm bg-white transition";

  return (
    <header
      className={`sticky top-0 z-[100] border-b border-white/10 bg-ink text-white transition-shadow ${scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,.35)]" : ""}`}
    >
      <div className="wrap flex h-[62px] items-center justify-between gap-4 lg:h-[68px]">
        <Link href="/" aria-label="Metro Movers home" className="flex shrink-0 items-center rounded-md bg-white p-0.5">
          <img width="250" alt="Metro Movers" src="/img/logo.png" className="h-10 w-auto lg:h-[45px]" />
        </Link>

        <nav
          aria-label="Main navigation"
          className={`absolute inset-x-0 top-full max-h-[calc(100vh-62px)] flex-col overflow-y-auto border-t border-white/20 bg-ink px-5 pb-6 pt-2 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:p-0 ${menuOpen ? "flex" : "hidden"}`}
        >
          <Link href="/" className={cls("/")}>Home</Link>

          <div className="group relative flex flex-wrap items-center border-b border-white/20 lg:border-0">
            <Link href="/Service" className={`${cls("/Service")} flex-1 border-0!`}>Services</Link>

            <button
              type="button"
              aria-expanded={subOpen}
              aria-label="Toggle services menu"
              onClick={() => setSubOpen((v) => !v)}
              className="flex cursor-pointer p-3 lg:-ml-2 lg:p-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`size-4 transition-transform lg:size-3 ${subOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <ul
              className={`m-0 mb-2 w-full list-none rounded-lg bg-ink-2 py-2 lg:absolute lg:left-0 lg:top-full lg:mb-0 lg:min-w-[240px] lg:border lg:border-ink-3 lg:shadow-2xl lg:group-focus-within:block lg:group-hover:block ${subOpen ? "block" : "hidden"}`}
            >
              {SERVICES.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="block whitespace-nowrap px-4 py-3 hover:bg-ink-3 hover:text-orange lg:py-2.5">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/Service" className="mt-1 block border-t border-ink-3 px-4 py-3 text-muted-dark hover:bg-ink-3 hover:text-orange lg:py-2.5">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/pricing" className={cls("/pricing")}>Pricing</Link>
          <Link href="/Reviews" className={cls("/Reviews")}>Reviews</Link>
          <Link href="/MovingTips" className={cls("/MovingTips")}>Moving Tips</Link>

          <div className="flex flex-col gap-2.5 pt-[18px] lg:hidden">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white text-white hover:bg-white hover:text-ink">
              +64 22 687 1426
            </a>
            <button className="btn btn-primary" onClick={openQuote}>Get A Quote</button>
          </div>
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 whitespace-nowrap font-display font-bold hover:text-orange lg:inline-flex"
          >
            <PhoneIcon size={18} /> Call Us
          </a>

          <button className="btn btn-primary hidden px-[18px]! py-[11px]! text-[.95rem]! lg:inline-flex" onClick={openQuote}>
            Get A Quote
          </button>

          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Call Metro Movers" className="inline-flex p-2 text-orange lg:hidden">
            <PhoneIcon size={22} />
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-11 cursor-pointer flex-col justify-center gap-[5px] p-2.5 lg:hidden"
          >
            <span className={`${bar} ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`${bar} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`${bar} ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
