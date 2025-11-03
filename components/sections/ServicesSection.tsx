'use client';

import { SectionProps } from "@/types/sections";
import ServiceCard from "../ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection( { id }: SectionProps) {

  return (
    <section
      id={id}
      className="relative z-10 scroll-mt-24 mt-[155px] md:pb-[155px] min-h-screen flex flex-col items-center justify-center px-6 md:px-20"
    >

        <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-8 md:mt-0">
          Our <span className="text-[#0AB3F6] ml-1">Services</span>
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

    </section>
  );
}
