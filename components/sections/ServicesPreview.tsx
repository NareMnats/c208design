import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Brand identity",
    description:
      "Visual identity systems that give schools, programs, and organizations a clear and consistent presence.",
  },
  {
    number: "02",
    title: "Print and environmental design",
    description:
      "Campaign materials, publications, signage, banners, apparel, and other designs made for real-world use.",
  },
  {
    number: "03",
    title: "Photography",
    description:
      "Authentic photography for campuses, programs, events, athletics, portraits, and community storytelling.",
  },
  {
    number: "04",
    title: "Digital design",
    description:
      "Websites, social media graphics, presentations, and digital materials that communicate clearly across platforms.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="border-y border-black/10 bg-[#f2eee9] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="max-w-md">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              What we do
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl">
              Creative support from concept to completion.
            </h2>

            <p className="mt-6 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              Every project is shaped around its audience, goals, and
              environment—not a predetermined template.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-[#c3d8d6] px-6 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-black hover:bg-[#a2d9d6]"
            >
              Explore services
            </Link>
          </div>

          <div className="border-t border-black/15">
            {services.map((service) => (
              <article
                key={service.number}
                className="grid gap-3 border-b border-black/15 py-7 sm:grid-cols-[70px_0.75fr_1.25fr] sm:items-start sm:gap-6 sm:py-8"
              >
                <p className="text-xs font-semibold tracking-[0.15em] text-black/40 sm:pt-1">
                  {service.number}
                </p>

                <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#111111] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="max-w-xl text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
