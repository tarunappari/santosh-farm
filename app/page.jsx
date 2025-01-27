"use client"
import Aboutus from "./components/landingpage/AboutUs";
import HeroSection from "./components/landingpage/HeroSEction";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Aboutus />
    </div>
  );
}
