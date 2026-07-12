import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white text-[#111111]">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-[-0.025em]"
            >
              C208 Design
            </Link>

            <p className="mt-3 max-w-md text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
              Branding, design, photography, and creative support for schools,
              organizations, and communities.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm font-medium sm:flex sm:flex-wrap sm:gap-7">
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

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} C208 Design. All rights reserved.</p>

          <p>Design for education and community.</p>
        </div>
      </Container>
    </footer>
  );
}