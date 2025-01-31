"use client"
import Aboutus from "./components/landingpage/AboutUs";
import HeroSection from "./components/landingpage/HeroSection";
import Services from './components/landingpage/Services'
import Navbar from "./components/Navbar";
import ChooseUs from './components/landingpage/ChooseUs'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Aboutus />
      <Services />
      <ChooseUs />
    </div>
  );
}
