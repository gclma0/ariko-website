export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Export",
    href: "/export",
    children: [
      { label: "Mill Scale", href: "/export/mill-scale" },
      { label: "Zinc Oxide", href: "/export/zinc-oxide" },
      { label: "PET Flakes", href: "/export/pet-flakes" },
      { label: "Vegetables & Fruits", href: "/export/vegetables-fruits" },
      { label: "Leather Goods", href: "/export/leather-goods" },
      { label: "Jute Products", href: "/export/jute-products" },
    ],
  },
  {
    label: "Import",
    href: "/import",
    children: [
      { label: "Aggregate", href: "/import/aggregate" },
      { label: "Coal", href: "/import/coal" },
      { label: "Auto Spare Parts", href: "/import/auto-spare-parts" },
    ],
  },
  { label: "Ship Breaking", href: "/ship-breaking" },
  { label: "Solar Power", href: "/solar-power" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];
