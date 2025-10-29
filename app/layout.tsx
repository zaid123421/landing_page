import "./globals.css";
import localFont from 'next/font/local'

import { Raleway } from 'next/font/google'

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body lang="en" className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
