import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";
import { IMPORT_PRODUCTS } from "@/data/import-products";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import styles from "../../export/[slug]/page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return IMPORT_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = IMPORT_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.shortDesc };
}

export default async function ImportProductPage({ params }: Props) {
  const { slug } = await params;
  const product = IMPORT_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const idx = IMPORT_PRODUCTS.indexOf(product);
  const prev = IMPORT_PRODUCTS[idx - 1];
  const next = IMPORT_PRODUCTS[idx + 1];

  return (
    <>
      <PageHero
        title={product.name}
        subtitle={product.shortDesc}
        breadcrumb={[{ label: "Import", href: "/import" }, { label: product.name }]}
        image={product.image}
        tag="Import Product"
      />

      <ScrollRevealWrapper>
        <section className="section">
          <div className="container">
            <div className={styles.contentGrid}>
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
                  <p className={styles.ctaDesc}>Contact our import team for pricing, lead times, and delivery options.</p>
                  <Link href="/contact-us" className={styles.ctaBtn} id={`import-${product.slug}-contact`}>
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>
            </div>
            <nav className={styles.productNav}>
              {prev ? (
                <Link href={`/import/${prev.slug}`} className={styles.navBtn}>
                  <ArrowLeft size={16} />
                  <div><span className={styles.navLabel}>Previous</span><span className={styles.navName}>{prev.name}</span></div>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/import/${next.slug}`} className={`${styles.navBtn} ${styles.navBtnRight}`}>
                  <div><span className={styles.navLabel}>Next</span><span className={styles.navName}>{next.name}</span></div>
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
