import Link from "next/link";

export const metadata = {
  title: "Thank you | Metro Movers",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="py-[clamp(48px,9vw,120px)] text-center">
      <div className="wrap">
        <p className="eyebrow">Quote request received</p>
        <h1>Thanks, we&apos;ll be in touch shortly</h1>
        <p className="mx-auto mb-7 mt-3 max-w-[52ch] text-[1.15rem] text-ink-3">
          Your quote request has been received. If your move is urgent, call us on{" "}
          <a href="tel:+64226871426" className="font-semibold underline">+64 22 687 1426</a>.
        </p>
        <Link href="/" className="btn btn-primary px-[30px] py-[17px] text-[1.08rem]">Back to home</Link>
      </div>
    </section>
  );
}
