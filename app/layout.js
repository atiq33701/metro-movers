
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Header from "../components/Header";
import { BackToTop } from "../components/Client";
import { QuoteProvider } from "../components/Quote";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-H6X4F7C6L5";

export const metadata = {
  metadataBase: new URL("https://www.metromovers.co.nz"),
  title: "Metro Movers | Moving Services in Auckland",
  description: "Metro Movers provides moving and relocation services across Auckland, New Zealand.",
  applicationName: "Metro Movers",
  icons: {
    icon: [
      { url: "/img/favicon1.png", sizes: "32x32", type: "image/png" },
    ]
  },
};

export const viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

const SERVICE_LINKS = [
  ["/house-moving", "House Moving"],
  ["/office-movers", "Office Moving"],
  ["/long-distance-movers-nz", "Long Distance"],
  ["/moving-services", "Moving Services"],
  ["/piano-movers", "Piano Movers"],
  ["/pool-table-movers", "Pool Table Movers"],
  ["/spa-pool-movers", "Spa Pool Movers"],
  ["/rubbish-removal", "Rubbish Removal"],
  ["/pricing", "Pricing"],
  ["/Service", "All Services"],
];

const footerLink = "hover:text-orange";
const heading = "mb-3.5 text-[.85rem] uppercase tracking-[.12em] text-white";

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>

      <body>
        <QuoteProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">{children}</main>

            <BackToTop />

            <footer className="bg-ink text-muted-dark">
              <div className="h-2 stripe" aria-hidden="true" />

              <div className="wrap grid gap-7 pb-10 pt-10 min-[800px]:grid-cols-[1.4fr_1fr_1fr] min-[800px]:gap-10 min-[800px]:pt-14">
                <div>
                  <img
                    width="230"
                    alt="Metro Movers"
                    src="/img/logo.png"
                    className="mb-4 block h-16 w-auto max-w-full rounded-md bg-white object-contain p-0.75"
                  />
                  <p className="max-w-[36ch]">
                    Metro Movers provides moving and relocation services across Auckland, New Zealand.
                  </p>
                  <address className="not-italic leading-normal text-white">
                   Auckland, New Zealand
                   
                  </address>
                </div>

                <div>
                  <h3 className={heading}>Services</h3>
                  <ul className="m-0 list-none p-0 text-white">
                    {SERVICE_LINKS.map(([href, label]) => (
                      <li key={href} className="py-1.25">
                        <Link href={href} className={footerLink}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={heading}>Contact</h3>
                  <ul className="m-0 list-none p-0 text-white">
                    <li className="py-1.25">
                      <a href="https://wa.me/64226871426" target="_blank" rel="noopener noreferrer" className={footerLink}>
                        +64 22 687 1426
                      </a>
                    </li>
                    <li className="py-1.25">Serving Auckland, New Zealand</li>
                    <li className="py-1.25">Based at 118 Paparata Road, Bombay 2675</li>
                  </ul>

                  <div className="mt-4.5 flex gap-2.5">
                    <a
                      href="https://www.instagram.com/metro_movers_ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Metro Movers on Instagram"
                      className="inline-flex size-10 items-center justify-center rounded-full border border-ink-3 bg-ink-2 transition-colors hover:bg-ink-3"
                    >
                      <FaInstagram className="text-red-400" size={22} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="wrap border-t border-ink-3 py-4.5 text-[.9rem]">
                © 2026 Metro Movers. All rights reserved.
              </div>
            </footer>
          </div>
        </QuoteProvider>

        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
