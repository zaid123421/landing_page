"use client";

import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import { useEffect, useState } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <HeroSection id="hero" />
      <ServicesSection id="services" />
      <AboutSection id="about" />
      <ProcessSection id="process" />
      <TechnologiesSection id="technologies" />
      <ContactSection id="contact" />
    </>
  );
}
