"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { X } from "lucide-react";
import styles from "./page.module.css";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: "export" | "import" | "ship-breaking" | "solar-power";
  categoryLabel: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Vibrant Cargo Port Logistics",
    image: "/hero-port.jpg",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 2,
    title: "Ship Recycling Operations on the Shore",
    image: "/hero-shipbreaking.jpg",
    category: "ship-breaking",
    categoryLabel: "Ship Scrapping",
  },
  {
    id: 3,
    title: "Sun-drenched Modern Solar Farm",
    image: "/hero-solar.jpg",
    category: "solar-power",
    categoryLabel: "Clean Energy",
  },
  {
    id: 4,
    title: "High-grade Steel Mill Scale Export Sourcing",
    image: "/products/mill-scale-body.jpg",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 5,
    title: "High-Purity Zinc Oxide/Dust",
    image: "/products/zinc-body.jpg",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 6,
    title: "Recycled PET Flakes Sourcing and Sorting",
    image: "/products/pet-flakes-body.jpg",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 7,
    title: "Fresh Agricultural Produce for Global Markets",
    image: "/products/fresh-vegetables-body.png",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 8,
    title: "Finished Leather Goods Manufacturing",
    image: "/products/leather-goods-body.png",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 9,
    title: "Jute and Jute-Made Fiber Materials",
    image: "/products/jute-body.jpg",
    category: "export",
    categoryLabel: "Export Trade",
  },
  {
    id: 10,
    title: "Premium Gabbro / Limestone Aggregate Import",
    image: "/products/aggregate-body.jpg",
    category: "import",
    categoryLabel: "Import Trade",
  },
  {
    id: 11,
    title: "Industrial Coal Cargo Sourcing and Distribution",
    image: "/products/coal-body.png",
    category: "import",
    categoryLabel: "Import Trade",
  },
  {
    id: 12,
    title: "Coal Loading Terminal Operations",
    image: "/products/coal-hero.png",
    category: "import",
    categoryLabel: "Import Trade",
  },
  {
    id: 13,
    title: "East Queen Group Industrial Factory Site",
    image: "/about-factory.jpg",
    category: "ship-breaking",
    categoryLabel: "Ship Scrapping",
  },
];

type CategoryFilter = "all" | "export" | "import" | "ship-breaking" | "solar-power";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lightboxItem) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [lightboxItem]);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  const filters: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Works" },
    { value: "export", label: "Export Trade" },
    { value: "import", label: "Import Operations" },
    { value: "ship-breaking", label: "Ship Scrapping" },
    { value: "solar-power", label: "Clean Energy" },
  ];

  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Explore visual highlights of ARIKO International's global trading, maritime scrapping, and clean energy operations."
        breadcrumb={[{ label: "Gallery" }]}
        image="/hero-port.jpg"
        tag="Visual Highlights"
      />

      <ScrollRevealWrapper>
        <section className={`section ${styles.gallerySection}`}>
          <div className="container">
            {/* Filter Bar */}
            <div className={styles.filterBar}>
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={`${styles.filterBtn} ${
                    activeFilter === filter.value ? styles.filterBtnActive : ""
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className={styles.grid}>
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className={styles.card}
                  onClick={() => setLightboxItem(item)}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.tag}>{item.categoryLabel}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>

      {/* Lightbox Modal */}
      {mounted && lightboxItem && createPortal(
        <div
          className={styles.lightbox}
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setLightboxItem(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <div className={styles.lightboxImageWrap}>
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            </div>
            <div className={styles.lightboxCaption}>
              <h4 className={styles.lightboxTitle}>{lightboxItem.title}</h4>
              <span className={styles.lightboxTag}>{lightboxItem.categoryLabel}</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
