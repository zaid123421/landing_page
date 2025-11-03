"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const html = document.documentElement;

    const isMobile = window.innerWidth <= 768;
    html.style.scrollBehavior = isMobile ? "smooth" : "auto";

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("a[href^='#']");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const cancelCurrent = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href?.startsWith("#")) return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      const headerEl = document.querySelector("header") as HTMLElement | null;
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;

      const scrollContainer =
        document.scrollingElement || document.body || document.documentElement;
      const startY = scrollContainer.scrollTop;
      const targetY = target.offsetTop - headerHeight;

      const distance = Math.abs(startY - targetY);
      const duration = clamp(distance / 0.9, 900, 2500);

      cancelCurrent();
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);

        scrollContainer.scrollTop = startY + (targetY - startY) * eased;

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          scrollContainer.scrollTop = targetY;
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      cancelCurrent();
      links.forEach((link) => link.removeEventListener("click", handleClick));
      html.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <HomeSection id="home" />
      <ServicesSection id="services" />
      <AboutSection id="about" />
      <ProcessSection id="process" />
      <TechnologiesSection id="technologies" />
      <ContactSection id="contact" />
      <Footer />
    </>
  );
}
