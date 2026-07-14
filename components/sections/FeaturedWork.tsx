import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { clients } from "@/data/clients";

function FeaturedMedia({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const isVideo = src.toLowerCase().endsWith(".mp4");

  if (isVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
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
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
    />
  );
}

export default function FeaturedWork() {
  const schurr = clients.find(
    (client) => client.slug === "schurr-high-school",
  );
  const masca = clients.find((client) => client.slug === "masca");
  const movsys = clients.find(
    (client) => client.slug === "movsys-engineering",
  );

  if (!schurr || !masca || !movsys) {
    return null;
  }

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Selected projects
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
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

        {/* Large Schurr feature */}
        <article>
          <Link
            href={`/work/${schurr.slug}`}
            className="group relative block h-[300px] overflow-hidden bg-[#f3f3f3] sm:h-[440px] lg:h-[590px]"
          >
            <FeaturedMedia
              src={schurr.featuredMedia}
              alt={`${schurr.client} featured project`}
              sizes="100vw"
            />

            <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-sm">
                {schurr.category}
              </p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                    {schurr.client}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                    {schurr.tagline}
                  </p>
                </div>

                <span className="inline-flex items-center gap-3 text-sm font-semibold sm:text-base">
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
        </article>

        {/* MASCA and MovSys */}
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-7 lg:mt-10 lg:gap-10">
          {[masca, movsys].map((client) => (
            <article key={client.slug}>
              <Link
                href={`/work/${client.slug}`}
                className="group relative block h-[260px] overflow-hidden bg-[#f3f3f3] sm:h-[340px] lg:h-[420px]"
              >
                <FeaturedMedia
                  src={client.featuredMedia}
                  alt={`${client.client} featured project`}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </Link>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  {client.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#111111] sm:text-3xl">
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
