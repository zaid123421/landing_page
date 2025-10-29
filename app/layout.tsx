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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body lang="en" className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
