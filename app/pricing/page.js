
import { QuoteButton } from "../../components/Quote";
import { Ld, WHATSAPP, business, meta } from "../../components/Shared";

export const metadata = meta(
  "Moving Company Prices Auckland | Metro Mover",
  "Learn how Metro Mover quotes for house, office and long distance moves in Auckland. Get a moving quote based on your addresses, move size, access and requirements.",
  "/pricing",
  "/img/photos/15.jpeg"
);

const FAQS = [
  ["Is there a minimum charge?", "Your quote will confirm the applicable minimum booking or charge for your move."],
  ["What information do you need for a quote?", "Provide your pickup and delivery addresses, preferred date, approximate move size and details of any large, heavy or difficult-to-access items."],
  ["Why can moving prices vary?", "Moving requirements vary between properties and jobs. The amount being moved, distance, access, stairs, parking and special items can all affect the quote."],
  ["Can I get an exact quote?", "Yes. Send Metro Mover your move details and the team can review the requirements and provide a quote."],
  ["Do you provide long distance moving quotes?", "Yes. Provide the pickup location, destination, move size and preferred date when requesting a long distance moving quote."],
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const check =
  "relative border-b border-line py-2.5 pl-[30px] before:absolute before:left-0.5 before:font-bold before:text-orange-deep before:content-['✓']";

function Buttons() {
  return (
    <>
      <QuoteButton className="btn btn-primary">Get a Quote</QuoteButton>
      <a className="btn btn-outline bg-white" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
        WhatsApp +64 22 687 1426
      </a>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Ld data={[business, faqLd]} />

      <article>
        <header className="pb-8 pt-12">
          <div className="wrap max-w-[820px] text-center">
            <h1 className="text-[clamp(1.9rem,4vw,2.8rem)]">Moving Prices in Auckland: How Our Quotes Work</h1>
            <p className="text-[1.1rem] text-ink-3">
              Moving costs depend on the size of your move, the distance between addresses, access and the items being moved. Send us your details and we can provide a quote for your move.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3"><Buttons /></div>
          </div>
        </header>

        <section className="py-12">
          <div className="wrap grid gap-12 md:grid-cols-2">
            <div>
              <div className="flex flex-col gap-1 self-start rounded-2xl bg-ink p-7 text-white">
                <span className="text-[.85rem] uppercase tracking-widest text-muted-dark">Moving quote</span>
                <span className="font-display text-[2.9rem] font-extrabold leading-tight text-orange">Get a custom quote</span>
                <span className="text-muted-dark">based on your move</span>
                <p className="mb-0 mt-2.5 text-muted-dark">
                  Every move is different. Your quote can take into account the amount being moved, pickup and delivery locations, access, stairs, parking, large or heavy items and other requirements.
                </p>
              </div>
              <img width="720" alt="Metro Mover moving service in Auckland" loading="lazy" src="/img/photos/14.jpeg" className="mt-[18px] block w-full rounded-xl" />
            </div>

            <div>
              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">How we quote</h2>
              <ol className="list-decimal pl-[22px]">
                {[
                  "Tell us your pickup and delivery addresses, preferred date and approximate move size",
                  "Let us know about large or heavy items, stairs, lifts, parking and access at either location",
                  "We review the requirements and prepare a quote for your move",
                  "Once the details are confirmed, you can arrange your move with Metro Mover",
                ].map((t) => (
                  <li key={t} className="mb-2.5">{t}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-paper-2 py-12">
          <div className="wrap grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">What we consider when quoting</h2>
              <ul className="m-0 list-none p-0">
                {[
                  "Size and volume of the move",
                  "Pickup and delivery locations",
                  "Stairs, lifts and property access",
                  "Parking and distance from the property to the vehicle",
                  "Large, heavy or difficult-to-handle items",
                  "Any additional requirements discussed before the move",
                ].map((t) => (
                  <li key={t} className={check}>{t}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">Additional requirements</h2>
              <dl>
                {[
                  ["Large or heavy items", "Let us know about pianos, safes, large furniture or other unusually heavy items before the move."],
                  ["Stairs and difficult access", "Tell us about stairs, narrow access, lifts and parking so the requirements can be considered in your quote."],
                  ["Packing requirements", "If you need help preparing items for your move, mention this when requesting your quote."],
                  ["Long distance moves", "Provide both locations and your move details so the long distance requirements can be considered."],
                ].map(([dt, dd]) => (
                  <div key={dt}>
                    <dt className="mt-3 font-bold">{dt}</dt>
                    <dd className="m-0 mt-1 text-ink-3">{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="wrap grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">What affects the final price</h2>
              <ol className="list-decimal pl-[22px] text-ink-3">
                {[
                  "How much you have: the number of rooms, boxes and furniture items",
                  "Access: lifts, stairs, driveway parking and the distance from the property to the vehicle",
                  "Distance between the pickup and delivery addresses",
                  "Special requirements such as large, heavy or difficult-to-move items",
                ].map((t) => (
                  <li key={t} className="mb-2.5">{t}</li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">Why request a quote?</h2>
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    ["Small apartment move", "Quote based on requirements"],
                    ["House move", "Quote based on move size"],
                    ["Long distance move", "Quote based on route"],
                  ].map(([a, b]) => (
                    <tr key={a}>
                      <td className="border-b border-line px-2 py-2.5">{a}</td>
                      <td className="whitespace-nowrap border-b border-line px-2 py-2.5 text-right text-muted">{b}</td>
                      <td className="whitespace-nowrap border-b border-line py-2.5 pl-3.5 pr-2 text-right font-bold">Custom quote</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[.9rem] text-muted">
                The final price depends on the details of your particular move. Contact Metro Mover with your requirements for a quote.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper-2 py-12">
          <div className="wrap max-w-[820px]">
            <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">Pricing questions</h2>
            {FAQS.map(([q, a]) => (
              <details key={q} className="group border-b border-line py-1.5">
                <summary className="relative cursor-pointer list-none py-3 pr-8 font-semibold after:absolute after:right-1 after:top-2 after:text-2xl after:text-orange-deep after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
                  {q}
                </summary>
                <p className="mb-3 text-ink-3">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="wrap max-w-[820px] text-center">
            <h2 className="text-[clamp(1.4rem,3vw,1.9rem)]">Get your moving quote</h2>
            <p className="text-[1.1rem] text-ink-3">
              Send your pickup and delivery addresses, move details and preferred date. Metro Mover can then prepare a quote based on your requirements.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3"><Buttons /></div>
          </div>
        </section>
      </article>
    </>
  );
}
