import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import ProductSection from "@/components/landing/ProductSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterCTA from "@/components/landing/FooterCTA";
import VisitCounter from "@/components/landing/VisitCounter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <AuthoritySection />
      <ProductSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
      <VisitCounter />
    </main>
  );
};

export default Index;
