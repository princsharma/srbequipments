"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

export type TocItem = { id: string; label: string };

function getStickyTop(): number {
  if (typeof window === "undefined") return 148;
  const root = getComputedStyle(document.documentElement);
  const header = root.getPropertyValue("--total-header-height").trim();
  const parsed = parseFloat(header);
  const base = Number.isFinite(parsed) ? parsed : 132;
  return base + 16;
}

export default function BlogArticleToc({ items }: { items: TocItem[] }) {
  const asideRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"flow" | "fixed" | "bottom">("flow");
  const [fixedStyle, setFixedStyle] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const [asideMinHeight, setAsideMinHeight] = useState<number | undefined>();

  const update = useCallback(() => {
    const layout = document.getElementById("blog-article-layout");
    const aside = asideRef.current;
    const card = cardRef.current;
    if (!layout || !aside || !card) return;

    if (window.matchMedia("(max-width: 960px)").matches) {
      setMode("flow");
      setFixedStyle(null);
      setAsideMinHeight(undefined);
      return;
    }

    const stickyTop = getStickyTop();
    const layoutRect = layout.getBoundingClientRect();
    const asideRect = aside.getBoundingClientRect();
    const cardHeight = card.offsetHeight;
    const layoutBottom = layoutRect.bottom;

    setAsideMinHeight(cardHeight);

    if (layoutRect.top > stickyTop) {
      setMode("flow");
      setFixedStyle(null);
      return;
    }

    const fixedBottom = stickyTop + cardHeight;
    if (layoutBottom <= fixedBottom + 12) {
      setMode("bottom");
      setFixedStyle(null);
      return;
    }

    setMode("fixed");
    setFixedStyle({
      top: stickyTop,
      left: asideRect.left,
      width: asideRect.width,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const cardStyle =
    mode === "fixed" && fixedStyle
      ? {
          position: "fixed" as const,
          top: fixedStyle.top,
          left: fixedStyle.left,
          width: fixedStyle.width,
          zIndex: 100,
        }
      : undefined;

  return (
    <aside
      ref={asideRef}
      className={`blog-article__toc${mode === "bottom" ? " blog-article__toc--bottom" : ""}${mode === "fixed" ? " blog-article__toc--fixed" : ""}`}
      aria-label="Table of contents"
      style={asideMinHeight ? { minHeight: asideMinHeight } : undefined}
    >
      <div
        ref={cardRef}
        className="blog-article__toc-card"
        style={cardStyle}
      >
        <p className="blog-article__toc-title">Table of Contents</p>
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ol>
        <a
          href={SITE.phoneHref}
          className="btn btn--primary blog-article__toc-cta"
        >
          <i className="fa-solid fa-phone" aria-hidden="true" /> Call{" "}
          {SITE.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}
