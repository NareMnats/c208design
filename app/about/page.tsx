import type { Metadata } from "next";
import Image from "next/image";
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
    detail: "Brand identity, print design, environmental design, photography, and other digital work.",
    date: "2026 – present",
  },
  {
    title: "CTE Design & Programming Educator",
    organization: "Montebello Unified School District: Schurr High School",
    detail: "Teaching design and programming through practical, project-based learning.",
    date: "2016 – present",
  },
  {
    title: "Freelance Designer",
    organization: "Branding & marketing design for small businesses, schools, community organizations, and non-profits.",
    detail: "From catalog design to environmental graphics, I have worked with clients to create attractive, practical, and effective design solutions.",
    date: "2011 – 2025",
  },
];

const education = [
  {
    title: "BA Studio Art with emphasis in Graphic Design",
    organization: "California State University, Long Beach",
    detail: "Studio Art: Graphic Design",
    date: "2016",
  },
  {
    title: "CTE Credential in Arts, Media, & Entertainment",
    organization: "Los Angeles County Office of Education",
    detail: "Additional credentials in Information & Communication Technology and Manufacturing & Product Development",
    date: "2018",
  },
  {
    title: "MFA in Graphic Design",
    organization: "California State University, Long Beach",
    detail: "Masters program with a focus on typography, and a culminating exhibition.",
    date: "2022",
  },
];

const proficiencies = [
  "Brand design & identity",
  "Print & publication design",
  "Photography & art direction",
  "Web & digital design",
  "Apparel & product design",
  "Environmental graphics",
  "Adobe Creative Suite",
  "Typography design",
  "Short video production & editing",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#111111]">
      <section className="bg-[#f2eee9] py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14 lg:gap-24">
            <div className="relative aspect-[2742/4032] min-h-[460px] overflow-hidden bg-[#dfe5e2] sm:min-h-[620px] lg:min-h-[760px]">
              <Image
                src="/AboutMe.png"
                alt="Portrait of Nare Movsisyan"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="max-w-2xl md:py-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
                About C208 Design
              </p>
              <h1 className="display-heading mt-5">
                Meet Nare Movsisyan, the educator & designer behind C208 Design.
              </h1>
              <div className="mt-8 space-y-5 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                <p>
                  I’m a CTE graphic design and game design teacher for the Montebello Unified School District, as well as a designer and creative partner. I believe thoughtful design can help people and communities feel seen, connected, and proud.
                </p>
                <p>
                  My path in graphic design began in a high school CTE classroom and continued through college and professional practice. Along the way, I developed a wide range of experience through freelance projects spanning jewelry brochures, apparel, salon marketing, and sales materials.
                </p>
                <p>
                  When I became an educator, I saw an opportunity to help my school shine from the inside out. Since then, I’ve worked to strengthen the visual identities of student programs, campus organizations, and the school as a whole.
                </p>
                <p>
                  Through C208 Design, I bring that experience to schools, districts, community organizations, and small businesses—helping them create visual identities that reflect their passion, purpose, and commitment.
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
            <h2 className="display-heading mt-4 max-w-3xl">
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
