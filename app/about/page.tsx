import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nare Movsisyan, the educator & designer behind C208 Design.",
};

const experience = [
  {
    title: "Founder & Creative Director",
    organization: "C208 Design",
    detail: "Brand identity, print, environmental, photography, and digital work.",
  },
  {
    title: "Design Educator",
    organization: "Visual communication & creative practice",
    detail: "Teaching design through practical, audience-centered projects.",
  },
  {
    title: "Creative Partner",
    organization: "Schools & community organizations",
    detail: "Long-term support from early concepts through final production.",
  },
];

const education = [
  {
    title: "Degree / Program",
    organization: "Institution name",
    detail: "Add field of study, location, and graduation year.",
  },
  {
    title: "Credential / Certification",
    organization: "Issuing organization",
    detail: "Add relevant teaching or design credentials.",
  },
  {
    title: "Continuing Education",
    organization: "Workshops & professional learning",
    detail: "Ongoing study in design, technology, and education.",
  },
];

const proficiencies = [
  "Brand strategy & identity",
  "Print & publication design",
  "Environmental graphics",
  "Photography & art direction",
  "Web & digital design",
  "Apparel & production design",
  "Creative direction",
  "Curriculum development",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#111111]">
      <section className="bg-[#f2eee9] py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:gap-24">
            <div
              className="flex aspect-[4/5] min-h-[460px] items-end bg-[#dfe5e2] p-6 sm:min-h-[620px] sm:p-8 lg:min-h-[760px]"
              role="img"
              aria-label="Portrait photography placeholder"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                Portrait placeholder
              </p>
            </div>

            <div className="max-w-2xl md:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
                About C208 Design
              </p>
              <h1 className="mt-5 text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-5xl">
                Meet Nare Movsisyan, the educator & designer behind C208 Design.
              </h1>
              <div className="mt-8 space-y-5 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                <p>
                  I&apos;m a graphic design educator for the Montebello
                  Unified School District, designer, & creative partner who believes
                  that thoughtful design can help people & communities feel seen,
                  connected, and proud.
                </p>
                <p>
                  Through C208 Design, I work with schools, programs, and
                  organizations to create identities & materials that are
                  distinctive, practical, and built for real-world use.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-black/10 py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45 sm:text-sm">
              Curriculum Vitae
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-5xl">
              Experience, education, & practice.
            </h2>
          </div>

          <div className="grid border-t border-black/15 md:grid-cols-3">
            <CvColumn title="Design experience">
              <div className="space-y-8">
                {experience.map((item) => (
                  <CvEntry key={item.title} {...item} />
                ))}
              </div>
            </CvColumn>

            <CvColumn title="Education">
              <div className="space-y-8">
                {education.map((item) => (
                  <CvEntry key={item.title} {...item} />
                ))}
              </div>
            </CvColumn>

            <CvColumn title="Proficiencies">
              <ul className="space-y-0">
                {proficiencies.map((proficiency) => (
                  <li
                    key={proficiency}
                    className="border-b border-black/10 py-3 text-base leading-7 first:pt-0"
                  >
                    {proficiency}
                  </li>
                ))}
              </ul>
            </CvColumn>
          </div>
        </Container>
      </section>

      <section
        className="flex min-h-[680px] w-full items-end bg-[#d9dfdc] p-6 sm:min-h-[820px] sm:p-10 lg:h-[1000px] lg:p-12"
        role="img"
        aria-label="Full-width photography placeholder"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
          Full-width image placeholder
        </p>
      </section>
    </main>
  );
}

function CvColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-b border-black/15 py-9 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-12">
      <h3 className="mb-9 text-2xl tracking-[-0.025em] sm:text-3xl">
        {title}
      </h3>
      {children}
    </article>
  );
}

function CvEntry({
  title,
  organization,
  detail,
}: {
  title: string;
  organization: string;
  detail: string;
}) {
  return (
    <div>
      <p className="text-base font-semibold leading-6">{title}</p>
      <p className="mt-1 text-sm leading-6 text-black/55">{organization}</p>
      <p className="mt-3 text-sm leading-6 text-black/60">{detail}</p>
    </div>
  );
}
