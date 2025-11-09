import Script from "next/script";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SweetSpot Tech",
  description:
    "SweetSpot aims to deliver high-performing, high-quality, and efficient services for an exceptional user experience.",
  keywords: [
    "sweetspot",
    "sweetspot tech",
    "tech solutions for businesses",
    "web development company",
    "mobile app development",
    "custom software solutions",
    "UI/UX design services",
    "cloud computing solutions",
    "digital transformation",
    "software development agency",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SweetSpot Tech",
        "url": "https://sweetspotech.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sweetspotech.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SweetSpot Tech",
        "url": "https://sweetspotech.com",
        "logo": "https://sweetspotech.com/favicon.ico"
      }
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Icon For google search engine */}
        <link
          rel="icon"
          href="/SweetSpot-logo-08.ico"
          sizes="16x16"
          type="image/x-icon"
        />
        {/* Structured Data for Navigation */}
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "name": "Home",
                  "url": "https://sweetspotech.com/#home",
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Services",
                  "url": "https://sweetspotech.com/#services",
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Technologies",
                  "url": "https://sweetspotech.com/#technologies",
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "About",
                  "url": "https://sweetspotech.com/#about",
                },
                {
                  "@type": "SiteNavigationElement",
                  "name": "Contact",
                  "url": "https://sweetspotech.com/#contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={raleway.className}>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HPJ6PT1DC1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HPJ6PT1DC1');
          `}
        </Script>
      </body>
    </html>
  );
}
