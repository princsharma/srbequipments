"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { GalleryItem } from "@/lib/gallery-data";

type Props = {
  items: GalleryItem[];
};

export default function GalleryLightbox({ items }: Props) {
  const titleId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const current = isOpen ? items[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return (i - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return (i + 1) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("srb-lightbox-open");

    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("srb-lightbox-open");
    };
  }, [isOpen, close, goPrev, goNext]);

  return (
    <>
      <div className="gallery-page__grid">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className={`gallery-page__item${item.feature ? " gallery-page__item--feature" : ""}`}
            aria-label={`View ${item.ariaLabel}`}
            onClick={() => setOpenIndex(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <span className="gallery-page__overlay" aria-hidden="true">
              <span className="gallery-page__zoom">
                <i className="fa-solid fa-magnifying-glass-plus" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {isOpen && current ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="gallery-lightbox__backdrop"
            aria-label="Close gallery"
            onClick={close}
          />

          <div className="gallery-lightbox__panel">
            <div className="gallery-lightbox__toolbar">
              <p id={titleId} className="gallery-lightbox__counter">
                {openIndex! + 1} / {items.length}
              </p>
              <button
                type="button"
                className="gallery-lightbox__close"
                aria-label="Close"
                onClick={close}
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>

            <div className="gallery-lightbox__stage">
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                aria-label="Previous image"
                onClick={goPrev}
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
              </button>

              <div className="gallery-lightbox__figure">
                <Image
                  src={current.href || current.src}
                  alt={current.alt}
                  width={1600}
                  height={1200}
                  sizes="100vw"
                  priority
                  className="gallery-lightbox__image"
                />
                <p className="gallery-lightbox__caption">{current.alt}</p>
              </div>

              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--next"
                aria-label="Next image"
                onClick={goNext}
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
