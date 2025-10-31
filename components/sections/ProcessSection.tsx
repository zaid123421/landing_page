"use client";

import { SectionProps } from "@/types/sections";

import { RiDraftLine } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { RiCodeBoxLine } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineSupport } from "react-icons/hi";

export default function ProcessSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen scroll-mt-16 sm:scroll-mt-0 py-10 md:py-20 flex flex-col items-center justify-center px-6 md:px-20 bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
        Our <span className="text-[#0AB3F6]">Process</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 mt-10 justify-center items-center">
        {[
          { icon: <RiDraftLine />, title: "Planning", text: "Discovery Phase\nUX Research" },
          { icon: <IoBrushOutline />, title: "Design", text: "Wireframing\nPrototyping" },
          { icon: <RiCodeBoxLine />, title: "Development", text: "Front End\nBack End" },
          { icon: <RiSearchEyeLine />, title: "Testing", text: "Quality Assurance\nOptimization" },
          { icon: <HiOutlineRocketLaunch />, title: "Launch", text: "Launch Your\nProject" },
          { icon: <HiOutlineSupport />, title: "Support", text: "Ongoing Support\nMaintenance" },
        ].map((step, i) => (
        <div
          key={i}
          className="relative group flex flex-col items-center justify-center rounded-full w-[200px] h-[200px] p-4 shadow-lg overflow-hidden bg-gradient-to-br from-[#0AB3F6] to-[#008dc5]"
        >
          <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>

          <div className="relative z-10 flex flex-col items-center transition-colors duration-500">
            <div className="text-4xl text-white group-hover:text-[#1B1198] transition-colors duration-500">
              {step.icon}
            </div>
            <span className="my-2 font-extrabold text-white group-hover:text-[#1B1198] transition-colors duration-500">
              {i + 1}. {step.title}
            </span>
            <p className="text-center w-[130px] text-white group-hover:text-[#0C1A2B] font-bold text-sm whitespace-pre-line transition-colors duration-500">
              {step.text}
            </p>
          </div>
        </div>

        ))}
      </div>

    </section>
  );
}
