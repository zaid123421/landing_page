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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Research</h3>
          <p className="text-gray-600">
            We carefully research your business needs and market to define goals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Design</h3>
          <p className="text-gray-600">
            Creating intuitive designs and user experiences for your products.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">Development</h3>
          <p className="text-gray-600">
            Implementing scalable and efficient solutions tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
