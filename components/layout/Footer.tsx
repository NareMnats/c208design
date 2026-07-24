import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "Working Together", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/15 bg-[#111111] text-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              aria-label="C208 Design homepage"
              className="inline-block"
            >
              <Image
                src="/c208-logo-whitecyan.png"
                alt="C208 Design"
                width={1140}
                height={881}
                className="h-auto w-[86px] sm:w-[96px]"
              />
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Branding, design, photography, and creative support for schools,
              organizations, and communities.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="justify-self-end text-right"
          >
            <ul className="flex flex-col items-end gap-4 text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-opacity hover:opacity-55"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} C208 Design. All rights reserved.</p>

          <p>Design for education and community.</p>
        </div>
      </Container>
    </footer>
  );
}
