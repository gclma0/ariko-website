import type { Product } from "./export-products";

export const IMPORT_PRODUCTS: Product[] = [
  {
    slug: "import-aggregate",
    name: "Aggregate / Gabbro / Limestone",
    shortDesc:
      "Crushed stone, gravel, and sand aggregate imported for Bangladesh's booming construction sector.",
    longDesc:
      "ARIKO International imports premium construction aggregate including crushed stone, gravel, and sand to support Bangladesh's rapidly growing construction and infrastructure sector.",
    details: [
      "Types: Crushed stone, gravel, sand",
      "Sizes: 5mm, 10mm, 20mm, 40mm",
      "Sources: Vietnam, India, Malaysia",
      "Shipping: Bulk vessel, 5,000-30,000 MT",
      "Delivery: Chattogram & Mongla Port",
      "Test certificates available",
    ],
    heroImage: "/products/aggregate-hero.jpg",
    videoBackground: "/gbb.mp4",
    image: "/products/aggregate-body.jpg",
    icon: "🪨",
  },
  {
    slug: "import-coal",
    name: "Coal",
    shortDesc:
      "Thermal and coking coal imported from global sources for industrial and power generation use.",
    longDesc:
      "We import high-quality thermal and coking coal to meet the growing energy and industrial demands of Bangladesh. Our sourcing spans Indonesia, Australia, and South Africa.",
    details: [
      "Types: Thermal coal, coking coal",
      "GCV: 5,000-6,500 kcal/kg",
      "Sulfur: < 1%",
      "Sources: Indonesia, Australia, South Africa",
      "Capacity: 10,000-50,000 MT per shipment",
      "ASTM/ISO analysis reports",
    ],
    heroImage: "/products/coal-hero.jpg",
    image: "/products/coal-body.jpg",
    icon: "⛏️",
  },
  {
    slug: "import-automobile-spare-parts",
    name: "Automobile Spare Parts",
    shortDesc:
      "Authorized importer of genuine Japanese automotive parts and accessories, serving Bangladesh since 2004.",
    longDesc:
      "Since 2004, ARIKO International has served as an authorized dealer of HKS Japan products in Bangladesh, supplying premium automotive components to the local market. Our portfolio includes car air filters, oil filters, exhaust systems, performance tuning parts, and auto lamps sourced from Depo (Taiwan) and Eagle Eyes. We are also the country representative for Model Automotive Parts and HnD Automotive Group, two internationally recognized automotive parts companies.",
    longDescHtml: `Since 2004, ARIKO International has served as an authorized dealer of <strong>HKS Japan</strong> products in Bangladesh, supplying premium automotive components to the local market. Our portfolio includes car air filters, oil filters, exhaust systems, performance tuning parts, and auto lamps sourced from <strong>Depo (Taiwan)</strong> and <strong>Eagle Eyes</strong>.<br/><br/>We are also the country representative for <a href="https://modelautomotiveparts.com/" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent);font-weight:600;text-decoration:underline;text-underline-offset:3px;">Model Automotive Parts</a> and <a href="https://hndautomotiveparts.com/pages/about-us" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent);font-weight:600;text-decoration:underline;text-underline-offset:3px;">HnD Automotive Group</a> — two internationally recognized automotive parts companies trusted across global markets.`,
    details: [
      "Brands: HKS Japan, Depo Taiwan, Eagle Eyes",
      "Products: Air filters, oil filters, exhaust, tuning parts, auto lamps",
      "Coverage: All major Japanese makes",
      "Warranty: Manufacturer warranty included",
      "Dealer since: 2004",
      "Delivery: Nationwide in Bangladesh",
    ],
    heroImage: "/products/auto-hero.jpg",
    heroImagePosition: "center center",
    image: "/products/auto-body.jpg",
    imageObjectFit: "contain",
    icon: "🚗",
  },
];
