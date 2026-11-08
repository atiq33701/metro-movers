# Metro Movers – Next.js + Tailwind site

All files are plain `.js` (no `.jsx`). Styling is Tailwind utility classes in the markup;
`app/globals.css` only holds the colour/font theme and a few tiny shared classes
(`wrap`, `section`, `eyebrow`, `stripe`, `btn`, `btn-primary`, `btn-dark`, `btn-outline`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| URL | File |
|---|---|
| `/` | `app/page.js` |
| `/Service` | `app/Service/page.js` |
| `/pricing` | `app/pricing/page.js` |
| `/Reviews` | `app/Reviews/page.js` |
| `/MovingTips` | `app/MovingTips/page.js` |
| `/house-moving` | `app/house-moving/page.js` |
| `/office-movers` | `app/office-movers/page.js` |
| `/long-distance-movers-nz` | `app/long-distance-movers-nz/page.js` |
| `/moving-services` | `app/moving-services/page.js` |
| `/rubbish-removal` | `app/rubbish-removal/page.js` |
| `/piano-movers` | `app/piano-movers/page.js` (new) |
| `/pool-table-movers` | `app/pool-table-movers/page.js` (new) |
| `/spa-pool-movers` | `app/spa-pool-movers/page.js` (new) |
| `/thank-you`, 404 | `app/thank-you/page.js`, `app/not-found.js` |

## Components (4 files)

- `components/Header.js` – sticky header, services dropdown, mobile menu
- `components/Quote.js` – quote popup form, its provider and the `QuoteButton`
- `components/Client.js` – `Carousel`, `ScrollButton`, `BackToTop`
- `components/Shared.js` – SEO helper `meta()`, JSON-LD helper, and `Landing` (the template used by the house, office,
  long-distance, moving-services, piano, pool table and spa pool pages — each page file holds its own content)

The footer lives in `app/layout.js`. Each page keeps its own text/data at the top of its file; there are no `data` or `lib` folders.

## Notes

1. **Images** – see `MISSING-ASSETS.txt` for placeholder images that still need real files in `public/img/`.
2. **Quote form** – posts to `app/api/quote/route.js`. Set `QUOTE_WEBHOOK_URL` (see `.env.example`) to forward submissions.
3. **Map** – keyless Google Maps embed of 118 Paparata Road, Bombay.
4. Google Analytics ID is read from `NEXT_PUBLIC_GA_ID`.
