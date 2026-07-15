import Link from "next/link";
import Container from "@/components/ui/Container";

export default function EducatorSection() {
  return (
    <section className="bg-[#f2eee9] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#f2f5f4] sm:min-h-[460px] sm:rounded-[2rem] lg:min-h-[560px]">
            <div className="absolute inset-4 rounded-[1.15rem] border border-black/10 sm:inset-6 sm:rounded-[1.5rem]" />

            <div className="absolute inset-x-7 bottom-7 sm:inset-x-10 sm:bottom-10">
              <p className="max-w-sm text-lg font-semibold leading-snug tracking-tight text-[#111111] sm:text-2xl">
                A future space for an authentic classroom, campus, or
                professional portrait.
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Why C208
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-6xl">
              Built by an educator.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/70 sm:text-xl sm:leading-9">
              C208 Design brings firsthand experience from inside schools to
              every project.
            </p>

            <div className="mt-7 space-y-5 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              <p>
                That means understanding how administrators, teachers,
                students, families, and communities interact with a school&apos;s
                visual identity.
              </p>

              <p>
                It also means designing with real-world considerations in
                mind—from timelines and approvals to accessibility, budgets,
                production, and long-term use.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-[#c3d8d6] px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:border-black hover:bg-[#a2d9d6]"
            >
              About C208
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
