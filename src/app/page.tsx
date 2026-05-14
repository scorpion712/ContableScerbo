import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { CombinedSections } from "@/components/combined-sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <CombinedSections />
    </>
  );
}