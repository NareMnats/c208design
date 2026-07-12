import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="border-b border-black/10 bg-white">
<Container className="grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
            Design for education and community
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#111111] sm:text-6xl lg:text-7xl xl:text-8xl">
            Branding that schools and organizations can be proud to represent.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">
            C208 Design creates thoughtful brand identities, print materials,
            photography, and digital experiences for schools, programs, and
            community organizations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              View work
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-black/20 bg-white px-7 py-4 text-sm font-semibold text-[#111111] transition hover:border-black hover:bg-black/[0.03]"
            >
              Start a project
            </Link>
          </div>
        </div>

<div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#eef8f7] lg:min-h-[500px]">
  <div className="absolute inset-6 rounded-[1.5rem] border-[#acdcd7]" />

  <div className="absolute bottom-8 left-8 right-8">
    <p className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-[#111111]">
      Thoughtful design built around the people, programs, and communities it
      serves.
    </p>
  </div>
</div>
      </Container>
    </section>
  );
}