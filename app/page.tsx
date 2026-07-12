import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import EducatorSection from "@/components/sections/EducatorSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <EducatorSection />
      <ContactCTA />
    </main>
  );
}