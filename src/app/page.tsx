'use client'

import CardSection from "@/components/sections/card-section";
import HeroSection from "@/components/sections/hero-section";
import HowItsWorksSection from "@/components/sections/how-its-works-section";
import PricingSection from "@/components/sections/pricing-section";

 const Home = () => {

  return (
    <>
    <HeroSection />
    <HowItsWorksSection />
    <CardSection />
    <PricingSection />
    </>
  );
}

export default Home;
