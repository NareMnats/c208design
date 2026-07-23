import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#111111] text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.png"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

      <Container className="relative z-10 grid min-h-[100svh] items-center">
        <div className="py-28 sm:py-32">
          <div className="max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
              Design for education and community
            </p>

            <h1 className="display-heading max-w-5xl text-white">
              Branding that schools and organizations can be proud to
              represent.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
              C208 Design creates thoughtful brand identities, print materials,
              photography, and digital experiences for schools, programs, and
              community organizations.
            </p>

            <div className="mt-6 flex flex-col gap-3 min-[430px]:flex-row sm:mt-8 sm:gap-4">
              <Link
                href="/work"
                className="flex min-h-12 items-center justify-center rounded-full bg-[#c3d8d6] px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#a2d9d6]"
              >
                View projects
              </Link>

              <Link
                href="/contact"
                className="flex min-h-12 items-center justify-center rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
