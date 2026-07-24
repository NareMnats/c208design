import type { Metadata } from "next";
import ClientCard from "@/components/cards/ClientCard";
import Container from "@/components/ui/Container";
import ScrollMotion from "@/components/ui/ScrollMotion";
import { clients } from "@/data/clients";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore branding, identity, web, print, and environmental design projects by C208 Design.",
};

export default function ProjectsPage() {
  return (
    <ScrollMotion className="bg-white">
      <section className="border-b border-black/10 bg-[#f2eee9]">
        <Container className="py-16 sm:py-20 lg:py-28">
          <div
            className="max-w-4xl"
            data-reveal
            data-parallax="0.025"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Selected projects
            </p>

            <h1 className="display-heading text-[#111111]">
              Long-term creative partnerships.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65 sm:text-xl sm:leading-9">
              Identity systems, websites, environmental graphics, and print
              materials developed around the needs of each organization.
            </p>
          </div>
        </Container>
      </section>

      <section data-reveal-group>
        {clients.map((client) => (
          <ClientCard key={client.slug} client={client} />
        ))}
      </section>
    </ScrollMotion>
  );
}
