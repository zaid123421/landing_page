"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { steps } from "@/data/steps";
import { SectionProps } from "@/types/sections";
import Step from "../Step";

export default function ProcessSection({ id }: SectionProps) {
  const [radius, setRadius] = useState(200);
  const [isMobile, setIsMobile] = useState(false);
  const center = 250;

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
      setRadius(window.innerWidth < 1024 ? 180 : 200);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section
      id={id}
      className="scroll-mt-16 my-[100px] relative min-h-screen flex flex-col items-center justify-start px-6 md:px-20 pt-10 pb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center w-full">
        Our <span className="text-[#0AB3F6]">Process</span>
      </h2>

      {isMobile ? (
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Step key={index} Icon={step.Icon} title={step.title} desc={step.desc} isMobile />
          ))}
        </div>
      ) : (
        <div className="relative mt-2 w-[80vw] max-w-[500px] h-[80vw] max-h-[500px] hidden sm:block">
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
                <path
                  key={index}
                  d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                  stroke="#0AB3F6"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
              );
            })}
          </svg>

          {steps.map((step, index) => {
            const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <Step key={index} Icon={step.Icon} title={step.title} desc={step.desc} x={x} y={y} />
            );
          })}
        </div>
      )}
    </section>
  );
}
