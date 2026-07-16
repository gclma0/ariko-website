import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { EXPORT_PRODUCTS } from "@/data/export-products";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXPORT_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = EXPORT_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ExportProductPage({ params }: Props) {
  const { slug } = await params;
  const product = EXPORT_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const idx = EXPORT_PRODUCTS.indexOf(product);
  const prev = EXPORT_PRODUCTS[idx - 1];
  const next = EXPORT_PRODUCTS[idx + 1];

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.shortDesc}
        breadcrumb={[{ label: "Export", href: "/export" }, { label: product.name }]}
        image={product.image}
        tag="Export Product"
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            <div className={styles.contentGrid}>
              {/* Main Content */}
              <div className={`${styles.mainContent} reveal`}>
                <div className="divider" />
                <h2 className={styles.sectionTitle}>
                  About <span className="text-gradient">{product.name}</span>
                </h2>
                <p className={styles.bodyText}>{product.longDesc}</p>

                <div className={styles.imageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={styles.productImage}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <aside className={`${styles.sidebar} reveal`} style={{ transitionDelay: "0.2s" }}>
                <div className={styles.specCard}>
                  <h3 className={styles.specTitle}>Product Specifications</h3>
                  <ul className={styles.specList}>
                    {product.details.map((detail, i) => (
                      <li key={i} className={styles.specItem}>
                        <CheckCircle2 size={16} className={styles.specIcon} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.ctaCard}>
                  <h3 className={styles.ctaTitle}>Interested in {product.name}?</h3>
                  <p className={styles.ctaDesc}>
                    Contact our export team for pricing, specifications, and shipping details.
                  </p>
                  <Link href="/contact-us" className={styles.ctaBtn} id={`export-${product.slug}-contact`}>
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>
            </div>

            {/* Prev/Next Navigation */}
            <nav className={styles.productNav} aria-label="Product navigation">
              {prev ? (
                <Link href={`/export/${prev.slug}`} className={styles.navBtn}>
                  <ArrowLeft size={16} />
                  <div>
                    <span className={styles.navLabel}>Previous</span>
                    <span className={styles.navName}>{prev.name}</span>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/export/${next.slug}`} className={`${styles.navBtn} ${styles.navBtnRight}`}>
                  <div>
                    <span className={styles.navLabel}>Next</span>
                    <span className={styles.navName}>{next.name}</span>
                  </div>
                  <ArrowRight size={16} />
                </Link>
              ) : <div />}
            </nav>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
