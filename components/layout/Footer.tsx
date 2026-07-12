import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[#111111] py-12 text-white">
      <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-semibold">C208 Design</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
            Branding, design, and photography for schools, organizations, and
            communities.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link href="/work" className="hover:text-[#acdcd7]">
                Work
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#acdcd7]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#acdcd7]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#acdcd7]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}