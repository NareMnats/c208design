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
  metadataBase: new URL("https://c208.design"),
  title: {
    default: "C208 Design | Graphic Design for Schools & Communities",
    template: "%s | C208 Design",
  },
  description:
    "Educator-led branding, graphic design, print and digital design, and web design for schools and community organizations across Los Angeles County and Orange County.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://c208.design",
    siteName: "C208 Design",
    title: "C208 Design | Graphic Design for Schools & Communities",
    description:
      "Educator-led branding, graphic design, print and digital design, and web design for schools and community organizations across Los Angeles County and Orange County.",
    images: [
      {
        url: "/hero-poster.png",
        width: 3456,
        height: 1938,
        alt: "C208 Design portfolio work for schools and community organizations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C208 Design | Graphic Design for Schools & Communities",
    description:
      "Educator-led branding, graphic design, and web design for schools and community organizations across Los Angeles County and Orange County.",
    images: ["/hero-poster.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: {
      url: "/Favicon.svg?v=20260715",
      type: "image/svg+xml",
    },
    shortcut: "/Favicon.svg?v=20260715",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://c208.design/#organization",
  name: "C208 Design",
  url: "https://c208.design",
  logo: "https://c208.design/c208-logo-blackcyan.png",
  image: "https://c208.design/hero-poster.png",
  email: "nare@c208.design",
  description:
    "An educator-led branding and graphic design studio serving schools, public organizations, nonprofits, and community-focused businesses across Los Angeles County and Orange County.",
  founder: {
    "@type": "Person",
    name: "Nare Movsisyan",
    jobTitle: "Founder and Creative Director",
  },
  areaServed: [
    "Whittier",
    "Montebello",
    "East Los Angeles",
    "Pico Rivera",
    "Downey",
    "Monterey Park",
    "Alhambra",
    "Pasadena",
    "Glendale",
    "La Habra",
    "Anaheim",
    "Santa Ana",
    "Irvine",
    "Los Angeles County",
    "Orange County",
  ],
  knowsAbout: [
    "Graphic design",
    "Brand identity",
    "School branding",
    "Web design",
    "Environmental graphics",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
