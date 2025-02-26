"use client";
import dynamic from "next/dynamic";

// Keep SSR enabled for faster first paint
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: true });
const HeroSection = dynamic(() => import("./components/landingpage/HeroSection"), { ssr: true });

// Lazy load below-the-fold sections with a fallback loading component
const Loading = () => <div>Loading...</div>;

const Aboutus = dynamic(() => import("./components/landingpage/AboutUs"), { ssr: false, loading: () => <Loading /> });
const Services = dynamic(() => import("./components/landingpage/Services"), { ssr: false, loading: () => <Loading /> });
const ChooseUs = dynamic(() => import("./components/landingpage/ChooseUs"), { ssr: false, loading: () => <Loading /> });
const Testimonals = dynamic(() => import("./components/landingpage/Testimonals"), { ssr: false, loading: () => <Loading /> });
const Contact = dynamic(() => import("./components/landingpage/Contact"), { ssr: false, loading: () => <Loading /> });

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Aboutus />
      <Services />
      <ChooseUs />
      <Testimonals />
      <Contact />
    </>
  );
}
