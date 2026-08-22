import type { Metadata, Viewport } from "next";
import { DM_Sans, Share_Tech_Mono, VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import { AnalyticsTracker } from "@/components/analytics-tracker";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://moodl3.com" />
        <link rel="dns-prefetch" href="https://moodl3.com" />
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
            if (['shreyakb.com', 'www.shreyakb.com'].includes(window.location.hostname.toLowerCase())) {
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);};
              window.gtag('js', new Date());

              window.gtag('config', 'G-LKK0ZHCNC5');
            }
          `}
        </Script>
      </head>
      <body
        className={`${dmSans.variable} ${shareTechMono.variable} ${vt323.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        {children}
        <AnalyticsTracker />
        <Analytics />
      </body>
    </html>
  );
}
