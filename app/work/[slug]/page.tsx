import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ScrollMotion from "@/components/ui/ScrollMotion";
import { clients, type Client } from "@/data/clients";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clients.map((client) => ({ slug: client.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const client = clients.find((item) => item.slug === slug);

  if (!client) return {};

  return {
    title: client.client,
    description: client.description,
  };
}

function ProjectArtwork({
  project,
  index,
  client,
}: {
  project: Client["projects"][number];
  index: number;
  client: Client;
}) {
  const caseStudy = client.caseStudy;
  const accent = caseStudy?.accent ?? "#111111";
  const accentSoft = caseStudy?.accentSoft ?? "#eeeeee";

  if (project.images?.length) {
    const plannedAssets = project.plannedAssets ?? [];
    const totalAssets = project.images.length + plannedAssets.length;
    const firstImageIsWide =
      project.images[0].fullWidth ??
      project.images[0].width / project.images[0].height >= 2;
    const imageItems = project.images.map((image) => ({
      type: "image" as const,
      image,
    }));
    const plannedItems = plannedAssets.map((asset) => ({
      type: "planned" as const,
      asset,
    }));
    const galleryItems = project.plannedAssetsBeforeLastImage
      ? [
          ...imageItems.slice(0, -1),
          ...plannedItems,
          ...imageItems.slice(-1),
        ]
      : [...imageItems, ...plannedItems];

    return (
      <article className="border-t border-black/12 pt-7 sm:pt-9">
        <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1fr] md:gap-8 lg:mb-10 lg:grid-cols-[0.8fr_1.1fr] lg:gap-12">
          <h3 className="max-w-md text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">
            {project.title}
          </h3>
          <p className="max-w-xl text-sm leading-6 text-black/58 sm:text-base sm:leading-7">
            {project.description}
          </p>
        </div>

        <div
          className={`grid items-start gap-4 sm:gap-6 ${
            project.galleryColumns === 2
              ? "md:grid-cols-2"
              : firstImageIsWide && totalAssets >= 4
              ? "md:grid-cols-2 lg:grid-cols-3"
              : firstImageIsWide
                ? "md:grid-cols-2"
              : totalAssets === 2
                ? "md:grid-cols-2"
                : totalAssets >= 3
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : ""
          }`}
        >
          {galleryItems.map((item) => {
            if (item.type === "planned") {
              return (
                <div
                  key={item.asset.label}
                  className="flex aspect-square min-h-64 flex-col justify-between border border-dashed border-black/25 bg-white p-6 sm:p-8"
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: accent }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                      Image slot
                    </p>
                    <p className="mt-3 text-xl tracking-[-0.02em] sm:text-2xl">
                      {item.asset.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-black/45">
                      {item.asset.note}
                    </p>
                  </div>
                </div>
              );
            }

            const image = item.image;
            const isFullWidth =
              image.fullWidth ?? image.width / image.height >= 2;
            const isVideo = image.src.toLowerCase().endsWith(".mp4");

            return (
              <figure
                key={image.src}
                className={`overflow-hidden bg-white ${
                  isFullWidth
                    ? totalAssets >= 4 && project.galleryColumns !== 2
                      ? "md:col-span-2 lg:col-span-3"
                      : "md:col-span-2"
                    : ""
                } ${project.galleryEqualHeight && !isFullWidth ? "aspect-[2/1]" : ""}`}
              >
                {isVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={image.alt}
                    className="h-auto w-full"
                  >
                    <source src={image.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={
                      isFullWidth
                        ? "(max-width: 1023px) 100vw, 1400px"
                        : totalAssets >= 3
                          ? "(max-width: 767px) 100vw, 33vw"
                          : totalAssets > 1
                            ? "(max-width: 767px) 100vw, 50vw"
                            : "(max-width: 1023px) 100vw, 700px"
                    }
                    className={
                      project.galleryEqualHeight && !isFullWidth
                        ? "h-full w-full object-cover"
                        : "h-auto w-full"
                    }
                  />
                )}
              </figure>
            );
          })}
        </div>
      </article>
    );
  }

  return (
    <div
      className="relative flex min-h-[320px] overflow-hidden sm:min-h-[440px] lg:min-h-[560px]"
      style={{ backgroundColor: index % 2 === 0 ? accentSoft : accent }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-16 h-64 w-64 rounded-full border-[38px] opacity-20 sm:h-96 sm:w-96 sm:border-[56px]"
        style={{ borderColor: index % 2 === 0 ? accent : "white" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-[12%] h-48 w-48 rotate-12 border-[28px] opacity-15 sm:h-72 sm:w-72 sm:border-[42px]"
        style={{ borderColor: index % 2 === 0 ? accent : "white" }}
      />

      <div
        className={`relative z-10 flex w-full flex-col justify-between p-7 sm:p-10 lg:p-14 ${
          index % 2 === 0 ? "text-[#111111]" : "text-white"
        }`}
      >
        <div className="flex items-center text-xs font-semibold uppercase tracking-[0.2em] opacity-65 sm:text-sm">
          <span>{client.client}</span>
        </div>

        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            Project
          </p>
          <h3 className="max-w-xl text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default async function ClientCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const client = clients.find((item) => item.slug === slug);

  if (!client) notFound();

  const caseStudy = client.caseStudy;
  const narrativeSections = [
    {
      label: "Challenge",
      copy: caseStudy?.challenge ?? client.description,
    },
    {
      label: "Approach",
      copy: caseStudy?.approach ?? caseStudy?.introduction ?? client.tagline,
    },
    {
      label: "Outcome",
      copy: caseStudy?.outcome ?? client.tagline,
    },
  ];

  return (
    <ScrollMotion className="bg-white text-[#111111]">
      <section className="border-b border-black/10 bg-[#f2eee9]">
        <Container
          className="py-7 sm:py-10 lg:py-14"
          data-reveal
          data-parallax="0.02"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-55"
          >
            <span aria-hidden="true">←</span>
            All projects
          </Link>

          <div className="mt-7 grid gap-10 sm:mt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45 sm:text-sm">
                {caseStudy?.eyebrow ?? client.category}
              </p>
              <h1 className="display-heading mt-5 max-w-5xl">
                {client.client}
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/65 sm:text-xl sm:leading-9 lg:pb-2">
              {client.tagline}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2eee9] pb-10 pt-14 sm:pb-15 sm:pt-20 lg:pb-20 lg:pt-24">
        <Container>
          <div
            className="grid gap-12 lg:grid-cols-[1.5fr_0.5fr] lg:gap-20"
            data-reveal-group
          >
            <div data-reveal>
              <h2 className="max-w-4xl text-2xl leading-[1.35] tracking-[-0.025em] sm:text-3xl lg:text-4xl">
                {client.description}
              </h2>

              <div
                className="mt-10 space-y-4 sm:mt-12 sm:space-y-5"
                data-reveal-group
              >
                {narrativeSections.map((section) => (
                  <article
                    className="rounded-[20px] border-2 border-[#6db2ab] p-6 sm:p-8"
                    data-reveal
                    key={section.label}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 sm:text-sm">
                      {section.label}
                    </p>
                    <p className="mt-3 max-w-[70ch] text-sm leading-6 text-black/65 sm:mt-4 sm:text-base sm:leading-7">
                      {section.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:justify-self-end lg:pt-1" data-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55 sm:text-sm">
                Services provided
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-black/55 sm:text-base">
                {client.services.map((service) => (
                  <li
                    className="relative w-fit pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#6db2ab] after:transition-transform after:duration-300 hover:after:scale-x-100"
                    key={service}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

        </Container>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <Container>
          <div
            className="space-y-20 sm:space-y-28 lg:space-y-36"
            data-reveal-group
          >
            {client.projects.map((project, index) => (
              <div data-reveal key={project.slug}>
                <ProjectArtwork project={project} index={index} client={client} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-black/10 py-12 sm:py-16">
        <Container className="flex justify-end" data-reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-base font-semibold sm:text-lg"
          >
            View all projects
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
        </Container>
      </section>
    </ScrollMotion>
  );
}
