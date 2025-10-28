'use client';

import { SectionProps } from "@/types/sections";

export default function ProcessSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
        Our Process
      </h2>
    </section>
  );
}
