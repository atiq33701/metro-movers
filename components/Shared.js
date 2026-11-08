
import Link from "next/link";
import { QuoteButton } from "./Quote";

export const SITE = "https://www.metromovers.co.nz";
export const WHATSAPP = "https://wa.me/64226871426";

// Page <head> data: title, description, canonical URL, Open Graph and Twitter.
export function meta(title, description, path, image = "/img/logo-og.png") {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Metro Movers",
      url: path,
      title,
      description,
      locale: "en_NZ",
      images: [{ url: image, width: 1200, height: 630, alt: "Metro Movers" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const address = {
  "@type": "PostalAddress",
  streetAddress: "118 Paparata Road",
  addressLocality: "Bombay",
  postalCode: "2675",
  addressCountry: "NZ",
};

export const business = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Metro Movers",
  telephone: "+64226871426",
  image: "/img/logo.png",
  logo: "/img/logo.png",
  address,
  geo: { "@type": "GeoCoordinates", latitude: -37.1865294, longitude: 174.9916907 },
  areaServed: [
    { "@type": "City", name: "Auckland" },
    { "@type": "Country", name: "New Zealand" },
  ],
  sameAs: ["https://www.instagram.com/metro_movers_ltd/"],
};

// Renders one or more JSON-LD (structured data) blocks.
export function Ld({ data }) {
  return [].concat(data).map((d, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
  ));
}

const link = "mt-3 inline-block font-semibold text-orange-deep underline";
const check =
  "relative border-b border-line py-2.5 pl-8 before:absolute before:left-1 before:font-bold before:text-orange-deep before:content-['✓']";

/**
 * Shared layout for every service page. Each page file passes its own content (d).
 * d = {
 *   eyebrow, title, lead, bullets[], image, imageAlt, cta2,
 *   trust?: [[big, small]],
 *   servicesTitle, services: [[title, text]],
 *   priceTitle, priceText, priceLink: [href, label], priceList[],
 *   stepsTitle, steps: [[title, text]],
 *   reviewsTitle, reviews: [[text, name, place]],
 *   faqTitle, faqs: [[question, answer]],
 *   areaTitle, areaText, chips[],
 *   ctaTitle, ctaText,
 *   serviceType, serviceName, serviceDescription, serviceArea
 * }
 */
export function Landing({ d }) {
  const ld = [
    business,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faqs.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: d.serviceType,
      name: d.serviceName,
      description: d.serviceDescription,
      provider: { "@type": "MovingCompany", name: "Metro Movers", telephone: "+64226871426", address },
      areaServed: { "@type": "City", name: d.serviceArea },
    },
  ];

  const buttons = (
    <>
      <QuoteButton className="btn btn-primary">Get a Quote</QuoteButton>
      <a className="btn btn-outline bg-white" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
        {d.cta2}
      </a>
    </>
  );

  return (
    <>
      <Ld data={ld} />

      <article>
        {/* Hero */}
        <header className="bg-white pb-6 pt-7 md:pb-8 md:pt-12">
          <div className="wrap grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="eyebrow">{d.eyebrow}</p>
              <h1 className="text-[clamp(1.9rem,4vw,2.8rem)]">{d.title}</h1>
              <p className="text-[1.1rem] text-ink-3">{d.lead}</p>
              <ul className="mb-6 mt-5 list-none p-0">
                {d.bullets.map((b) => (
                  <li key={b} className="relative py-1.5 pl-7 before:absolute before:left-1 before:top-3 before:size-3 before:rounded-full before:bg-orange before:content-['']">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">{buttons}</div>
            </div>
            <div className="max-md:order-first">
              <img
                width="720"
                height="480"
                alt={d.imageAlt}
                loading="eager"
                src={d.image}
                className="block w-full rounded-xl shadow-[0_10px_30px_rgba(0,0,0,.12)]"
              />
            </div>
          </div>
        </header>

        {/* Optional trust bar */}
        {d.trust && (
          <section className="bg-ink py-[22px] text-white">
            <div className="wrap grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              {d.trust.map(([big, small]) => (
                <div key={small}>
                  <strong className="block font-display text-2xl text-orange">{big}</strong>
                  <span className="text-[.85rem] text-muted-dark">{small}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Services */}
        <section className="section">
          <div className="wrap">
            <h2>{d.servicesTitle}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {d.services.map(([t, p]) => (
                <div key={t} className="rounded-[10px] border border-line bg-white p-[22px]">
                  <h3>{t}</h3>
                  <p className="m-0 text-ink-3">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section bg-paper-2">
          <div className="wrap grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2>{d.priceTitle}</h2>
              <p className="text-muted">{d.priceText}</p>
              <Link href={d.priceLink[0]} className={link}>{d.priceLink[1]}</Link>
            </div>
            <ul className="m-0 list-none p-0">
              {d.priceList.map((li) => (
                <li key={li} className={check}>{li}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="section">
          <div className="wrap">
            <h2>{d.stepsTitle}</h2>
            <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {d.steps.map(([t, p], i) => (
                <li key={t} className="flex items-start gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange font-extrabold text-black">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{t}</h3>
                    <p className="m-0 text-[.95rem] text-ink-3">{p}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section className="section bg-ink text-white">
          <div className="wrap">
            <h2>{d.reviewsTitle}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {d.reviews.map(([text, name, place]) => (
                <blockquote key={name} className="m-0 rounded-[10px] bg-ink-2 p-[22px]">
                  <div className="mb-2 tracking-[2px] text-orange">★★★★★</div>
                  <p className="mb-3 text-[#eee]">{text}</p>
                  <footer className="text-[.9rem] text-muted-dark">
                    <strong className="text-white">{name}</strong>, {place}
                  </footer>
                </blockquote>
              ))}
            </div>
            <Link href="/Reviews" className={`${link} text-orange!`}>Read all reviews</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="wrap max-w-[820px]">
            <h2>{d.faqTitle}</h2>
            {d.faqs.map(([q, a]) => (
              <details key={q} className="group border-b border-line py-1.5">
                <summary className="relative cursor-pointer list-none py-3 pr-8 font-semibold after:absolute after:right-1 after:top-2 after:text-2xl after:text-orange-deep after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <p className="mb-3 text-ink-3">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Areas / tags */}
        <section className="section bg-paper-2">
          <div className="wrap">
            <h2>{d.areaTitle}</h2>
            <p className="text-muted">{d.areaText}</p>
            <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
              {d.chips.map((c) => (
                <li key={c} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[.9rem]">{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final call to action */}
        <section className="section bg-white text-center">
          <div className="wrap max-w-[820px]">
            <h2>{d.ctaTitle}</h2>
            <p className="mb-6 text-[1.05rem] text-ink-3">{d.ctaText}</p>
            <div className="flex flex-wrap justify-center gap-3">{buttons}</div>
          </div>
        </section>
      </article>
    </>
  );
}
