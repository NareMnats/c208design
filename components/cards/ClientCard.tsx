import Image from "next/image";
import Link from "next/link";
import type { Client } from "@/data/clients";
import Container from "@/components/ui/Container";

type ClientCardProps = {
  client: Client;
};

export default function ClientCard({ client }: ClientCardProps) {
  const isVideo = client.featuredMedia.toLowerCase().endsWith(".mp4");

  return (
    <article className="border-t border-black/10 py-14 sm:py-16 lg:py-24">
      <Container>
        <Link
          href={`/work/${client.slug}`}
          className="group relative block h-[260px] overflow-hidden bg-[#f3f3f3] sm:h-[360px] lg:h-[460px]"
        >
          {isVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            >
              <source src={client.featuredMedia} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={client.featuredMedia}
              alt={`${client.client} featured project`}
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          )}

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
        </Link>

        <div className="grid gap-8 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 sm:text-sm">
              {client.category}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
              {client.client}
            </h2>

            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-[#111111]">
              {client.tagline}
            </p>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              {client.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {client.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-black/15 px-4 py-2 text-xs font-medium text-[#111111] sm:text-sm"
                >
                  {service}
                </span>
              ))}
            </div>

            <Link
              href={`/work/${client.slug}`}
              className="group mt-8 inline-flex items-center gap-3 text-base font-semibold text-[#111111] sm:text-lg"
            >
              View {client.projects.length} projects
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}