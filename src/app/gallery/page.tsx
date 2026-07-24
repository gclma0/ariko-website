"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { X, Play } from "lucide-react";
import styles from "./page.module.css";

type MediaType = "image" | "video";

interface GalleryItem {
  id: number;
  title: string;
  src: string;
  type: MediaType;
}

interface GallerySection {
  id: string;
  label: string;
  icon: string;
  items: GalleryItem[];
}

// Helper: generate items from a numbered folder
function folderItems(folder: string, count: number, startId: number): GalleryItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    title: `${folder} ${i + 1}`,
    src: `/${folder}/${i + 1}.jpeg`,
    type: "image" as MediaType,
  }));
}

const SECTIONS: GallerySection[] = [
  {
    id: "mill-scale",
    label: "Mill Scale",
    icon: "",
    items: [
      ...folderItems("mill", 11, 1),
      { id: 200, title: "Mill Scale Hero",   src: "/hero-millscale.jpg",            type: "image" },
      { id: 201, title: "Mill Scale Export", src: "/products/mill-scale-hero.jpg",  type: "image" },
      { id: 202, title: "Mill Scale Cargo",  src: "/products/mill-scale-body.jpg",  type: "image" },
    ],
  },
  {
    id: "zinc-oxide",
    label: "Zinc Oxide",
    icon: "",
    items: [
      { id: 210, title: "Zinc Oxide Hero",    src: "/products/zinc-hero.jpg",  type: "image" },
      { id: 211, title: "Zinc Oxide Product", src: "/products/zinc-body.jpg",  type: "image" },
    ],
  },
  {
    id: "pet-flakes",
    label: "PET Flakes",
    icon: "",
    items: [
      ...folderItems("pet", 20, 300),
      { id: 400, title: "PET Flakes Hero",   src: "/products/pet-flakes-hero.jpg", type: "image" },
      { id: 401, title: "PET Flakes Export", src: "/products/pet-flakes-body.jpg", type: "image" },
    ],
  },
  {
    id: "fresh-produce",
    label: "Fresh Vegetables & Fruits",
    icon: "",
    items: [
      ...folderItems("frutnveg", 33, 500),
      { id: 600, title: "Fresh Produce Hero",   src: "/products/fresh-vegetables-hero.png", type: "image" },
      { id: 601, title: "Fresh Produce Export", src: "/products/fresh-vegetables-body.png", type: "image" },
    ],
  },
  {
    id: "leather",
    label: "Leather Goods",
    icon: "",
    items: [
      ...folderItems("leath", 13, 700),
      { id: 800, title: "Leather Goods Hero",   src: "/products/leather-goods-hero.jpg", type: "image" },
      { id: 801, title: "Leather Goods Export", src: "/products/leather-goods-body.jpg", type: "image" },
    ],
  },
  {
    id: "jute",
    label: "Jute & Jute Made Products",
    icon: "",
    items: [
      ...folderItems("jut", 16, 900),
      { id: 1000, title: "Jute Products Hero",  src: "/products/jute-hero.jpg", type: "image" },
      { id: 1001, title: "Jute Goods Export",   src: "/products/jute-body.jpg", type: "image" },
    ],
  },
  {
    id: "aggregate",
    label: "Aggregate / Gabbro / Limestone",
    icon: "",
    items: [
      ...folderItems("gabb", 28, 1100),
      { id: 1200, title: "Aggregate Hero",   src: "/products/aggregate-hero.jpg", type: "image" },
      { id: 1201, title: "Aggregate Import", src: "/products/aggregate-body.jpg", type: "image" },
    ],
  },
  {
    id: "coal",
    label: "Coal",
    icon: "",
    items: [
      { id: 1210, title: "Coal Stockpile", src: "/products/coal-hero.jpg", type: "image" },
      { id: 1211, title: "Coal Cargo",     src: "/products/coal-body.jpg", type: "image" },
    ],
  },
  {
    id: "auto-parts",
    label: "Automobile Spare Parts",
    icon: "",
    items: [
      { id: 1220, title: "HKS Japan Auto Parts", src: "/hero-port.jpg",      type: "image" },
      { id: 1221, title: "Auto Parts Logistics",  src: "/about-factory.jpg", type: "image" },
    ],
  },
  {
    id: "ship-breaking",
    label: "Ship Breaking",
    icon: "",
    items: [
      ...folderItems("shp", 19, 1300),
      { id: 1400, title: "Ship Breaking Yard",  src: "/hero-shipbreaking.jpg",            type: "image" },
      { id: 1401, title: "Ship Breaking Hero",  src: "/products/ship-breaking-hero.jpg",  type: "image" },
      { id: 1402, title: "Yard Overview",       src: "/products/ship-breaking-body.jpg",  type: "image" },
    ],
  },
  {
    id: "fisheries",
    label: "Fisheries",
    icon: "",
    items: folderItems("farm", 5, 1500),
  },
  {
    id: "videos",
    label: "Videos",
    icon: "",
    items: [
      { id: 1600, title: "Ship Breaking Operations", src: "/sb.mp4",          type: "video" },
      { id: 1601, title: "Gabbro Operations",        src: "/gbb.mp4",         type: "video" },
      { id: 1602, title: "Operations Overview",      src: "/videos/v.mp4",    type: "video" },
      { id: 1603, title: "Clip 1",                   src: "/videos/v1.mp4",   type: "video" },
      { id: 1604, title: "Clip 2",                   src: "/videos/v2.mp4",   type: "video" },
      { id: 1605, title: "Clip 3",                   src: "/videos/v3.mp4",   type: "video" },
      { id: 1606, title: "Clip 4",                   src: "/videos/v4.mp4",   type: "video" },
      { id: 1607, title: "Clip 5",                   src: "/videos/v5.mp4",   type: "video" },
      { id: 1608, title: "Clip 6",                   src: "/videos/v6.mp4",   type: "video" },
      { id: 1609, title: "Clip 7",                   src: "/videos/v7.mp4",   type: "video" },
      { id: 1610, title: "Clip 8",                   src: "/videos/v8.mp4",   type: "video" },
    ],
  },
];

/* ── Slide card ─────────────────────────────────── */
function Slide({ item, onOpen }: { item: GalleryItem; onOpen: (item: GalleryItem) => void }) {
  return (
    <div
      className={styles.slide}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item)}
    >
      {item.type === "video" ? (
        <div className={styles.slideVideo}>
          <video src={item.src} muted playsInline preload="metadata" className={styles.slideVideoEl} />
          <div className={styles.slideVideoOverlay}>
            <Play size={28} fill="white" />
          </div>
        </div>
      ) : (
        <div className={styles.slideImage}>
          <Image src={item.src} alt={item.title} fill sizes="280px" loading="lazy" className={styles.slideImg} />
        </div>
      )}

    </div>
  );
}

/* ── Carousel section ───────────────────────────── */
function CarouselSection({ section, onOpen }: { section: GallerySection; onOpen: (item: GalleryItem) => void }) {
  const trackRef   = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number | null>(null);
  const autoRef    = useRef(true);           // false while user is interacting
  const dragRef    = useRef({ active: false, startX: 0, startScroll: 0 });
  const resumeRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  const SLIDE_W = 296; // 280px slide + 16px gap
  const oneSetPx  = section.items.length * SLIDE_W;

  // How many full copies we need so the strip is always > 2× the viewport
  const REPS = Math.max(Math.ceil((1920 * 2) / oneSetPx) + 2, 6);
  const repeated = Array.from({ length: REPS }, (_, ri) =>
    section.items.map((item) => ({ ...item, _key: `${item.id}-r${ri}` }))
  ).flat();

  // --- RAF loop ---
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      if (autoRef.current) track.scrollLeft += 0.6;
      // Seamless loop: jump back/forward by exactly one set width
      if (track.scrollLeft >= oneSetPx * (REPS / 2)) track.scrollLeft -= oneSetPx;
      if (track.scrollLeft < 0)                       track.scrollLeft += oneSetPx;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [oneSetPx, REPS]);

  // --- Pause / resume helpers ---
  const pauseAuto = () => {
    autoRef.current = false;
    if (resumeRef.current) clearTimeout(resumeRef.current);
  };
  const resumeAuto = (delay = 1800) => {
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => { autoRef.current = true; }, delay);
  };

  // --- Mouse drag ---
  const onMouseDown = (e: React.MouseEvent) => {
    pauseAuto();
    dragRef.current = { active: true, startX: e.clientX, startScroll: trackRef.current!.scrollLeft };
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    e.preventDefault();
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    if (trackRef.current) trackRef.current.scrollLeft = dragRef.current.startScroll - dx;
  };
  const onMouseUp = () => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    resumeAuto();
  };

  // --- Touch swipe (browser handles momentum natively) ---
  const onTouchStart = () => pauseAuto();
  const onTouchEnd   = () => resumeAuto(2500);

  return (
    <div className={styles.carouselSection}>
      <div className={`container ${styles.sectionHeader}`}>
        <h2 className={styles.sectionTitle}>{section.label}</h2>
        <div className={styles.sectionLine} />
      </div>

      <div className={styles.trackViewport}>
        <div
          className={styles.track}
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {repeated.map((item) => (
            <Slide key={item._key} item={item} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Lightbox ───────────────────────────────────── */
function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className={styles.lightbox} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        <div className={styles.lightboxMedia}>
          {item.type === "video" ? (
            <video src={item.src} controls autoPlay playsInline className={styles.lightboxVideo} />
          ) : (
            <Image src={item.src} alt={item.title} fill sizes="90vw" className={styles.lightboxImage} priority />
          )}
        </div>
        <p className={styles.lightboxTitle}>{item.title}</p>
      </div>
    </div>,
    document.body
  );
}

/* ── Page ───────────────────────────────────────── */
export default function GalleryPage() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const handleOpen  = useCallback((item: GalleryItem) => setLightboxItem(item), []);
  const handleClose = useCallback(() => setLightboxItem(null), []);

  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Explore visual highlights of ARIKO International's global trading, maritime scrapping, and clean energy operations."
        breadcrumb={[{ label: "Gallery" }]}
        image="/hero-port.jpg"
        tag="Visual Highlights"
      />

      <main className={styles.galleryPage}>
        {SECTIONS.map((section) => (
          <CarouselSection key={section.id} section={section} onOpen={handleOpen} />
        ))}
      </main>

      {mounted && lightboxItem && <Lightbox item={lightboxItem} onClose={handleClose} />}
    </>
  );
}
