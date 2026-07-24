"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "Working Together", href: "/services" },
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
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY <= 8;

      if (atTop) {
        setIsVisible(true);
        if (isHomepage) {
          setShowSolidHomepageNavbar(false);
        }
      } else if (currentScrollY > previousScrollY + 4) {
        setIsVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < previousScrollY - 4) {
        if (isHomepage) {
          setShowSolidHomepageNavbar(true);
        }
        setIsVisible(true);
      }

      previousScrollY = currentScrollY;
    }

    const initialFrame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomepage]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`z-50 w-full will-change-transform transition-all duration-500 ease-in-out ${
          isHomepage ? "fixed left-0 top-0" : "sticky top-0"
        } ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        } ${
          useTransparentStyle
            ? "border-b border-transparent bg-transparent text-white"
            : "border-b border-black/10 bg-white/45 text-[#111111] backdrop-blur-xl"
        }`}
      >
        <Container className="relative">
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
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
              className={`flex h-11 w-11 items-center justify-center md:hidden ${
                useTransparentStyle ? "text-white" : "text-[#111111]"
              }`}
            >
              <span className="sr-only">Open menu</span>

              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-1 block h-[1.5px] w-5 bg-current" />
                <span className="absolute bottom-1 left-0 block h-[1.5px] w-5 bg-current" />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-[60] min-h-dvh bg-[#f2eee9] text-[#111111] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:duration-0 md:hidden ${
          menuOpen
            ? "translate-x-0"
            : "pointer-events-none translate-x-full"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              aria-label="C208 Design homepage"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src="/c208-logo-blackcyan.png"
                alt="C208 Design"
                width={1140}
                height={881}
                className="h-auto w-[72px] sm:w-[78px]"
              />
            </Link>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center text-[#111111]"
            >
              <span className="sr-only">Close menu</span>

              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="flex flex-col items-start gap-5 pt-12">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-1 text-2xl font-medium transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 flex min-h-14 w-full items-center justify-center rounded-full bg-[#a2d9d6] px-6 py-3 text-base font-semibold text-[#111111] transition-colors hover:bg-[#92cbc7]"
            >
              Contact
            </Link>
          </nav>
        </Container>
      </aside>
    </>
  );
}
