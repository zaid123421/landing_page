'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";

export default function AboutSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="bg-gradient-to-tr from-[#0C1A2B] to-[#1C2842] relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-20"
    >

      <div className="mb-8 md:mb-0 md:pr-12 pt-[150px]">

        <h2 className="text-4xl md:text-5xl font-bold mt-8 md:mt-0 mb-4 text-white text-center">
          <span className="text-[#0AB3F6]">About</span> Us
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start max-w-full">
          <div className="hidden lg:block w-[400px] h-[400px] flex-shrink-0">
            <Image
              src="/about.webp"
              alt="about_image"
              width={400}
              height={400}
              priority
              placeholder="blur"
              blurDataURL="/about-small.webp"
            />
          </div>
          <p className="max-w-[700px] leading-[1.7] text-white text-lg md:text-xl text-justify pl-0 lg:pl-[25px] break-words">
            We are a passionate team dedicated to providing innovative solutions that help
            businesses grow and succeed, with a focus on delivering high-quality services
            tailored to our clients&#39; needs. Sweetspot is a specialized digital agency offering
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
