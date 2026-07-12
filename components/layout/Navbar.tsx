import Link from "next/link";
import Container from "../ui/Container";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="C208 Design homepage">
  <Image
    src="/c208-logo.png"
    alt="C208 Design"
    width={120}
    height={92}
    priority
    className="h-auto w-[62px] sm:w-[72px]"
  />
</Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <Link

  href="/work"

  className="text-[#111111] transition-opacity hover:opacity-60"

>

  Work

</Link>
            </li>
            <li>
<Link

  href="/services"

  className="text-[#111111] transition-opacity hover:opacity-60"

>

  Services

</Link>
            </li>
            <li>
<Link

  href="/about"

  className="text-[#111111] transition-opacity hover:opacity-60"

>

  About

</Link>
            </li>
            <li>
<Link
  href="/contact"
  className="rounded-full bg-[#acdcd7] px-5 py-3 text-[#111111] transition-colors hover:bg-[#9dcfc9]"
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