'use client';

import { SectionProps } from "@/types/sections";

export default function TechnologiesSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
        Technologies We Use
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        <div className="flex flex-col items-center">
          {/* <img src="https://via.placeholder.com/80" alt="Tech 1" /> */}
          <p className="mt-2 text-gray-600">React</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="https://via.placeholder.com/80" alt="Tech 2" /> */}
          <p className="mt-2 text-gray-600">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="https://via.placeholder.com/80" alt="Tech 3" /> */}
          <p className="mt-2 text-gray-600">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="https://via.placeholder.com/80" alt="Tech 4" /> */}
          <p className="mt-2 text-gray-600">Node.js</p>
        </div>
      </div>
    </section>
  );
}
