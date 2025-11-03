'use client';

import { SectionProps } from "@/types/sections";
import TechnologyCard from "@/components/TechnologyCard";
import { technologies } from "@/data/technologies";

export default function TechnologiesSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-16 lg:scroll-mt-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-10 pb-20 bg-gradient-to-tr from-[#0A1523] via-[#122B46] to-[#1D3A5F]"
    >
      <div className="text-white text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Our <span className="text-[#6ce9f8]">Technology</span> Stack
        </h2>
        <p className="max-w-[450px] font-semibold">
          We use reliable, modern technologies to ensure high performance and scalability.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center mt-8 pb-10">
        {technologies.map((tech) => (
          <TechnologyCard key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  );
}
