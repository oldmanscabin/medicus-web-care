import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyMedicus from "@/components/WhyMedicus";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <WhyMedicus />
      <Testimonials />
      <CTABanner />
    </main>
  );
};

export default Index;
