
import { Ld, business, meta } from "../../components/Shared";

export const metadata = meta(
  "Customer Reviews | Metro Mover Auckland",
  "Read customer reviews and feedback about Metro Mover moving and relocation services in Auckland, New Zealand.",
  "/Reviews",
  "/img/photos/2.jpeg"
);

const GOOGLE_URL =
  "https://www.google.com/maps/place/Metro+Movers/@-37.1865294,174.9916907,556m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d72ab370457f385:0xceeeb0f8c6ec2a25!8m2!3d-37.1865294!4d174.9916907!16s%2Fg%2F11p1g5s8r7";

const REVIEWS = [
  {
    name: "Chris",
    location: "Auckland",
    title: "2 bedroom apartment move",
    text: "Very professional service. We had to delay due to settlement delays so they did another job first. This was a more expensive quote, but the communication and customisation was superior so it was worth it to pay a little more. Moving is stressful enough without having mover surprises, so I recommend choosing Metro Movers.",
    images: ["/img/photos/2.jpeg", "/img/photos/3.jpeg"],
    response:
      "Thank you, Chris, for acknowledging our work. We hope to have the opportunity to serve you again next time!",
  },
  {
    name: "Daniel",
    location: "Auckland",
    title: "Storage move",
    text: "The guys were legends! Bench top was far heavier than I was told, this wasn't a problem, they strapped on their weight belts and got it done. They even wanted to sweep up!",
    images: ["/img/photos/4.jpeg"],
    response:
      "Thank you, Daniel, for your feedback. We appreciate your recognition and hope to serve you again next time.",
  },
  {
    name: "Fumi",
    location: "Auckland",
    title: "2 bedroom apartment move",
    text: "Extremely efficient bunch of guys. Had our 2 bedroom apartment moved swiftly. Awesome communication and customer service.",
    images: ["/img/photos/6.jpeg", "/img/photos/7.jpeg"],
    response:
      "Thank you very much for your trust. We look forward to serving you next time!",
  },
  {
    name: "Edwin",
    location: "Auckland",
    title: "2 bedroom house move",
    text: "We moved into Mt Wellington from Parnell. Metro Movers' Team is fast, efficient, productive, and moved all of our furniture, etc. carefully and quickly. Great team effort. Best moving experience so far in Auckland. No complaints. Highly recommended!",
    images: [
      "/img/photos/8.jpeg",
      "/img/photos/9.jpeg",
      "/img/photos/10.jpeg",
    ],
    response:
      "Thank you for your review. We appreciate your feedback and are pleased that you were happy with the moving service.",
  },
  {
    name: "Ethan",
    location: "Auckland",
    title: "3 bedroom house move",
    text: "Vincent and his team were great! Very efficient and took extra care with everything. They wrapped drawers and such with cling wrap and had blankets for the more delicate things. Would definitely recommend and will use again!",
    images: ["/img/photos/11.jpeg", "/img/photos/12.jpeg"],
    response:
      "Thank you, Ethan, for your feedback and for recognising the care taken during your move. We appreciate your support.",
  },
  {
    name: "Brendon",
    location: "Auckland",
    title: "Storage move",
    text: "Awesome guys, very efficient. Couldn't be happier with how the move went. Thanks very much.",
    images: ["/img/photos/13.jpeg"],
    response:
      "Thank you very much for your feedback, Brendon. We appreciate you choosing Metro Movers and wish you all the best in your new home.",
  },
  {
    name: "McKenzie",
    location: "Auckland",
    title: "1 bedroom apartment move",
    text: "The guys were amazing! Clear communication, happy to adjust the booking for me and got everything where it needed to be with no problems. Highly recommend, they made it super easy!",
    images: ["/img/photos/14.jpeg", "/img/photos/15.jpeg"],
    response:
      "Thank you very much for using our service. We appreciate your kind feedback and hope to serve you again in the future.",
  },
];

const Stars = () => <span aria-hidden="true">★★★★★</span>;

export default function Page() {
  return (
    <>
      <Ld data={business} />

      <div className="wrap pb-16 pt-[clamp(36px,6vw,72px)]">
        <h1 className="mb-5 text-center">Customer Reviews</h1>

        <div className="mb-[clamp(28px,4vw,48px)] flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3.5 rounded-[28px] border border-line bg-white px-[22px] py-2.5 shadow-xl">
            <div className="font-semibold text-muted">What Our Customers Say</div>
            <div className="text-[1.1rem] text-[#f4b400]"><Stars /></div>
            <p className="m-0 font-semibold text-muted">Customer feedback about Metro Mover</p>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-semibold underline underline-offset-[3px] hover:text-orange"
            >
              View Metro Mover on Google →
            </a>
          </div>
        </div>

        <div className="grid gap-[22px] md:grid-cols-2">
          {REVIEWS.map((r) => (
            <div key={r.name} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="m-0 text-[1.1rem]">{r.name}</h3>
                  <p className="m-0 text-[.9rem] text-muted">{r.location}</p>
                </div>
                <div className="text-orange"><Stars /></div>
              </div>

              <div>
                <h4 className="mb-1.5 text-[.85rem] font-bold uppercase tracking-wider text-orange-deep">{r.title}</h4>
                <p className="m-0 text-ink-3">{r.text}</p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2">
                {r.images.map((src) => (
                  <div key={src} className="aspect-square overflow-hidden rounded-lg bg-paper-2">
                    <img alt={`${r.title} - Metro Mover`} loading="lazy" src={src} className="block size-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="border-t border-line pt-3">
                <div className="mt-2 rounded-md border-l-4 border-orange bg-paper-2 px-3.5 py-3">
                  <h4 className="mb-1 text-[.85rem] font-bold text-orange-deep">Metro Mover Reply:</h4>
                  <p className="m-0 text-[.95rem] text-ink-3">{r.response}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-4 mt-12 max-w-[640px] rounded-2xl border border-line bg-white px-7 py-8 text-center">
          <h2 className="mb-2">Moved with us recently?</h2>
          <p className="mb-[18px] text-muted">
            Share your experience on Google and help other customers learn more about Metro Mover.
          </p>
          <a className="btn btn-primary" href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
            Leave a Review on Google
          </a>
        </div>
      </div>
    </>
  );
}
