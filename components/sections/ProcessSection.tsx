"use client";

import { SectionProps } from "@/types/sections";

import { RiDraftLine } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { RiCodeBoxLine } from "react-icons/ri";
import { RiSearchEyeLine } from "react-icons/ri";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineSupport } from "react-icons/hi";
import Image from "next/image";

export default function ProcessSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="py-10 md:py-20 flex flex-col items-center justify-center px-6 md:px-20 bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
        Our <span className="text-[#0AB3F6]">Process</span>
      </h2>

      <div className="relative mt-[75px] sm:mt-[225px] h-[250px] sm:h-[350px] scale-55 sm:scale-100">

        <div className="w-[100px] h-[100px] flex-shrink-0">
          <Image
            src="/SweetSpot logo-08.webp"
            alt="logo"
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL="/SweetSpot logo-08.webp"
            className="transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col items-center absolute top-[-200px] left-[50%] translate-x-[-50%]">
          <RiDraftLine className="text-3xl md:text-4xl text-[#1B1198]" />
          <span className="my-2 font-bold">Planning</span>
          <p className="text-center w-[130px] font-medium text-sm">Discovery Phase <br /> Ux researsh</p>
        </div>

        <div className="flex flex-col items-center absolute top-[-100px] left-[185px]">
          <IoBrushOutline className="text-3xl md:text-4xl text-[#1B1198]" />
          <span className="my-2 font-bold">Design</span>
          <p className="text-center w-[130px] font-medium text-sm">Wireframing <br /> Protoyping</p>
        </div>

        <div className="flex flex-col items-center absolute top-[100px] left-[185px]">
          <RiCodeBoxLine className="text-3xl md:text-4xl text-[#1B1198]" />
          <span className="my-2 font-bold">Development</span>
          <p className="text-center w-[130px] font-medium text-sm">Front end <br /> Back end</p>
        </div>

        <div className="flex flex-col items-center absolute top-[200px] left-[50%] translate-x-[-50%]">
          <RiSearchEyeLine className="text-3xl md:text-4xl text-[#1B1198]" />
          <span className="my-2 font-bold">Testing</span>
          <p className="text-center w-[130px] font-medium text-sm">Quality Assurance <br /> Optimization</p>
        </div>

        <div className="flex flex-col items-center absolute top-[100px] left-[-215px]">
          <HiOutlineRocketLaunch className="text-3xl md:text-4xl text-[#1B1198]" />
          <span className="my-2 font-bold">Lanuch</span>
          <p className="text-center w-[130px] font-medium text-sm">Launch Your <br /> Project</p>
        </div>

        <div className="flex flex-col items-center absolute top-[-100px] left-[-215px]">
          <HiOutlineSupport className="text-3xl md:text-4xl text-[#1B1198]" />
          <span className="my-2 font-bold">Support</span>
          <p className="text-center w-[130px] font-medium text-sm">Ongoing Support <br /> Maintenance</p>
        </div>
    
      </div>
    </section>
  );
}
