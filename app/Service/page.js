import Link from "next/link";
import { ScrollButton } from "../../components/Client";
import { Ld, business, meta } from "../../components/Shared";

export const metadata = meta(
  "Moving Services Bombay | Metro Movers",
  "Metro Movers provides house moving, office moving, long distance moving, piano, pool table and spa pool moving, and rubbish removal in Bombay, New Zealand.",
  "/Service"
);

const SERVICES = [
  ["House Moving", "Moving services for homes and households, with careful handling of your belongings from pick-up to drop-off.", "/house-moving", "/img/photos/2.jpeg"],
  ["Office Moving", "Office relocation services to help move workplace furniture, equipment and other items between locations.", "/office-movers", "/img/photos/3.jpeg"],
  ["Long Distance Moving", "Long distance moving services across New Zealand for customers relocating between cities and regions.", "/long-distance-movers-nz", "/img/photos/4.jpeg"],
  ["Piano Movers", "Upright, grand and digital pianos moved with careful planning around stairs, doorways and access.", "/piano-movers", "/img/photos/15.jpeg"],
  ["Pool Table Movers", "Heavy pool tables moved between homes, garages and venues, with access reviewed before moving day.", "/pool-table-movers", "/img/photos/17.jpeg"],
  ["Spa Pool Movers", "Spa pools moved between properties, with site access, preparation and timing discussed up front.", "/spa-pool-movers", "/img/photos/19.jpeg"],
  ["Rubbish Removal", "Collection of unwanted furniture, old appliances and garden waste, confirmed and priced before booking.", "/rubbish-removal", "/img/photos/20.jpeg"],
].map(([title, description, href, image], i) => ({
  id: `service-${i + 1}`,
  number: String(i + 1).padStart(2, "0"),
  title,
  description,
  href,
  image,
}));

export default function Page() {
  return (
    <>
      <Ld data={business} />

      <header className="pb-6 pt-[clamp(36px,6vw,72px)]">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1>Metro Moving Services</h1>
          <p className="max-w-[60ch] text-[1.15rem] text-ink-3">
            Moving services for homes, offices and long distance relocations across New Zealand, plus piano, pool table and spa pool moving and rubbish removal.
          </p>
        </div>
      </header>

      <div className="wrap">
        <nav aria-label="Service navigation" className="mb-[clamp(32px,5vw,56px)] mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ScrollButton
              key={s.id}
              target={s.id}
              className="flex cursor-pointer flex-col items-start gap-1.5 rounded-[10px] border border-line bg-white px-[18px] py-4 text-left transition hover:-translate-y-0.5 hover:border-orange hover:shadow-lg"
            >
              <span className="font-display text-[.85rem] font-extrabold tracking-wider text-orange-deep">{s.number}</span>
              <span className="font-display font-bold leading-tight">{s.title}</span>
            </ScrollButton>
          ))}
        </nav>
      </div>

      {SERVICES.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-20 border-t border-line py-[clamp(32px,5vw,56px)] ${i % 2 === 0 ? "" : "bg-white"}`}
        >
          <div className="wrap grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span className="mb-2 block font-display font-extrabold tracking-widest text-orange-deep">{s.number}</span>
              <h2>{s.title}</h2>
              <p className="mb-5 text-[1.05rem] text-ink-3">{s.description}</p>
              <Link href={s.href} className="btn btn-dark">Learn more</Link>
            </div>
            <div>
              <img
                width="720"
                alt={`${s.title} - Metro Movers`}
                loading="lazy"
                src={s.image}
                className="block aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
