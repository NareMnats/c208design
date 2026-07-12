import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <section className="bg-[#111111] py-16 text-white sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-sm">
              Start a project
            </p>

            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Let&apos;s create something your community is proud to represent.
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Tell me about your school, program, organization, or upcoming
              project.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#acdcd7] px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#9fcfc9] sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}