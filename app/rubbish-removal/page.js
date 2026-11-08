import Link from "next/link";
import { QuoteButton } from "../../components/Quote";
import { Ld, WHATSAPP, business, meta } from "../../components/Shared";

export const metadata = meta(
  "Rubbish Removal Bombay | Furniture & Garden Waste | Metro Movers",
  "Need unwanted furniture, old appliances or garden waste collected in Bombay? Tell Metro Movers what needs removing and ask for a written quote.",
  "/rubbish-removal",
  "/img/photos/2.jpeg"
);

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Rubbish removal",
  name: "Rubbish removal in Bombay",
  description:
    "Need unwanted furniture, old appliances or garden waste collected in Bombay? Tell Metro Movers what needs removing and ask for a written quote.",
  provider: { ...business, "@context": undefined },
  areaServed: { "@type": "City", name: "Bombay" },
};

const ITEMS = [
  ["Unwanted furniture", "Sofas, tables, chairs and other household furniture. Tell us the number and size of the items."],
  ["Old appliances", "Describe the appliances, their condition and whether they are disconnected and ready for collection."],
  ["Garden waste", "Tell us what the waste contains, how much there is and whether it is bagged or loose."],
];

const STEPS = [
  ["Describe your items", "Send the collection address, item list and any access details. We may ask for photos to confirm the load."],
  ["Confirm the details", "We confirm what can be taken, the price and an available collection time with you."],
  ["Arrange collection", "Once agreed, the team collects the confirmed items at the arranged time."],
];

const FAQS = [
  ["Can I ask about a single item?", "Yes. Tell us what the item is and your collection address, and we'll confirm availability and pricing."],
  ["Can you collect items from inside the house?", "Tell us where the items are, including stairs, lifts and narrow access. We need these details to confirm the collection and price."],
  ["Do you take every type of waste?", "No item should be assumed accepted without confirmation. Describe the materials, especially building waste, hazardous materials or very heavy items, before booking."],
  ["What if I need furniture delivered to another address?", "That is a furniture-moving enquiry rather than rubbish removal. Use our house-moving page or call to explain the pickup and delivery addresses."],
];

function Buttons() {
  return (
    <div className="flex flex-wrap gap-3 max-[560px]:flex-col">
      <QuoteButton className="btn btn-primary">Get a Quote</QuoteButton>
      <a className="btn btn-outline bg-white" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
        Call +64226871426
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Ld data={[business, serviceLd]} />

      <article>
        <header className="wrap grid items-center gap-7 pb-12 pt-7 md:grid-cols-[1.1fr_1fr] md:gap-12 md:pt-11">
          <div>
            <p className="eyebrow">Bombay based · Serving Bombay</p>
            <h1 className="max-w-[13ch] max-md:max-w-none max-[560px]:text-[2.1rem]">Rubbish removal in Bombay</h1>
            <p className="text-[1.15rem] text-ink-3 max-[560px]:text-base">
              Clearing out unwanted furniture, old appliances or garden waste? Tell us what needs collecting and where it is. We&apos;ll confirm what we can take and the price before booking.
            </p>
            <Buttons />
          </div>

          <figure className="m-0">
            <img
              width="720"
              height="480"
              alt="Metro Movers moving service in Bombay"
              loading="eager"
              src="/img/photos/metro rubbish.png"
              className="block aspect-3/2 w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2.5 text-[.85rem] text-muted">
              Metro Movers moving and collection services in Bombay
            </figcaption>
          </figure>
        </header>

        <section className="section bg-paper-2">
          <div className="wrap">
            <h2>What needs clearing?</h2>
            <div className="mt-7 grid gap-7 md:grid-cols-3">
              {ITEMS.map(([t, p]) => (
                <div key={t} className="border-t-[3px] border-orange pt-5">
                  <h3>{t}</h3>
                  <p className="m-0 text-muted">{p}</p>
                </div>
              ))}
            </div>
            <p className="mb-0 mt-7 border-t border-line pt-5 text-[.95rem]">
              Building waste, chemicals, asbestos, liquids and unusually heavy items require confirmation. Do not assume they can be collected.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap max-w-205">
            <p className="eyebrow">Pricing</p>
            <h2>A quote for your collection, not a house-moving rate</h2>
            <p className="text-[1.15rem] text-ink-3">
              The price depends on the items and volume, collection address, stairs and access, and any applicable disposal charges. Describe these in your enquiry so we can confirm the total and what it includes before you book.
            </p>
            <QuoteButton className="btn btn-primary">Get a Quote</QuoteButton>
          </div>
        </section>

        <section className="section bg-ink text-white">
          <div className="wrap">
            <h2>From enquiry to collection</h2>
            <ol className="mb-0 mt-7 grid list-none gap-6 p-0 md:grid-cols-3 md:gap-7">
              {STEPS.map(([t, p], i) => (
                <li key={t}>
                  <span aria-hidden="true" className="mb-3 block font-display text-[2rem] text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{t}</h3>
                  <p className="m-0 text-muted-dark">{p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="wrap max-w-205">
            <h2>Before you book</h2>
            {FAQS.map(([q, a]) => (
              <details key={q} className="border-b border-line py-5">
                <summary className="cursor-pointer font-bold">{q}</summary>
                <p className="mb-0 mt-3.5 text-muted">{a}</p>
              </details>
            ))}
            <Link href="/house-moving" className="mt-6 inline-block underline underline-offset-4">
              Need furniture moved instead?
            </Link>
          </div>
        </section>

        <section className="section bg-paper-2">
          <div className="wrap max-w-205">
            <h2>Tell us what you want removed</h2>
            <p>Bombay based and serving all of Bombay. Send the collection address and item details to get started.</p>
            <Buttons />
          </div>
        </section>
      </article>
    </>
  );
}
