import { posts } from "./blog/_posts";

export default function sitemap() {
  const base = "https://www.metromovers.co.nz";
  const pages = [
    "/", "/Service", "/pricing", "/Reviews", "/MovingTips",
    "/house-moving", "/office-movers", "/long-distance-movers-nz", "/moving-services", "/piano-movers", "/pool-table-movers", "/spa-pool-movers",
    "/blog", ...posts.map((post) => `/blog/${post.slug}`),
  ];
  return pages.map((p) => ({ url: base + (p === "/" ? "" : p), lastModified: new Date() }));
}
