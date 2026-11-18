import Link from "next/link";
import { formatDate } from "./_posts";

// One blog post card, used on the blog page and in "More from the blog".
export default function PostCard({ post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden bg-paper-2" tabIndex={-1} aria-hidden="true">
        <img
          width="640"
          height="400"
          alt=""
          loading="lazy"
          src={post.image}
          style={{ objectPosition: post.pos }}
          className="size-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow mb-1.5">{post.category}</p>
        <h3 className="text-[1.2rem] leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-orange-deep">{post.title}</Link>
        </h3>
        <p className="mb-4 text-[.97rem] text-muted">{post.excerpt}</p>
        <p className="mb-0 mt-auto text-[.85rem] text-muted">
          {formatDate(post.date)} · {post.readMins} min read
        </p>
      </div>
    </article>
  );
}
