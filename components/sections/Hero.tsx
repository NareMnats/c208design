import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
<section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#111111] text-white md:h-[80svh] lg:min-h-screen lg:h-screen">      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />

      <Container className="relative z-10 grid min-h-screen">
        <div className="self-end pb-[14vh] pt-24 sm:pb-[11vh] sm:pt-28 md:pb-[12vh] lg:pb-[10vh] lg:pt-32">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-sm">
              Design for education and community
            </p>

            <h1 className="max-w-5xl text-[clamp(3rem,8vw,7.25rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
              Branding that schools and organizations can be proud to
              represent.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
              C208 Design creates thoughtful brand identities, print materials,
              photography, and digital experiences for schools, programs, and
              community organizations.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row sm:mt-10 sm:gap-4">
              <Link
                href="/work"
                className="flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:bg-white/85"
              >
                View work
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