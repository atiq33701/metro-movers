import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteButton } from "../../../components/Quote";
import { Ld, SITE, WHATSAPP, business, meta } from "../../../components/Shared";
import PostCard from "../PostCard";
import { formatDate, getPost, posts } from "../_posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  const m = meta(`${post.title} | Metro Movers`, post.description, `/blog/${post.slug}`, post.image);
  return {
    ...m,
    openGraph: { ...m.openGraph, type: "article", publishedTime: post.date, images: [{ url: post.image, alt: post.imageAlt }] },
  };
}

export default function Page({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  // Up to three related posts: same service first, then the newest others.
  const others = posts.filter((p) => p.slug !== post.slug);
  const related = [...others.filter((p) => p.service[0] === post.service[0]), ...others.filter((p) => p.service[0] !== post.service[0])].slice(0, 3);

  const url = `${SITE}/blog/${post.slug}`;
  const ld = [
    business,
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      image: SITE + post.image,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Metro Movers" },
      publisher: { "@type": "Organization", name: "Metro Movers", logo: { "@type": "ImageObject", url: SITE + "/img/logo.png" } },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <Ld data={ld} />

      <article>
        <header className="bg-white pb-8 pt-[clamp(28px,5vw,56px)]">
          <div className="wrap max-w-[820px]">
            <nav aria-label="Breadcrumb" className="mb-4 text-[.9rem] text-muted">
              <Link href="/" className="hover:text-orange-deep">Home</Link> /{" "}
              <Link href="/blog" className="hover:text-orange-deep">Blog</Link>
            </nav>
            <p className="eyebrow">{post.category}</p>
            <h1 className="text-[clamp(1.9rem,4vw,2.8rem)]">{post.title}</h1>
            <p className="mb-0 text-[.95rem] text-muted">
              By Metro Movers Team · {formatDate(post.date)} · {post.readMins} min read
            </p>
          </div>
        </header>

        <div className="wrap max-w-[960px] pt-8">
          <img
            width="960"
            height="540"
            alt={post.imageAlt}
            src={post.image}
            style={{ objectPosition: post.pos }}
            className="block aspect-[16/9] w-full rounded-2xl object-cover shadow-[0_10px_30px_rgba(0,0,0,.12)]"
          />
        </div>

        <div className="wrap max-w-[720px] py-[clamp(28px,5vw,56px)]">
          {post.intro.map((t) => (
            <p key={t} className="text-[1.12rem] text-ink-3">{t}</p>
          ))}

          {post.sections.map((s) => (
            <section key={s.h}>
              <h2 className="mt-9 text-[clamp(1.35rem,2.6vw,1.7rem)]">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="text-ink-3">{t}</p>
              ))}
              {s.ul && (
                <ul className="mb-4 list-disc space-y-1.5 pl-6 text-ink-3 marker:text-orange-deep">
                  {s.ul.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className="mt-9 text-[1.05rem] font-semibold">{post.closing}</p>

          <aside className="mt-8 rounded-2xl bg-ink p-6 text-white md:p-8">
            <h2 className="text-[1.5rem]">Need help with your move?</h2>
            <p className="text-muted-dark">
              Send your pickup and delivery details, preferred date and move requirements to Metro Movers. Learn more about our{" "}
              <Link href={post.service[0]} className="font-semibold text-orange underline">
                {post.service[1].toLowerCase()} service
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <QuoteButton className="btn btn-primary">Get A Quote</QuoteButton>
              <a className="btn btn-outline border-white text-white hover:bg-white hover:text-ink" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-white py-[clamp(36px,5vw,64px)]">
        <div className="wrap">
          <h2>More from the blog</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <p className="mb-0 mt-6">
            <Link href="/blog" className="font-semibold text-orange-deep underline">See all articles</Link>
          </p>
        </div>
      </section>
    </>
  );
}
