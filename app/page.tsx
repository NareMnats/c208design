import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import EducatorSection from "@/components/sections/EducatorSection";
import ContactCTA from "@/components/sections/ContactCTA";
import ScrollMotion from "@/components/ui/ScrollMotion";

export default function HomePage() {
  return (
    <ScrollMotion>
      <Hero />
      <FeaturedWork />
      <ServicesPreview />
      <EducatorSection />
      <ContactCTA />
    </ScrollMotion>
  );
}
