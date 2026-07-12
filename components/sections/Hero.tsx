import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="border-b border-black/10 bg-white">
      <Container className="grid gap-12 py-14 sm:py-16 lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 sm:mb-6 sm:text-sm">
            Design for education and community
          </p>

          <h1 className="max-w-3xl text-[clamp(3rem,9.5vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#111111]">
            Branding that schools and organizations can be proud to represent.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-black/65 sm:mt-8 sm:text-lg sm:leading-8">
            C208 Design creates thoughtful brand identities, print materials,
            photography, and digital experiences for schools, programs, and
            community organizations.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-10 sm:gap-4">
            <Link
              href="/work"
              className="flex min-h-12 items-center justify-center rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black/80"
            >
              View work
            </Link>

            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:border-black hover:bg-black/[0.03]"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] bg-[#eef8f7] sm:min-h-[420px] sm:rounded-[2rem] lg:min-h-[500px]">
          <div className="absolute inset-4 rounded-[1.15rem] border border-[#acdcd7] sm:inset-6 sm:rounded-[1.5rem]" />

          <div className="absolute inset-x-7 bottom-7 sm:inset-x-10 sm:bottom-10">
            <p className="max-w-sm text-xl font-semibold leading-tight tracking-tight text-[#111111] sm:text-2xl">
              Thoughtful design built around the people, programs, and
              communities it serves.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}