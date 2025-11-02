"use client";

import { RiDraftLine, RiCodeBoxLine, RiSearchEyeLine } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineSupport } from "react-icons/hi";
import { useEffect, useState } from "react";
import { SectionProps } from "@/types/sections";
import Image from "next/image";

const steps = [
  { icon: <RiDraftLine />, title: "1. Planning", desc: ["Discovery Phase", "UX Research"] },
  { icon: <IoBrushOutline />, title: "2. Design", desc: ["Wireframing", "Prototyping"] },
  { icon: <RiCodeBoxLine />, title: "3. Development", desc: ["Front End", "Back End"] },
  { icon: <RiSearchEyeLine />, title: "4. Testing", desc: ["Quality Assurance", "Optimization"] },
  { icon: <HiOutlineRocketLaunch />, title: "5. Launch", desc: ["Launch Your", "Project"] },
  { icon: <HiOutlineSupport />, title: "6. Support", desc: ["Ongoing Support", "Maintenance"] },
];

export default function ProcessSection({ id }: SectionProps) {
  const [radius, setRadius] = useState(200);
  const center = 250;

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 1024) setRadius(180);
      else setRadius(200);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section
      id={id}
      className="scroll-mt-16 my-[100px] relative min-h-screen flex flex-col items-center justify-start px-6 md:px-20 pt-10 pb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center w-full">
        Our <span className="text-[#0AB3F6]">Process</span>
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-4 border border-[#0AB3F6]/20"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#0AB3F6]/40 rounded-full text-[#0AB3F6] text-xl mb-2">
              {step.icon}
            </div>
            <h3 className="w-[120px] font-semibold text-gray-800">{step.title}</h3>
            <p className="text-xs text-gray-500 mt-1 whitespace-pre-line">{step.desc.join("\n")}</p>
          </div>
        ))}
      </div>

      <div className="relative hidden sm:block mt-2 w-[80vw] max-w-[500px] h-[80vw] max-h-[500px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src="/SweetSpot logo-08.webp"
            width={125}
            height={125}
            alt="Process Image"
            className="object-contain"
          />
        </div>

        <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute top-0 left-0">
          {steps.map((_, index) => {
            const nextIndex = (index + 1) % steps.length;
            const angle1 = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
            const angle2 = (nextIndex / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x1 = center + Math.cos(angle1) * radius;
            const y1 = center + Math.sin(angle1) * radius;
            const x2 = center + Math.cos(angle2) * radius;
            const y2 = center + Math.sin(angle2) * radius;


            return (
              <g key={index}>
                <path d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`} stroke="#0AB3F6" strokeWidth="2" fill="none" opacity="0.6" />
              </g>
            );
          })}
        </svg>

        {steps.map((step, index) => {
          const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="bg-white absolute flex flex-col items-center justify-center text-center transition-transform duration-300 z-10"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white shadow-md rounded-full border border-[#0AB3F6]/40 text-xl sm:text-2xl text-[#0AB3F6] hover:shadow-[#0AB3F6]/30 transition-all duration-300 hover:-translate-y-1">
                {step.icon}
              </div>
              <span className="w-[121px] mt-2 text-sm sm:text-base font-bold text-gray-800">{step.title}</span>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-tight whitespace-pre-line hidden sm:block">{step.desc.join("\n")}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
