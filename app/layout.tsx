import type { Metadata } from "next";
import { Corben, Geist_Mono, Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
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
