'use client';

import { SectionProps } from "@/types/sections";
import Image from "next/image";

export default function AboutSection({ id }: SectionProps) {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center">

      <div className="skewed-bg-about"></div>

      <div className="mb-8 md:mb-0 md:pr-12">

        <h2 className="text-4xl md:text-5xl font-bold pt-[200px] sm:pt-[100px] xl:pt-16  mb-8 text-white text-center">
          <span className="text-[#6ce9f8]">About</span> Us
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
              blurDataURL="/about.webp"
            />
          </div>
          <p className="max-w-[700px] leading-[1.7] text-white text-lg md:text-xl text-justify px-5 lg:pl-[25px] break-words">
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
