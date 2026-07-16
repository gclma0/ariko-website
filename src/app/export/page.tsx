import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { EXPORT_PRODUCTS } from "@/data/export-products";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Export",
  description:
    "ARIKO International exports mill scale, zinc oxide, PET flakes, vegetables & fruits, leather goods, and jute products from Bangladesh to global markets.",
};

export default function ExportPage() {
  return (
    <>
      <PageHero
        title="Export Division"
        subtitle="From Bangladesh to the world — premium industrial and agricultural commodities exported globally."
        breadcrumb={[{ label: "Export" }]}
        image="/hero-millscale.jpg"
        tag="Global Trade"
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="divider" />
              <p className={styles.eyebrow}>Our Export Products</p>
              <h2 className={styles.sectionTitle}>
                Premium Commodities,{" "}
                <span className="text-gradient">Global Reach</span>
              </h2>
              <p className={styles.sectionDesc}>
                We are the 1st company in Bangladesh to start mill scale export globally (since 2005).
                Today, we export across six product categories to 20+ countries.
              </p>
            </div>

            <div className={styles.productsGrid}>
              {EXPORT_PRODUCTS.map((product, i) => (
                <article
                  key={product.slug}
                  className={`${styles.productCard} reveal`}
                  style={{ transitionDelay: `${(i % 3) * 0.2}s` }}
                >
                  <div className={`${styles.productImageWrap} reveal`} style={{ transitionDelay: `${(i % 3) * 0.2}s` }}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.productImage}
                    />
                    <div className={styles.productImageOverlay} />
                    <span className={styles.productIcon}>{product.icon}</span>
                  </div>
                  <div className={`${styles.productBody} reveal`} style={{ transitionDelay: `${(i % 3) * 0.2 + 0.4}s` }}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDesc}>{product.shortDesc}</p>
                    <Link
                      href={`/${product.slug}`}
                      className={styles.productLink}
                      id={`export-${product.slug}`}
                    >
                      View Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
