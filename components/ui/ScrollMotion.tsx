"use client";

import { useEffect, useRef, type ReactNode } from "react";
import motionStyles from "./scroll-motion.module.css";

type ScrollMotionProps = {
  children: ReactNode;
  className?: string;
};

export default function ScrollMotion({
  children,
  className,
}: ScrollMotionProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!root || reduceMotion) {
      return;
    }

    const revealElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const revealGroups = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal-group]"),
    );
    const parallaxElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    revealGroups.forEach((group) => {
      const items = Array.from(group.children).filter(
        (item): item is HTMLElement =>
          item instanceof HTMLElement && item.hasAttribute("data-reveal"),
      );

      items.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${index * 75}ms`);
      });
    });

    root.dataset.motion = "ready";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(motionStyles.revealed);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    let animationFrame = 0;

    function updateParallax() {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.bottom < -160 || rect.top > viewportHeight + 160) {
          return;
        }

        const speed = Number(element.dataset.parallax) || 0.035;
        const distanceFromCenter =
          rect.top + rect.height / 2 - viewportHeight / 2;
        const offset = Math.max(
          -30,
          Math.min(30, -distanceFromCenter * speed),
        );

        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    }

    function requestParallaxUpdate() {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateParallax);
    }

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <main ref={rootRef} className={`${motionStyles.root} ${className ?? ""}`}>
      {children}
    </main>
  );
}
