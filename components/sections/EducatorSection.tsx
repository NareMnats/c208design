import Link from "next/link";
import Container from "@/components/ui/Container";

export default function EducatorSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div
          className="rounded-[28px] bg-[#a2d9d6] p-7 sm:p-10 lg:p-14"
          data-reveal
          data-parallax="0.018"
        >
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Why C208?
            </p>

            <h2 className="display-heading text-[#111111]">
              Built by an educator.
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/70 sm:text-xl sm:leading-9">
              I bring firsthand experience from inside schools to every project.
            </p>

            <div className="mt-7 space-y-5 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              <p>
                That means understanding how administrators, teachers, students,
                families, & communities interact with a school&apos;s or
                organization&apos;s visual identity.
              </p>

              <p>
                It also means designing with real-world considerations in
                mind—from timelines and approvals to accessibility, budgets,
                production, and long-term use.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:border-black hover:bg-[#a2d9d6]"
            >
              About C208 Design
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
