
import Link from "next/link";
import { QuoteButton } from "../components/Quote";
import { Carousel } from "../components/Client";
import { Ld, WHATSAPP, business, meta } from "../components/Shared";

export const metadata = meta(
  "Metro Movers | House & Office Removals in Auckland",
  "Metro Movers provides house, office and long distance moving services across Auckland and New Zealand. Contact Metro Movers on +64 22 687 1426 for a quote.",
  "/"
);

const SERVICES = [
  ["/house-moving", "/img/photos/2.jpeg", "House moving services in Auckland", "House moving", "Moving apartments, townhouses and family homes across Auckland with careful handling of your furniture and belongings."],
  ["/office-movers", "/img/photos/21.jpeg", "Office and commercial moving services", "Office & commercial", "Professional office and commercial relocation services for businesses moving within Auckland."],
  ["/long-distance-movers-nz", "/img/photos/4.jpeg", "Long distance moving services in New Zealand", "Long distance", "Long distance moving services from Auckland to locations throughout New Zealand."],
  ["/moving-services", "/img/photos/20.jpeg", "Auckland moving services", "Auckland moving", "Moving assistance for homes and businesses throughout Auckland and surrounding areas."],
];

const icon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const WHY = [
  [
    "Reliable moving service",
    "We focus on organised moving services designed to make your relocation easier from start to finish.",
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
  ],
  [
    "Careful handling",
    "Your furniture and belongings are handled with care during loading, transport and unloading.",
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>,
  ],
  [
    "Clear quotes",
    "Contact Metro Movers to discuss your moving requirements and receive a quote based on your move.",
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 15h3" />
    </>,
  ],
  [
    "Auckland moving service",
    "Auckland based and available for moving requirements across the Auckland region.",
    <>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </>,
  ],
];

const REVIEWS = [
  ["Vincent and his team were great! Very efficient and took extra care with everything. They wrapped drawers with cling wrap and had blankets for the delicate things.", "Ethan", "3 bedroom house"],
  ["Fast, efficient, productive, and moved all of our furniture carefully and quickly. Best moving experience so far in Auckland.", "Edwin", "Parnell to Mt Wellington"],
  ["Clear communication, happy to adjust the booking for me and got everything where it needed to be. They made it super easy!", "McKenzie", "1 bedroom apartment"],
];

const CONTACT = [
  ["Phone", <a key="p" href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-orange-deep">WhatsApp Us</a>],
  ["Business", "Metro Movers"],
  ["Category", "Mover"],
  ["Location", "118 Paparata Road, Bombay 2675, New Zealand"],
  ["Plus Code", "RX7R+9M Bombay, New Zealand"],
];

const link = "mt-3 inline-block font-semibold text-orange-deep underline underline-offset-[3px]";

export default function Page() {
  return (
    <>
      <Ld data={business} />

      {/* Hero */}
      <section className="overflow-hidden bg-paper">
        <div className="wrap grid items-center gap-9 py-6 min-[561px]:py-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
          <div>
            <p className="eyebrow animate-rise [animation-delay:.05s]">Auckland based · Serving Auckland</p>
            <h1 className="animate-rise max-w-[20ch] [animation-delay:.18s]">
              Metro Movers who turn up on time, handle your belongings with care and get the job done.
            </h1>
            <p className="mb-6 max-w-[46ch] animate-rise text-[1.15rem] text-ink-3 [animation-delay:.3s]">
              House, office and long distance removals across Auckland and New Zealand, with a moving team focused on careful handling and reliable service.
            </p>
            <div className="flex animate-rise flex-wrap gap-3 [animation-delay:.42s]">
              <QuoteButton className="btn btn-primary px-[30px] py-[17px] text-[1.08rem] max-[560px]:hidden">Get a Quote</QuoteButton>
              <a className="btn btn-outline px-[30px] py-[17px] text-[1.08rem]" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
            <ul className="mb-0 mt-[22px] flex animate-rise list-none flex-wrap gap-x-[18px] gap-y-2 p-0 text-[.95rem] text-muted [animation-delay:.55s]">
              {["Auckland based", "Serving Auckland", "Moving services", "Quote available"].map((t) => (
                <li key={t} className="relative pl-4 before:absolute before:left-0 before:top-[9px] before:size-2 before:rotate-45 before:rounded-[2px] before:bg-orange before:content-['']">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-rise [animation-delay:.3s] max-lg:order-first max-lg:max-w-[640px]">
            <div className="absolute inset-0 -bottom-[18px] -right-[18px] left-[18px] top-[18px] rounded-2xl bg-orange max-lg:-bottom-3 max-lg:-right-3 max-lg:left-3 max-lg:top-3" />
            <Carousel />
            <div className="absolute -left-3.5 bottom-7 z-[4] grid gap-0.5 rounded-xl border-l-[6px] border-orange bg-ink py-3 pl-3.5 pr-[18px] text-white shadow-2xl max-lg:bottom-4 max-lg:left-2 max-[560px]:bottom-3 max-[560px]:left-0">
              <span className="font-display text-[1.05rem] font-extrabold leading-tight">Get a moving quote</span>
              <span className="text-[.85rem] text-muted-dark">Contact Metro Movers today</span>
            </div>
          </div>

          <QuoteButton className="btn btn-primary order-first hidden px-[30px] py-[17px] text-[1.08rem] max-[560px]:flex">Get a Quote</QuoteButton>
        </div>

        <div className="bg-ink text-white">
          <div className="wrap grid grid-cols-2 gap-4 py-[22px] text-center lg:grid-cols-4">
            {[
              ["Auckland", "Moving services across Auckland"],
              ["Homes", "House moving services"],
              ["Office", "Office relocation services"],
              ["NZ", "Long distance moving services"],
            ].map(([big, small]) => (
              <div key={big}>
                <strong className="block font-display text-[1.7rem] font-extrabold leading-tight text-orange">{big}</strong>
                <span className="text-[.85rem] text-muted-dark">{small}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="wrap">
          <div className="mb-7 flex items-end justify-between gap-5 max-[560px]:flex-col max-[560px]:items-start">
            <div>
              <p className="eyebrow">What we move</p>
              <h2 className="m-0">Pick your kind of move</h2>
            </div>
            <Link href="/Service" className="font-semibold text-orange-deep underline underline-offset-[3px]">
              See all services →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(([href, img, alt, title, text]) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink-2">
                  <img width="600" alt={alt} loading="lazy" src={img} className="block size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px]">
                  <h3>{title}</h3>
                  <p className="flex-1 text-[.97rem] text-muted">{text}</p>
                  <span className="font-display font-bold text-orange-deep">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-paper-2">
        <div className="wrap">
          <p className="eyebrow text-center">Why choose Metro Movers</p>
          <h2 className="mb-9 text-center">Moving made simple and straightforward</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(([title, text, paths]) => (
              <div key={title} className="relative overflow-hidden rounded-2xl border border-line bg-white px-6 py-[26px] before:absolute before:inset-y-0 before:left-0 before:w-[5px] before:bg-orange before:content-['']">
                <svg viewBox="0 0 24 24" {...icon} className="mb-3.5 size-11 text-orange-deep">{paths}</svg>
                <h3>{title}</h3>
                <p className="m-0 text-[.97rem] text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-paper-2">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2>Get a quote for your move</h2>
            <p className="text-[1.15rem] text-ink-3">
              Moving costs can vary depending on the size, distance and requirements of your move. Contact Metro Movers to discuss your move and request a quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className="btn btn-dark">See full pricing</Link>
              <QuoteButton className="btn btn-primary">Get a Quote</QuoteButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-xl before:block before:h-2 before:stripe before:content-['']">
            <div className="grid gap-1 px-[26px] pb-3 pt-6">
              <span className="text-[.8rem] uppercase tracking-widest text-muted">Metro Movers</span>
              <span className="font-display text-[2.4rem] font-extrabold leading-tight">Get a Quote</span>
              <span className="text-[.9rem] text-muted">Based on your moving requirements</span>
            </div>
            <ul className="m-0 list-none px-[26px] pb-6 pt-2">
              {[
                "House and residential moves",
                "Office and commercial relocations",
                "Long distance moving services",
                "Auckland and New Zealand moving services",
              ].map((t) => (
                <li key={t} className="relative border-t border-dashed border-line py-[9px] pl-[26px] before:absolute before:left-0 before:font-bold before:text-orange-deep before:content-['✓']">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-white">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <img
              width="900"
              alt="Metro Movers moving team"
              loading="lazy"
              src="/img/photos/3.jpeg"
              className="block w-full rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-3.5 -right-3 rounded-xl bg-orange px-[18px] py-3 text-ink shadow-xl max-lg:bottom-2 max-lg:right-2">
              <span className="block font-display text-[1.8rem] font-extrabold leading-none">Metro</span>
              <span className="text-[.8rem] font-semibold">Movers services</span>
            </div>
          </div>

          <div>
            <p className="eyebrow">About Metro Movers</p>
            <h2>Moving homes and businesses across Auckland</h2>
            <p className="text-[1.15rem] text-ink-3">
              Metro Movers is an Auckland based moving company. The company provides moving services for homes, offices and longer-distance relocations across Auckland and New Zealand.
            </p>
            <ul className="mb-[22px] list-none p-0">
              {["Residential and house moving", "Office and commercial moving", "Long distance moving services"].map((t) => (
                <li key={t} className="relative border-b border-line py-2 pl-[26px] before:absolute before:left-0.5 before:font-bold before:text-orange-deep before:content-['✓']">
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/Reviews" className="font-semibold text-orange-deep underline underline-offset-[3px]">Read all reviews</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-ink text-white">
        <div className="wrap">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="eyebrow text-orange!">Reviews</p>
              <h2 className="m-0">What customers say about Metro Movers</h2>
            </div>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 text-ink">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-paper-2 font-display font-extrabold text-[#4285f4]">G</span>
              <span className="text-[.9rem] text-muted">Google reviews</span>
            </div>
          </div>

          <div className="mb-[22px] grid gap-5 lg:grid-cols-3">
            {REVIEWS.map(([text, name, place]) => (
              <blockquote key={name} className="m-0 rounded-2xl border border-ink-3 bg-ink-2 p-6">
                <div className="mb-2.5 tracking-[2px] text-orange">★★★★★</div>
                <p className="text-[1.02rem] text-[#eee]">{text}</p>
                <footer className="text-[.92rem] text-muted-dark">
                  <strong className="text-white">{name}</strong> · {place}
                </footer>
              </blockquote>
            ))}
          </div>

          <Link href="/Reviews" className="font-semibold text-orange underline underline-offset-[3px]">Read all reviews</Link>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-white" id="contact-section">
        <div className="wrap grid items-stretch gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Talk to Metro Movers</h2>
            <dl className="m-0">
              {CONTACT.map(([k, v]) => (
                <div key={k} className="grid gap-3 border-b border-line py-3.5 sm:grid-cols-[110px_1fr]">
                  <dt className="pt-0.5 font-display text-[.9rem] font-bold uppercase tracking-wide text-muted">{k}</dt>
                  <dd className="m-0 text-[1.05rem]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-2xl border border-line shadow-xl">
            <iframe
              title="Metro Movers location map"
              src="https://www.google.com/maps?q=-37.1865294,174.9916907&output=embed"
              className="block size-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
