import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { clients } from "@/data/clients";

type MediaFit = "cover" | "contain";
type MediaPosition = "center" | "top" | "bottom";

function FeaturedMedia({
  src,
  alt,
  sizes,
  fit = "cover",
  position = "center",
}: {
  src: string;
  alt: string;
  sizes: string;
  fit?: MediaFit;
  position?: MediaPosition;
}) {
  const isVideo = src.toLowerCase().endsWith(".mp4");

  const fitClass =
    fit === "contain" ? "object-contain" : "object-cover";

  const positionClass =
    position === "top"
      ? "object-top"
      : position === "bottom"
        ? "object-bottom"
        : "object-center";

  const mediaClasses = `
    absolute inset-0 h-full w-full
    ${fitClass}
    ${positionClass}
    transition-transform duration-700 ease-out
    group-hover:scale-[1.015]
  `;

  if (isVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className={mediaClasses}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={mediaClasses}
    />
  );
}

export default function FeaturedWork() {
  const schurr = clients.find(
    (client) => client.slug === "schurr-high-school",
  );

  const masca = clients.find(
    (client) => client.slug === "masca",
  );

  const movsys = clients.find(
    (client) => client.slug === "movsys-engineering",
  );

  if (!schurr || !masca || !movsys) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Selected projects
            </p>

            <h2 className="display-heading text-[#111111]">
              Featured projects
            </h2>
          </div>

          <Link
            href="/work"
            className="w-fit py-2 text-sm font-semibold text-[#111111] underline decoration-black/20 underline-offset-8 transition hover:decoration-black"
          >
            View all projects
          </Link>
        </div>

        {/* Schurr High School */}
        <article>
          <Link
            href={`/work/${schurr.slug}`}
            className="group relative block h-[300px] overflow-hidden bg-[#18763f] sm:h-[440px] lg:h-[590px]"
          >
            <FeaturedMedia
              src={schurr.featuredMedia}
              alt={`${schurr.client} featured project`}
              sizes="100vw"
              fit={schurr.mediaFit ?? "cover"}
              position="top"
            />

            {/* Tablet and desktop text */}
            <div className="absolute inset-x-8 bottom-8 z-10 hidden text-white sm:block lg:inset-x-10 lg:bottom-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                {schurr.category}
              </p>

              <div className="mt-2 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-normal tracking-[-0.035em] text-white sm:text-3xl">
  {schurr.client}
</h3>

                  <p className="mt-2 max-w-2xl text-base leading-7 text-white/80">
                    {schurr.tagline}
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-3 text-base font-semibold">
                  View {schurr.projects.length} projects

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>

          {/* Mobile text below media */}
          <div className="mt-5 sm:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
              {schurr.category}
            </p>

            <h3 className="mt-2 text-3xl font-normal tracking-[-0.04em] text-[#111111]">
              {schurr.client}
            </h3>

            <p className="mt-2 text-sm leading-6 text-black/60">
              {schurr.tagline}
            </p>

            <Link
              href={`/work/${schurr.slug}`}
              className="mt-4 inline-flex items-center gap-3 text-sm font-semibold text-[#111111]"
            >
              View {schurr.projects.length} projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        {/* MASCA and MovSys */}
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-7 lg:mt-10 lg:gap-10">
          {[masca, movsys].map((client) => (
            <article key={client.slug}>
              <Link
                href={`/work/${client.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden bg-[#f3f3f3]"
              >
                <FeaturedMedia
                  src={client.featuredMedia}
                  alt={`${client.client} featured project`}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  fit={client.mediaFit ?? "cover"}
                  position="center"
                />
              </Link>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  {client.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-normal tracking-[-0.035em] text-[#111111]">
                      {client.client}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                      {client.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/work/${client.slug}`}
                    aria-label={`View ${client.client} projects`}
                    className="shrink-0 pt-1 text-xl transition-transform duration-300 hover:translate-x-1"
                  >
                    →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
