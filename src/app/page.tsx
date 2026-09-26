import BackgroundGears from "@/components/graphics/BackgroundGears";
import ContentBlock from "@/components/landing-page/ContentBlock";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import StatsBanner from "@/components/landing-page/StatsBanner";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      {/* <BackgroundGears />
      <StatsBanner />
      <ContentBlock /> */}
      <Footer />
    </>
  );
}
