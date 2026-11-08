import { QuoteButton } from "../../components/Quote";
import { Ld, WHATSAPP, business, meta } from "../../components/Shared";

export const metadata = meta(
  "Moving Tips & Checklist | Metro Movers Bombay",
  "Practical moving tips for customers in Bombay, including packing, furniture preparation, labelling, access and moving-day planning.",
  "/MovingTips",
  "/img/photos/2.jpeg"
);

const GROUPS = [
  [
    "Pre-Moving Tips for Customers",
    [
      ["Choose the Right Moving Service", "Before booking, check what your move involves, including the number of rooms, pickup and delivery locations, access, stairs and any large or fragile items that need extra attention."],
      ["Book Your Move in Advance", "Arrange your moving date as early as possible, especially if you are working around a settlement date, lease end date, office relocation or another fixed deadline."],
      ["Plan Access and Parking", "Check the access at both properties before moving day. Think about driveways, stairs, lifts, narrow entrances and where the moving vehicle can safely park."],
    ],
  ],
  [
    "Moving Preparation Guide",
    [
      ["Start Packing Early", "Begin with items you do not use every day. Pack similar belongings together and use suitable boxes and protective materials for fragile items."],
      ["Prepare Your Furniture", "Empty drawers and cabinets before moving. If furniture needs to be disassembled, keep screws and small parts together in a clearly labelled bag."],
      ["Label Your Boxes", "Clearly label boxes with their contents and destination room. Keep fragile items clearly identified so they can be handled appropriately."],
      ["Measure Large Items", "Measure large furniture and check doorways, stairways, lifts and other access points at the new property before moving day."],
      ["Keep Important Items Separate", "Keep documents, keys, medication, chargers, valuables and other essential items where you can access them easily during the move."],
      ["Prepare for Moving Day", "Clear walkways, secure loose items and make sure the team can access the rooms and items that need to be moved. Good preparation can help the move run more smoothly."],
    ],
  ],
];

export default function Page() {
  return (
    <>
      <Ld data={business} />

      <header className="pb-6 pt-[clamp(36px,6vw,72px)]">
        <div className="wrap">
          <p className="eyebrow">Moving tips</p>
          <h1>Moving Guide</h1>
          <p className="max-w-[60ch] text-[1.15rem] text-ink-3">
            Simple preparation tips to help make your moving day more organised, efficient and easier to manage.
          </p>
        </div>
      </header>

      {GROUPS.map(([title, tips], g) => (
        <section key={title} className={`py-[clamp(32px,5vw,56px)] ${g === 0 ? "bg-white" : ""}`}>
          <div className="wrap">
            <h2>{title}</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tips.map(([t, p], i) => (
                <article key={t} className={`relative rounded-2xl border border-line p-6 ${g === 0 ? "bg-paper" : "bg-white"}`}>
                  <span className="mb-2.5 block font-display text-[.85rem] font-extrabold tracking-widest text-orange-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{t}</h3>
                  <p className="m-0 text-muted">{p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-[clamp(40px,6vw,64px)] text-white">
        <div className="wrap max-w-[820px] text-center">
          <h2>Ready to plan your move?</h2>
          <p className="text-[1.15rem] text-muted-dark">
            Send your pickup and delivery details, preferred date and move requirements to get started with Metro Movers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <QuoteButton className="btn btn-primary">Get A Quote</QuoteButton>
            <a className="btn btn-outline border-white text-white hover:bg-white hover:text-ink" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
