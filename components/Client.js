"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  { src: "/img/photos/6.jpeg", alt: "Metro Movers relocation service" },
  { src: "/img/photos/7.jpeg", alt: "Metro Movers moving team at work" },
  { src: "/img/photos/8.jpeg", alt: "Metro Movers professional movers" },
  { src: "/img/photos/9.jpeg", alt: "Metro Movers moving and relocation" },
  { src: "/img/photos/10.jpeg", alt: "Metro Movers moving service in Bombay" },
];

export function Carousel() {
  const [i, setI] = useState(0);
  const paused = useRef(false);
  const n = SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % n);
    }, 5000);
    return () => clearInterval(t);
  }, [n]);

  const arrow =
    "grid size-[26px] cursor-pointer place-items-center rounded-full text-white hover:bg-white/15";
  const icon = "size-4 fill-none stroke-current stroke-[2.2] [stroke-linecap:round] [stroke-linejoin:round]";

  return (
    <div
      className="relative z-[1]"
      role="group"
      aria-roledescription="carousel"
      aria-label="Metro Movers photos"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink shadow-2xl">
        {SLIDES.map((s, idx) => (
          <img
            key={s.src}
            width="880"
            alt={idx === i ? s.alt : ""}
            loading={idx === 0 ? "eager" : "lazy"}
            src={s.src}
            className={`absolute inset-0 block size-full object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-3 right-3 z-[3] flex items-center gap-1 rounded-full bg-ink/55 px-1.5 py-[5px] backdrop-blur-md">
        <button type="button" className={arrow} aria-label="Previous photo" onClick={() => setI((i - 1 + n) % n)}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={icon}><path d="M15 5l-7 7 7 7" /></svg>
        </button>

        <span className="flex items-center gap-1.5 px-1">
          {SLIDES.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show photo ${idx + 1}`}
              aria-current={idx === i ? "true" : undefined}
              onClick={() => setI(idx)}
              className={`size-[7px] cursor-pointer rounded-full transition ${idx === i ? "scale-[1.45] bg-orange" : "bg-white/45 hover:bg-white/75"}`}
            />
          ))}
        </span>

        <button type="button" className={arrow} aria-label="Next photo" onClick={() => setI((i + 1) % n)}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={icon}><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <p className="sr-only" aria-live="polite">{SLIDES[i].alt}</p>
    </div>
  );
}

// Smooth-scrolls to an element id, leaving room for the sticky header.
export function ScrollButton({ target, children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      onClick={() => {
        const el = document.getElementById(target);
        if (!el) return;
        const header = document.querySelector("header");
        const offset = (header ? header.offsetHeight : 0) + 12;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
      }}
    >
      {children}
    </button>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-10 right-10 z-[1000] size-10 cursor-pointer items-center justify-center rounded-full bg-[#007bff] text-xl text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0056b3] max-sm:bottom-5 max-sm:right-5 ${show ? "flex" : "hidden"}`}
    >
      ↑
    </button>
  );
}
