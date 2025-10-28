import "./globals.css";
import localFont from 'next/font/local'

const beInFont = localFont({
  src: '../public/fonts/bein-normal.ttf',
  variable: "--font-bein",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${beInFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
