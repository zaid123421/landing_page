'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";

export default function AboutSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="bg-gradient-to-tr from-[#0C1A2B] to-[#1C2842] relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
    >
      <div className="mb-8 md:mb-0 md:pr-12 pt-[150px]">
        <h2 className="text-4xl md:text-5xl font-bold mt-8 md:mt-0 mb-4 text-white text-center">
          About Us
        </h2>
        <div className="flex justify-between">
          <Image src="/about.png" alt="about_image" width={400} height={400} className="hidden lg:block" />
          <p className="max-w-[700px] leading-[1.7] text-white text-lg md:text-xl text-justify pl-[25px] flex items-center">
            We are a passionate team dedicated to providing innovative solutions that help
            businesses grow and succeed, with a focus on delivering high-quality services
            tailored to our clients &#39; needs. Sweetspot is a specialized digital agency offering
            fully integrated digital services, accompanying startups and established businesses
            from concept to launch. We believe that true digital success is achieved only at the
            intersection of technology, design, and performance — the perfect balance we call the
            sweet spot in every project. Our mission is to simplify the digital journey and empower
            our clients to move forward with confidence through modern, intelligent, and market-driven
            solutions built on a deep understanding of their goals and audience.
          </p>
        </div>
      </div>

    </section>
  );
}
