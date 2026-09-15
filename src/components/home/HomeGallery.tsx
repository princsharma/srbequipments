"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HOME_GALLERY } from "@/lib/home-data";

const LOOP_ITEMS = [...HOME_GALLERY, ...HOME_GALLERY];

export default function HomeGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ down: false, startX: 0, scrollLeft: 0, moved: false });
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    const speed = 0.6;

    const step = () => {
      if (!isPaused && !dragState.current.down) {
        track.scrollLeft += speed;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current.down = true;
    dragState.current.moved = false;
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.down) return;
    const delta = e.clientX - dragState.current.startX;
    if (Math.abs(delta) > 4) {
      dragState.current.moved = true;
      setIsDragging(true);
    }
    track.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const endDrag = (e: React.PointerEvent) => {
    const track = trackRef.current;
    dragState.current.down = false;
    setIsDragging(false);
    if (track) track.releasePointerCapture(e.pointerId);
  };

  const onItemClick = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
    }
  };

  return (
    <section id="gallery" className="section section--gallery" data-testid="gallery">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 className="section__title">
            Our Work <em>in Action</em>
          </h2>
          <p className="section__lede">
            A peek inside the SRB Equipment workshop and mobile service unit.
          </p>
        </div>

        <div
          ref={trackRef}
          className={`gallery-track${isDragging ? " is-dragging" : ""}`}
          data-testid="gallery-grid"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {LOOP_ITEMS.map((item, index) => (
            <Link
              key={`${item.caption}-${index}`}
              href="/gallery"
              className="gallery-track__item"
              aria-label={item.caption}
              onClick={onItemClick}
              draggable={false}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={516}
                sizes="(max-width: 768px) 78vw, 320px"
                draggable={false}
              />
              <span className="gallery-track__caption">{item.caption}</span>
            </Link>
          ))}
        </div>

        <div className="section__actions section__actions--center">
          <Link
            href="/gallery"
            className="btn btn--outline"
            data-testid="gallery-view-all"
          >
            View Full Gallery{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
