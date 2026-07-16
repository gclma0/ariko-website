import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import OverviewCards from "@/components/home/OverviewCards";
import ScrollRevealWrapper from "@/components/ui/ScrollRevealWrapper";

export const metadata: Metadata = {
  title: "ARIKO International | Leading Mill Scale Exporter from Bangladesh",
  description:
    "Bangladesh's premier trading company — exporting mill scale, zinc oxide, PET flakes, jute products and importing auto spare parts. 4th largest ship scraper. Est. 1968.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <ScrollRevealWrapper>
        <ServicesGrid />
        <OverviewCards />
      </ScrollRevealWrapper>
    </>
  );
}
