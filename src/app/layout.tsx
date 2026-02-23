import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nakagiri Real Estate - Professional Real Estate in Los Angeles",
  description:
    "Professional real estate agent in Los Angeles specializing in buying and selling properties in the Greater Los Angeles Area. Over 30 years of experience.",
  icons: {
    icon: "/nakagiri-real-estate-logo-lg.png",
    apple: "/nakagiri-real-estate-logo-lg.png",
  },
  keywords: [
    "real estate agent Los Angeles",
    "real estate agent Greater Los Angeles Area",
    "real estate agent in Los Angeles",
    "real estate agent in Greater Los Angeles Area",
    "real estate agent in California",
    "real estate agent in California Greater Los Angeles Area",
    "real estate agent in California Greater Los Angeles Area",
  ],
  authors: [{ name: "Nakagiri Real Estate" }],
  creator: "Nakagiri Real Estate",
  publisher: "Nakagiri Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hairbygrace.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nakagiri Real Estate - Professional Real Estate in Los Angeles",
    description:
      "Professional real estate agent in Los Angeles specializing in buying and selling properties in the Greater Los Angeles Area. Over 30 years of experience.",
    url: "https://hairbygrace.com",
    siteName: "Nakagiri Real Estate",
    images: [
      {
        url: "/res-tivoli-front.jpg",
        width: 1200,
        height: 630,
        alt: "Nakagiri Real Estate - Professional Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nakagiri Real Estate - Professional Real Estate in Los Angeles",
    description:
      "Professional real estate agent in Los Angeles specializing in buying and selling properties in the Greater Los Angeles Area. Over 30 years of experience.",
    images: ["/res-tivoli-front.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
