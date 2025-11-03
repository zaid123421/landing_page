import "./globals.css";
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: "SweetSpot",
  description: "SweetSpot aims to deliver high-performing, high-quality, and efficient services for an exceptional user experience.",
  keywords: [
    "web development company",
    "mobile app development",
    "custom software solutions",
    "UI/UX design services",
    "cloud computing solutions",
    "chatbots and virtual assistants",
    "software development agency",
    "digital transformation",
    "tech solutions for businesses",
    "high-quality software development"
  ],
    robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
