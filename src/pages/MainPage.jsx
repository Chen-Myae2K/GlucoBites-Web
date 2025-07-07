import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HeaderSection from "../components/HeaderSection";
import AboutUsSection from "../components/AboutUsSection";
import SmoothScroll from "../components/ui/SmoothScroll";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <SmoothScroll>
      <HeaderSection />
      <HeroSection />
      <AboutUsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection/>
      <Footer />
    </SmoothScroll>
  );
};

export default MainPage;
