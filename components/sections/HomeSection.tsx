'use client';

import { SectionProps } from "@/types/sections";
import Typewriter from "typewriter-effect";

export default function HomeSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <div className="skewed-bg"></div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6ce9f8] to-[#3B82F6]">
        SweetSpot
      </h1>

      {/* Typewriter */}
      <h1 className="relative z-10 text-3xl font-bold my-7 z-10 relative text-white">
        <Typewriter
          options={{
            strings: ["We Build Your Digital Future", "Making Ideas Come Alive", "Turning Concepts Into Reality"],
            autoStart: true,
            loop: true,
            delay: 30,
            deleteSpeed: 30,
          }}
        />
      </h1>

      <p className="text-lg text-white max-w-2xl mb-[50px] z-10">
        We aim to deliver services that are high-performing, high-quality and efficient.
      </p>

      {/* Contact Link */}
      <div className="flex gap-4 z-10 relative">
        <a
          href="#contact"
          className="border border-[2px] border-[#0AB3F6] bg-[#0AB3F6] text-white px-6 py-3 rounded-lg hover:bg-transparent transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}