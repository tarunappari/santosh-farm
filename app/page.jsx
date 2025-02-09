"use client";
import dynamic from "next/dynamic";

const Aboutus = dynamic(() => import("./components/landingpage/AboutUs"), { ssr: false });
const HeroSection = dynamic(() => import("./components/landingpage/HeroSection"), { ssr: false });
const Services = dynamic(() => import("./components/landingpage/Services"), { ssr: false });
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const ChooseUs = dynamic(() => import("./components/landingpage/ChooseUs"), { ssr: false });
const Testimonals = dynamic(() => import("./components/landingpage/Testimonals"), { ssr: false });
const Contact = dynamic(() => import("./components/landingpage/Contact"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Aboutus />
      <Services />
      <ChooseUs />
      <Testimonals />
      <Contact />
    </div>
  );
}

