import React from "react";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";

function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}

export default Home;
