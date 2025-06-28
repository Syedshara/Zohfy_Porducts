import HeroSection from "../components/HeroSection";
import ArcaneExpertise from "../components/ArcaneExpertise";
import ProductShowcase from "../components/ProductShowcase";
import RealmsWeServe from "../components/RealmsWeServe";
import ConvoboxRitual from "../components/ConvoboxRitual";
import TestimonialsSection from "../components/TestimonialsSection";
import SummonUsSection from "../components/SummonUsSection";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ArcaneExpertise />
      <ProductShowcase />
      <RealmsWeServe />
      <ConvoboxRitual />
      <PricingSection />
      <TestimonialsSection />
      <SummonUsSection />
    </div>
  );
}
