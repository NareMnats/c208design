import Link from "next/link";
import Container from "@/components/ui/Container";

const serviceAreas = [
  "Whittier",
  "Montebello",
  "East Los Angeles",
  "Pico Rivera",
  "Downey",
  "Monterey Park",
  "Alhambra",
  "Pasadena",
  "Glendale",
  "La Habra",
  "Anaheim",
  "Santa Ana",
  "Irvine",
];

export default function LocalDesignSection() {
  return (
    <section className="border-b border-black/10 bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div data-reveal data-parallax="0.02">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Local graphic design
            </p>
            <h2 className="display-heading max-w-3xl text-[#111111]">
              Graphic design rooted in Los Angeles County and Orange County.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              C208 Design partners with schools, districts, nonprofits, civic
              groups, and small businesses throughout Los Angeles County and
              Orange County. Local context matters—especially when
              design needs to represent students, families, programs, and the
              places they call home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Primary service areas">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-black/15 bg-[#f2eee9] px-4 py-2 text-sm text-black/65"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <aside
            className="border-t border-black/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            data-reveal
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 sm:text-sm">
              An education-focused studio
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#2c7773] sm:text-3xl">
              First-hand experience with schools and community programs.
            </h3>
            <p className="mt-5 text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
              Founded by a CTE design educator, C208 understands the audiences,
              approvals, timelines, and practical realities behind public-school
              and community-facing creative work.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/work" className="transition-opacity hover:opacity-55">
                View relevant work <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="transition-opacity hover:opacity-55">
                Start a conversation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
