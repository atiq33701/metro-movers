import { housePosts } from "./house";
import { officePosts } from "./office";
import { longDistancePosts } from "./long-distance";
import { specialtyPosts } from "./specialty";
import { pricingPosts } from "./pricing";

// All blog posts, newest first. To add a post, add an object to one of the files in this folder.
export const posts = [...housePosts, ...officePosts, ...longDistancePosts, ...specialtyPosts, ...pricingPosts]
  .map((post) => {
    const text = [...post.intro, ...post.sections.flatMap((s) => [...s.p, ...(s.ul || [])]), post.closing].join(" ");
    return { ...post, readMins: Math.max(1, Math.round(text.split(/\s+/).length / 200)) };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
