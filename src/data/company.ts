export interface Office {
  id: string;
  label: string;
  address: string;
  phone?: string;
  fax?: string;
  email: string;
  contactPerson?: string;
  altEmail?: string;
  skype?: string;
}

export const COMPANY: {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  webmail: string;
  founded: number;
  socialMedia: { facebook: string; twitter: string; linkedin: string };
  managingDirector: {
    name: string;
    role: string;
    phone: string;
    emails: string[];
    websites: string[];
  };
  offices: Office[];
  stats: { value: number; suffix?: string; label: string; prefix?: string }[];
  welcomeText: string;
  welcomeText2: string;
  mission: string;
  vision: string;
  spirit: string;
  groupCompanies: string[];
  associateCompanies: { name: string; url: string }[];
  groupHistory: string;
} = {
  name: "ARIKO International",
  tagline: "Exporters of Mill Scale & Importers of Heavy Melting Scrap",
  description:
    "ARIKO International is a sister concern of East Queen Group, one of Bangladesh's oldest and most respected industrial conglomerates, established in 1968.",
  phone: "+880 1713-042261",
  email: "shahrear@scrapbangla.com",
  webmail: "https://mail.scrapbangla.com",
  founded: 1968,
  socialMedia: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  managingDirector: {
    name: "Shahrear Morshed",
    role: "Managing Director",
    phone: "+880 1713-042261",
    emails: ["shahrear@scrapbangla.com", "shahrear@eastqueengroup.com"],
    websites: ["www.scrapbangla.com", "www.eastqueengroup.com"],
  },
  offices: [
    {
      id: "chattogram",
      label: "Chattogram Office",
      address: "House 146, Road 1/1, CDA R/A Agrabad, Chattogram-4100, Bangladesh.",
      phone: "+880 31 2521504",
      fax: "+880 31 2521564",
      email: "shahrear@scrapbangla.com",
    },
    {
      id: "dhaka",
      label: "Dhaka Office",
      address: "House # 19, Road # 55, Gulshan-2, Dhaka-1212, Bangladesh.",
      phone: "+880-02-9840654, 88-02-9840817, +88-02-8824204, 88-02-8829335",
      fax: "+88-02-8821042, 88-02-9861809",
      email: "shahrear@scrapbangla.com",
    },
    {
      id: "dubai",
      label: "Dubai Office",
      address: "Sunshine Building 2, M-Floor M05 M06, Omar Bin Al Khattab Road, Fish Roundabout, Naif, Deira Dubai-U.A.E.",
      email: "shahrear@scrapbangla.com",
    },
  ],
  stats: [
    { value: 55, suffix: "+", label: "Years of Excellence" },
    { value: 1981, label: "Ship Breaking Since", prefix: "" },
    { value: 4, suffix: "th", label: "Largest Ship Scraper in BD" },
    { value: 9, suffix: "+", label: "Sister Companies" },
  ],
  welcomeText: `Which is located in the Chittagong city, Commercial capital of Bangladesh. Registered in 2009, ARIKO International mainly specializes in the export of mill scale and has developed to a 25 member company.`,
  welcomeText2: `Besides mill scale, we're also very interested in the import of heavy melting scrap (HMS 1/2), we have successfully established business relations with many suppliers from South-East Asia, Mid-East, Europe and American market for scrap steels. Suppliers of steels scraps and other related products from all over the world are warmly welcomed to cooperate with us on the basis of equality and mutual benefit.`,
  mission: `To become one of the best and successful exporting, importing and indenting company of the country with continuous good business track record.`,
  vision: `To lead Bangladesh's industrial transformation by delivering excellence, fostering innovation, and building global partnerships that create value for generations.`,
  spirit: `Enterprise is our spirit.`,
  groupCompanies: [
    "ARIKO International",
    "East Queen Shipping Limited",
    "Bay Gas Limited",
    "Syedpur Fisheries and Farms",
    "Bangladesh Star Containers Limited",
  ],
  associateCompanies: [
    { name: "Adnan PSF Industries Limited", url: "http://www.adnanpsf.com" },
    { name: "Icon Fashion", url: "http://www.iconshopbd.com" },
    { name: "Alliance Leather Goods and Footwear Limited", url: "http://www.alliancefootwearbd.com" },
    { name: "Eco Trade International", url: "http://www.ecotradebd.com" },
    { name: "Syedpur Fisheries & Farms", url: "https://sffagro.com/" },
  ],
  groupHistory: `ARIKO International is a sister concern of EAST QUEEN GROUP, which is one of the oldest groups of Bangladesh and the 4th largest and oldest ship scrapers of the country. Established in the year 1968, the group has gone through many successes continuously. Our mission is to deliver excellence with integrity and mutual business benefits to all stakeholders across the globe.`,
};
