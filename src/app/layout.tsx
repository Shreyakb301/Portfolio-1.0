import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans, Press_Start_2P, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shreya Komarabattini - Portfolio",
  description: "Computer Science Student and Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LKK0ZHCNC5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LKK0ZHCNC5');
          `}
        </Script>
      </head>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${pressStart2P.variable} ${spaceMono.variable} font-sans antialiased selection:bg-primary/20`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

