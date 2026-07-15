"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showSolidHomepageNavbar, setShowSolidHomepageNavbar] = useState(false);

  const isHomepage = pathname === "/";
  const useTransparentStyle = isHomepage && !showSolidHomepageNavbar;

  useEffect(() => {
    if (!isHomepage) {
      setIsVisible(true);
      setShowSolidHomepageNavbar(false);
      return;
    }

    let previousScrollY = window.scrollY;

    if (previousScrollY > 8) {
      setIsVisible(false);
    }

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY <= 8;

      if (atTop) {
        setIsVisible(true);
        setShowSolidHomepageNavbar(false);
      } else if (currentScrollY > previousScrollY + 4) {
        setIsVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < previousScrollY - 4) {
        setShowSolidHomepageNavbar(true);
        setIsVisible(true);
      }

      previousScrollY = currentScrollY;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`z-50 w-full transition-[opacity,background-color,border-color] duration-500 ease-out ${
        isHomepage
          ? `fixed left-0 top-0 ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`
          : "sticky top-0"
      } ${
        useTransparentStyle
          ? "border-b border-transparent bg-transparent text-white"
          : "border-b border-black/10 bg-[#f2eee9]/95 text-[#111111] backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            aria-label="C208 Design homepage"
            onClick={closeMenu}
            className="shrink-0"
          >
            <Image
  src={
    useTransparentStyle
      ? "/c208-logo-whitecyan.png"
      : "/c208-logo-blackcyan.png"
  }
  alt="C208 Design"
  width={1140}
  height={881}
  priority
  className="h-auto w-[72px] sm:w-[78px] md:w-[86px]"
/>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-3 text-sm font-medium transition-opacity hover:opacity-60 ${
                    useTransparentStyle ? "text-white" : "text-[#111111]"
                  }`}
                >
                  {item.label}

                  {active && (
                    <span
                      className={`absolute inset-x-0 bottom-1 h-px ${
                        useTransparentStyle ? "bg-white" : "bg-[#111111]"
                      }`}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                useTransparentStyle
                  ? "border border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  : "bg-[#a2d9d6] text-[#111111] hover:bg-[#92cbc7]"
              }`}
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${
              useTransparentStyle
                ? "border-white/40 text-white"
                : "border-black/15 text-[#111111]"
            }`}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-1 block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-1 left-0 block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className={`border-t py-5 md:hidden ${
              useTransparentStyle
                ? "border-white/20 bg-black/70 px-5 backdrop-blur-md"
                : "border-black/10 bg-[#f2eee9]"
            }`}
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`border-b py-4 text-lg font-medium ${
                    useTransparentStyle
                      ? "border-white/20 text-white"
                      : "border-black/10 text-[#111111]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-[#a2d9d6] px-6 py-3 text-base font-semibold text-[#111111] transition-colors hover:bg-[#92cbc7]"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
