import type { Metadata, Viewport } from "next";
import { Corben, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const googleSansFlex = localFont({
  src: "./fonts/google-sans-flex-latin.woff2",
  variable: "--font-google-sans-flex",
  display: "swap",
  weight: "1 1000",
  style: "normal",
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const corben = Corben({
  variable: "--font-corben",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "C208 Design",
    template: "%s | C208 Design",
  },
  description:
    "Branding, design, photography, and creative services for schools, organizations, and communities.",
  icons: {
    icon: {
      url: "/Favicon.svg?v=20260715",
      type: "image/svg+xml",
    },
    shortcut: "/Favicon.svg?v=20260715",
  },
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
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${geistMono.variable} ${corben.variable}`}
    >
      <body className="bg-[#f2eee9] text-[#111111] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
