import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import LocalDesignSection from "@/components/sections/LocalDesignSection";
import EducatorSection from "@/components/sections/EducatorSection";
import ContactCTA from "@/components/sections/ContactCTA";
import ScrollMotion from "@/components/ui/ScrollMotion";

export const metadata: Metadata = {
  title: "Graphic Design in Los Angeles County & Orange County",
  description:
    "C208 Design provides branding, graphic design, print and digital design, and web design for schools and community organizations across Los Angeles County and Orange County.",
  alternates: {
    canonical: "/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://c208.design/#website",
  name: "C208 Design",
  alternateName: ["C208", "c208.design"],
  url: "https://c208.design/",
  publisher: {
    "@id": "https://c208.design/#organization",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollMotion>
        <Hero />
        <FeaturedWork />
        <ServicesPreview />
        <LocalDesignSection />
        <EducatorSection />
        <ContactCTA />
      </ScrollMotion>
    </>
  );
}
