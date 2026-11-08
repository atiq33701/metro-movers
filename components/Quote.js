"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const QuoteContext = createContext({ openQuote: () => {}, closeQuote: () => {} });

export const useQuote = () => useContext(QuoteContext);

const SERVICE_OPTIONS = [
  "House Moving",
  "Office Moving",
  "Long Distance Moving",
  "Piano Moving",
  "Pool Table Moving",
  "Spa Pool Moving",
  "Rubbish Removal",
];

const EMPTY = { name: "", phone: "", email: "", date: "", pickup: "", dropoff: "", details: "" };

const field =
  "w-full min-w-0 rounded-lg border-[1.5px] border-line bg-white px-3 py-2.5 text-base focus:border-orange focus:ring-[3px] focus:ring-orange/25 focus:outline-none";
const group = "flex min-w-0 flex-col gap-1.5";
const label = "font-display text-[.9rem] font-bold";

// Wrap the app with this so any button can open the quote form.
export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => setOpen(false), []);

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote }}>
      {children}
      {open && <QuoteModal onClose={closeQuote} />}
    </QuoteContext.Provider>
  );
}

// Drop-in replacement for <button> that opens the quote modal.
export function QuoteButton({ children, onClick, ...props }) {
  const { openQuote } = useQuote();
  return (
    <button
      type="button"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        openQuote();
      }}
    >
      {children}
    </button>
  );
}

function QuoteModal({ onClose }) {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY);
  const [services, setServices] = useState([]);
  const [ddOpen, setDdOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const set = (key) => (e) => setForm((cur) => ({ ...cur, [key]: e.target.value }));

  const toggle = (service) =>
    setServices((cur) =>
      cur.includes(service) ? cur.filter((s) => s !== service) : [...cur, service]
    );

  async function submit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services, page: window.location.pathname }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Your quote request could not be sent.");
      }

      onClose();
      router.push("/thank-you");
    } catch (err) {
      setError(err.message || "Something went wrong. Please call us on +64 22 687 1426.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-[2px] max-[600px]:block max-[600px]:overflow-y-auto max-[600px]:p-0"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[720px] overflow-y-auto rounded-2xl bg-paper shadow-2xl before:sticky before:top-0 before:z-[2] before:block before:h-2 before:stripe before:content-[''] max-[600px]:max-h-none max-[600px]:min-h-full max-[600px]:overflow-visible max-[600px]:rounded-b-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3.5 top-3.5 z-[3] size-10 cursor-pointer rounded-full bg-ink text-2xl leading-none text-white hover:bg-orange hover:text-ink"
        >
          ×
        </button>

        <form onSubmit={submit} className="px-7 pt-[18px] max-[600px]:px-[18px]">
          <h2 id="quote-title" className="mb-3 pr-12">Get a Free Quote</h2>

          <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
            <div className={group}>
              <label htmlFor="q-name" className={label}>
                Name <span className="text-orange-deep">*</span>
              </label>
              <input id="q-name" required value={form.name} onChange={set("name")} autoComplete="name" className={field} />
            </div>

            <div className={group}>
              <label htmlFor="q-phone" className={label}>
                Phone <span className="text-orange-deep">*</span>
              </label>
              <input id="q-phone" type="tel" required value={form.phone} onChange={set("phone")} autoComplete="tel" className={field} />
            </div>

            <div className={group}>
              <label htmlFor="q-email" className={label}>
                Email <span className="text-orange-deep">*</span>
              </label>
              <input id="q-email" type="email" required value={form.email} onChange={set("email")} autoComplete="email" className={field} />
            </div>

            <div className={group}>
              <label htmlFor="q-date" className={label}>Moving date</label>
              <input id="q-date" type="date" value={form.date} onChange={set("date")} className={field} />
            </div>

            <div className={`${group} sm:col-span-2`}>
              <label className={label}>Service</label>
              <div className="relative">
                <div
                  className={`${field} flex cursor-pointer select-none items-center justify-between`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={ddOpen}
                  onClick={() => setDdOpen((v) => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setDdOpen((v) => !v);
                    }
                  }}
                >
                  <span>{services.length ? services.join(", ") : "Select services"}</span>
                  <span className="text-[.7rem] text-muted">▼</span>
                </div>

                {ddOpen && (
                  <div className="absolute inset-x-0 top-[calc(100%+6px)] z-[5] rounded-lg border-[1.5px] border-line bg-white p-1.5 shadow-lg">
                    {SERVICE_OPTIONS.map((service) => (
                      <label key={service} className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 hover:bg-paper-2">
                        <input
                          type="checkbox"
                          checked={services.includes(service)}
                          onChange={() => toggle(service)}
                          className="accent-orange-deep"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-2.5 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
            <div className={group}>
              <label htmlFor="q-pickup" className={label}>Pick-up address</label>
              <input id="q-pickup" value={form.pickup} onChange={set("pickup")} autoComplete="street-address" className={field} />
            </div>

            <div className={group}>
              <label htmlFor="q-dropoff" className={label}>Drop-off address</label>
              <input id="q-dropoff" value={form.dropoff} onChange={set("dropoff")} className={field} />
            </div>
          </div>

          <div className={`${group} mt-2.5`}>
            <label htmlFor="q-details" className={label}>Anything we should know?</label>
            <textarea
              id="q-details"
              className={`${field} min-h-[60px] resize-y`}
              placeholder="Tell us about your move, including bedrooms, stairs, fragile items or other requirements"
              value={form.details}
              onChange={set("details")}
            />
          </div>

          {error && (
            <p role="alert" className="mb-2 mt-2.5 text-[#b42318]">
              {error}
            </p>
          )}

          <div className="sticky bottom-0 z-[3] -mx-7 mt-1 bg-paper px-7 pb-[18px] pt-2.5 max-[600px]:static max-[600px]:-mx-[18px] max-[600px]:px-[18px]">
            <button
              type="submit"
              disabled={busy}
              className="w-full cursor-pointer rounded-lg bg-orange px-6 py-4 font-display text-[1.05rem] font-bold text-ink shadow-[0_6px_18px_#f99d3359] transition hover:-translate-y-px hover:bg-[#ffad4d] disabled:cursor-wait disabled:opacity-60 disabled:transform-none"
            >
              {busy ? "Sending…" : "Request my quote"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
