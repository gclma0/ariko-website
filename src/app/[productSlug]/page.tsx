import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { EXPORT_PRODUCTS } from "@/data/export-products";
import { IMPORT_PRODUCTS } from "@/data/import-products";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ productSlug: string }>;
}

export async function generateStaticParams() {
  const exportSlugs = EXPORT_PRODUCTS.map((p) => ({ productSlug: p.slug }));
  const importSlugs = IMPORT_PRODUCTS.map((p) => ({ productSlug: p.slug }));
  return [...exportSlugs, ...importSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productSlug } = await params;
  const product =
    EXPORT_PRODUCTS.find((p) => p.slug === productSlug) ||
    IMPORT_PRODUCTS.find((p) => p.slug === productSlug);

  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ProductFlatPage({ params }: Props) {
  const { productSlug } = await params;
  const product =
    EXPORT_PRODUCTS.find((p) => p.slug === productSlug) ||
    IMPORT_PRODUCTS.find((p) => p.slug === productSlug);

  if (!product) notFound();

  // Find in combined list for prev/next navigation
  const allProducts = [...EXPORT_PRODUCTS, ...IMPORT_PRODUCTS];
  const idx = allProducts.indexOf(product);
  const prev = allProducts[idx - 1];
  const next = allProducts[idx + 1];

  const isExport = EXPORT_PRODUCTS.some((p) => p.slug === productSlug);

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.shortDesc}
        breadcrumb={[
          { label: isExport ? "Export" : "Import", href: isExport ? "/export" : "/import" },
          { label: product.name }
        ]}
        image={product.heroImage || product.image}
        videoBackground={product.videoBackground}
        heroImagePosition={product.heroImagePosition}
        tag={isExport ? "Export Product" : "Import Product"}
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            <div className={styles.contentGrid}>
              {/* Main Content */}
              <div className={`${styles.mainContent} reveal-left`}>
                <div className="divider" />
                <h2 className={styles.sectionTitle}>
                  About <span className="text-gradient">{product.name}</span>
                </h2>
                {product.longDescHtml ? (
                  <p
                    className={styles.bodyText}
                    dangerouslySetInnerHTML={{ __html: product.longDescHtml }}
                  />
                ) : (
                  <p className={styles.bodyText}>{product.longDesc}</p>
                )}

                <div className={`${styles.imageWrap} reveal`} style={{ transitionDelay: "0.5s" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={styles.productImage}
                    style={{ objectFit: product.imageObjectFit ?? "cover" }}
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
                    Contact our trade team for pricing, specifications, and shipping details.
                  </p>
                  <Link href="/contact-us" className={styles.ctaBtn} id={`flat-${product.slug}-contact`}>
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>
            </div>

            {/* Prev/Next Navigation */}
            <nav className={styles.productNav} aria-label="Product navigation">
              {prev ? (
                <Link href={`/${prev.slug}`} className={styles.navBtn}>
                  <ArrowLeft size={16} />
                  <div>
                    <span className={styles.navLabel}>Previous</span>
                    <span className={styles.navName}>{prev.name}</span>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/${next.slug}`} className={`${styles.navBtn} ${styles.navBtnRight}`}>
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
