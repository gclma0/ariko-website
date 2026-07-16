export interface Product {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  details: string[];
  image: string;
  icon: string;
}

export const EXPORT_PRODUCTS: Product[] = [
  {
    slug: "mill-scale",
    name: "Mill Scale",
    shortDesc:
      "We are the 1st company in Bangladesh to start mill scale export from Bangladesh from 2005.",
    longDesc:
      "Mill scale is a flaky surface that forms on hot-rolled steel and iron through the oxidation of the metal surface during rolling. ARIKO International has been the pioneer in Bangladesh for exporting mill scale globally since 2005. Our mill scale meets the highest international quality standards.",
    details: [
      "Fe content: 68-72%",
      "Available in bulk and bagged form",
      "Monthly capacity: 5,000 MT+",
      "Shipped from Chattogram Port",
      "Certificate of Origin provided",
      "Quality inspection available",
    ],
    image: "/hero-millscale.jpg",
    icon: "⚙️",
  },
  {
    slug: "zinc-oxide",
    name: "Zinc Oxide",
    shortDesc:
      "High-purity zinc oxide exported globally, sourced from certified manufacturers.",
    longDesc:
      "ARIKO International exports premium zinc oxide, widely used in rubber manufacturing, ceramics, pharmaceuticals, and agriculture. Our zinc oxide is sourced from certified manufacturers and meets international purity standards.",
    details: [
      "Purity: 99%+ ZnO",
      "Available in 25kg/50kg bags",
      "Used in rubber, ceramics, pharma",
      "Monthly capacity: 2,000 MT",
      "SGS inspection available",
      "REACH compliant",
    ],
    image: "/about-factory.jpg",
    icon: "🔬",
  },
  {
    slug: "pet-flakes",
    name: "PET Flakes",
    shortDesc:
      "Recycled PET flakes from post-consumer plastic bottles, exported for sustainable manufacturing.",
    longDesc:
      "Our PET flakes are sourced from post-consumer PET bottles, cleaned, sorted, and processed to international recycling standards. We export to manufacturers of polyester fiber, strapping bands, and sheets.",
    details: [
      "Color: Clear / Mixed",
      "IV: 0.72-0.82 dl/g",
      "Moisture: < 0.5%",
      "Bulk density: 300-350 kg/m³",
      "Available in 1 MT big bags",
      "Consistent monthly supply",
    ],
    image: "/hero-port.jpg",
    icon: "♻️",
  },
  {
    slug: "vegetables-fruits",
    name: "Vegetables & Fruits",
    shortDesc:
      "Fresh Bangladeshi agricultural produce exported to markets across the Middle East and Europe.",
    longDesc:
      "Bangladesh produces an abundance of fresh vegetables and tropical fruits. ARIKO International facilitates export of premium grade produce to international buyers in the Middle East, UK, and Europe.",
    details: [
      "Products: Bitter gourd, snake gourd, drumstick, mango, lemon",
      "Export destinations: UAE, UK, Italy, Germany",
      "Cold chain logistics",
      "Phytosanitary certified",
      "Year-round availability",
      "Custom packaging available",
    ],
    image: "/hero-solar.jpg",
    icon: "🥦",
  },
  {
    slug: "leather-goods",
    name: "Leather Goods",
    shortDesc:
      "Premium finished leather and leather goods from Bangladesh's world-renowned tanneries.",
    longDesc:
      "Bangladesh is one of the world's leading leather exporters. ARIKO International connects international buyers with Bangladesh's finest tanneries and leather goods manufacturers, offering a full range of finished leather and leather products.",
    details: [
      "Types: Crust, wet blue, finished leather",
      "Animal: Cow, buffalo, goat",
      "Certifications: LWG, REACH",
      "Custom colors & finishes",
      "MOQ: 1,000 sq ft",
      "Monthly capacity: 100,000+ sq ft",
    ],
    image: "/about-factory.jpg",
    icon: "👜",
  },
  {
    slug: "jute-products",
    name: "Jute Products",
    shortDesc:
      "Raw jute and jute made goods — Bangladesh's golden fiber exported worldwide.",
    longDesc:
      "Bangladesh produces the world's finest golden jute. ARIKO International exports raw jute fiber as well as finished jute products including jute bags, yarn, and fabric to global markets.",
    details: [
      "Products: Raw jute, jute bags, jute yarn, hessian cloth",
      "Grade: TD, SB, BTR",
      "Certifications: Organic available",
      "Export: EU, USA, India, China",
      "Monthly capacity: 500 MT",
      "Customizable packaging & branding",
    ],
    image: "/hero-port.jpg",
    icon: "🌿",
  },
];
