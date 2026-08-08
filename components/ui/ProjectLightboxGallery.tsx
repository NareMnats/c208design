"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ClientProjectImage } from "@/data/clients";

type ProjectLightboxGalleryProps = {
  title: string;
  images: ClientProjectImage[];
  coverFit?: "contain";
  coverIndex?: number;
};

export default function ProjectLightboxGallery({
  title,
  images,
  coverFit,
  coverIndex = 0,
}: ProjectLightboxGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  const cover = images[coverIndex] ?? images[0];

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="group relative block w-full cursor-zoom-in overflow-hidden bg-[#231f20] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
      >
        {coverFit === "contain" ? (
          <span className="relative block aspect-[4/3] w-full">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 1400px"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.012]"
            />
          </span>
        ) : (
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            sizes="(max-width: 1023px) 100vw, 1400px"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.012]"
          />
        )}

        <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-5 bg-black/80 px-5 py-4 text-white backdrop-blur-sm sm:px-7 sm:py-5">
          <span className="text-sm font-semibold sm:text-base">
            View full project
          </span>
          <span className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/70 sm:text-sm">
            {images.length} images
            <span aria-hidden="true" className="text-lg leading-none">
              ↗
            </span>
          </span>
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#151313] text-white"
          >
            <header className="sticky top-0 z-10 border-b border-white/15 bg-[#151313]/95 backdrop-blur-md">
              <div className="site-safe-inline mx-auto flex max-w-[1600px] items-center justify-between gap-6 py-4">
                <div>
                  <h4
                    id={dialogTitleId}
                    className="text-base font-semibold tracking-[-0.015em] sm:text-lg"
                  >
                    {title}
                  </h4>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/50">
                    Scroll to explore · {images.length} images
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border border-white/25 px-5 py-2 text-sm font-semibold transition-colors hover:border-white hover:bg-white hover:text-[#151313] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Close
                  <span aria-hidden="true" className="text-lg leading-none">
                    ×
                  </span>
                </button>
              </div>
            </header>

            <div className="site-safe-inline mx-auto max-w-[1600px] space-y-4 py-4 sm:space-y-6 sm:py-6 lg:py-10">
              {images.map((image) => (
                <figure
                  key={image.src}
                  className={`overflow-hidden bg-white ${
                    image.height > image.width ? "mx-auto max-w-4xl" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={
                      image.height > image.width
                        ? "(max-width: 1023px) 100vw, 900px"
                        : "(max-width: 1023px) 100vw, 1600px"
                    }
                    className="h-auto w-full"
                  />
                </figure>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
