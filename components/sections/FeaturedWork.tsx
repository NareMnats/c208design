import Link from "next/link";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/cards/ProjectCard";

const projects = [
  {
    title: "Schurr High School",
    category: "Athletics branding",
    href: "/work/schurr-high-school",
    imageClassName: "bg-[#111111]",
  },
  {
    title: "MASCA",
    category: "Identity and website",
    href: "/work/masca",
    imageClassName: "bg-[#eef8f7]",
  },
  {
    title: "PVP Pathway",
    category: "Academic program branding",
    href: "/work/pvp-pathway",
    imageClassName: "bg-[#dfe9e7]",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mb-9 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Selected projects
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl">
              Featured work
            </h2>
          </div>

          <Link
            href="/work"
            className="w-fit py-2 text-sm font-semibold text-[#111111] underline decoration-black/20 underline-offset-8 transition hover:decoration-black"
          >
            View all work
          </Link>
        </div>

        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}