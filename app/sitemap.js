export default function sitemap() {
  const base = "https://www.metromovers.co.nz";
  const pages = [
    "/", "/Service", "/pricing", "/Reviews", "/MovingTips",
    "/house-moving", "/office-movers", "/long-distance-movers-nz", "/moving-services",
    "/rubbish-removal", "/piano-movers", "/pool-table-movers", "/spa-pool-movers",
  ];
  return pages.map((p) => ({ url: base + (p === "/" ? "" : p), lastModified: new Date() }));
}
