import Link from "next/link";

export const metadata = { title: "Page not found | Metro Movers" };

export default function NotFound() {
  return (
    <section className="py-[clamp(48px,9vw,120px)] text-center">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>That page has moved on</h1>
        <p className="mx-auto mb-7 mt-3 max-w-[52ch] text-[1.15rem] text-ink-3">
          We couldn&apos;t find what you were looking for, but we can still help with your move.
        </p>
        <Link href="/" className="btn btn-primary px-[30px] py-[17px] text-[1.08rem]">Back to home</Link>
      </div>
    </section>
  );
}
