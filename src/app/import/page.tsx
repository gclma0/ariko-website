import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { IMPORT_PRODUCTS } from "@/data/import-products";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Import",
  description:
    "ARIKO International imports aggregate, coal, and genuine HKS Japan auto spare parts into Bangladesh.",
};

export default function ImportPage() {
  return (
    <>
      <PageHero
        title="Import Division"
        subtitle="Connecting Bangladesh's industries to the best global suppliers — from Japanese auto parts to industrial aggregates."
        breadcrumb={[{ label: "Import" }]}
        image="/hero-port.jpg"
        tag="Global Sourcing"
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            <div className={`${styles.sectionHeader} reveal`}>
              <div className="divider" />
              <p className={styles.eyebrow}>Our Import Products</p>
              <h2 className={styles.sectionTitle}>
                World-Class Products,{" "}
                <span className="text-gradient">Delivered to Bangladesh</span>
              </h2>
              <p className={styles.sectionDesc}>
                Authorized dealer of HKS Japan since 2004. We also source premium construction materials
                and energy commodities from global suppliers.
              </p>
            </div>

            <div className={styles.productsGrid}>
              {IMPORT_PRODUCTS.map((product, i) => (
                <article
                  key={product.slug}
                  className={`${styles.productCard} reveal`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.productImageWrap}>
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
                  <div className={styles.productBody}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDesc}>{product.shortDesc}</p>
                    <Link
                      href={`/import/${product.slug}`}
                      className={styles.productLink}
                      id={`import-${product.slug}`}
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
