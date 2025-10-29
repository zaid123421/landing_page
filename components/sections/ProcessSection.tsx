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

      <div className="relative mt-[75px] sm:mt-[250px] h-[250px] sm:h-[350px] scale-55 sm:scale-100">

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

        <div className="flex flex-col items-center absolute top-[-225px] left-[50%] translate-x-[-50%]">
          <RiDraftLine className="text-3xl md:text-4xl" />
          <span className="my-2">Planning</span>
          <p className="text-center w-[130px]">Discovery Phase Ux researsh</p>
        </div>

        <div className="flex flex-col items-center absolute top-[-100px] left-[185px]">
          <IoBrushOutline className="text-3xl md:text-4xl" />
          <span className="my-2">Design</span>
          <p className="text-center w-[130px]">Wireframing Protoyping</p>
        </div>

        <div className="flex flex-col items-center absolute top-[100px] left-[185px]">
          <RiCodeBoxLine className="text-3xl md:text-4xl" />
          <span className="my-2">Development</span>
          <p className="text-center w-[130px]">Front end Back end</p>
        </div>

        <div className="flex flex-col items-center absolute top-[225px] left-[50%] translate-x-[-50%]">
          <RiSearchEyeLine className="text-3xl md:text-4xl" />
          <span className="my-2">Testing</span>
          <p className="text-center w-[130px]">Quality Assurance Optimization</p>
        </div>

        <div className="flex flex-col items-center absolute top-[-100px] left-[-215px]">
          <HiOutlineSupport className="text-3xl md:text-4xl" />
          <span className="my-2">Support</span>
          <p className="text-center w-[130px]">Ongoing Support Maintenance</p>
        </div>

        <div className="flex flex-col items-center absolute top-[100px] left-[-215px]">
          <HiOutlineRocketLaunch className="text-3xl md:text-4xl" />
          <span className="my-2">Lanuch</span>
          <p className="text-center w-[130px]">Ongoing Support Maintenance</p>
        </div>

      </div>
    </section>
  );
}
