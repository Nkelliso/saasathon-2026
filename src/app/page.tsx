import ContentBlock from "@/components/landing-page/ContentBlock";
import FaqSection from "@/components/landing-page/FaqSection";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import PricingSection from "@/components/landing-page/PricingSection";
import RoiSection from "@/components/landing-page/RoiSection";
import StatsBanner from "@/components/landing-page/StatsBanner";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <StatsBanner />
      <RoiSection />
      <ContentBlock />
      <PricingSection />
      <FaqSection />
      <Footer />
    </>
  );
}
