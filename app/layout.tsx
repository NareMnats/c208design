import type { Metadata } from "next";
import { Corben, Geist_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoFlex.variable} ${geistMono.variable} ${corben.variable}`}
    >
      <body className="bg-white text-[#111111] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
