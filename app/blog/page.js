import Link from "next/link";
import { QuoteButton } from "../../components/Quote";
import { Ld, WHATSAPP, business, meta } from "../../components/Shared";
import PostCard from "./PostCard";
import { formatDate, posts } from "./_posts";

export const metadata = meta(
  "Moving Blog | Tips & Guides for Auckland and New Zealand | Metro Movers",
  "Moving guides from Metro Movers: house moving, office relocation, long distance moves, piano, pool table and spa pool moving, plus advice on moving prices and quotes.",
  "/blog",
  "/img/photos/2.png"
);

export default function Page() {
  const [latest, ...rest] = posts;

  return (
    <>
      <Ld data={business} />

      <header className="pb-6 pt-[clamp(36px,6vw,72px)]">
        <div className="wrap">
          <p className="eyebrow">Metro Movers blog</p>
          <h1>Moving Guides &amp; Tips</h1>
          <p className="max-w-[60ch] text-[1.15rem] text-ink-3">
            Practical advice on house moving, office relocation, long distance moves, and moving pianos, pool tables and spa pools in Auckland and across New Zealand.
          </p>
        </div>
      </header>

      {/* Latest post */}
      <section className="pb-[clamp(28px,4vw,48px)]">
        <div className="wrap">
          <article className="grid overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-[1.1fr_1fr]">
            <Link href={`/blog/${latest.slug}`} className="block aspect-[16/10] bg-paper-2 md:aspect-auto" tabIndex={-1} aria-hidden="true">
              <img
                width="800"
                height="500"
                alt={latest.imageAlt}
                src={latest.image}
                style={{ objectPosition: latest.pos }}
                className="size-full object-cover"
              />
            </Link>
            <div className="flex flex-col justify-center p-6 md:p-9">
              <p className="eyebrow">Latest · {latest.category}</p>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)]">
                <Link href={`/blog/${latest.slug}`} className="hover:text-orange-deep">{latest.title}</Link>
              </h2>
              <p className="text-ink-3">{latest.excerpt}</p>
              <p className="mb-5 text-[.88rem] text-muted">
                {formatDate(latest.date)} · {latest.readMins} min read
              </p>
              <div>
                <Link href={`/blog/${latest.slug}`} className="btn btn-dark">Read the guide</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* All other posts */}
      <section className="bg-white py-[clamp(36px,5vw,64px)]">
        <div className="wrap">
          <h2>All articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-[clamp(40px,6vw,64px)] text-white">
        <div className="wrap max-w-[820px] text-center">
          <h2>Planning a move in Auckland?</h2>
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
