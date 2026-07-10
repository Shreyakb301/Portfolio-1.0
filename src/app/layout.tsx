import type { Metadata, Viewport } from "next";
import { DM_Sans, Share_Tech_Mono, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shreya Komarabattini - Portfolio",
  description: "Computer Science Student and Developer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://moodle-game.onrender.com" />
        <link rel="dns-prefetch" href="https://moodle-game.onrender.com" />
        <link rel="preconnect" href="https://it-ticket-automation-system.onrender.com" />
        <link rel="dns-prefetch" href="https://it-ticket-automation-system.onrender.com" />
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
        className={`${dmSans.variable} ${shareTechMono.variable} ${vt323.variable} font-sans antialiased selection:bg-primary/20`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
