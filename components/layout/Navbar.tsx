import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-white">
      <Container className="flex h-24 items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          C208 Design
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <Link href="/work" className="transition-opacity hover:opacity-60">
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="transition-opacity hover:opacity-60"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-opacity hover:opacity-60">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-full bg-[#acdcd7] px-5 py-3 transition-opacity hover:opacity-80"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}