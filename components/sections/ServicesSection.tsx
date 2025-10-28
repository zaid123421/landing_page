'use client';

import { SectionProps } from "@/types/sections";
import { FaLaptopCode } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";

export default function ServicesSection( { id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative z-10 scroll-mt-24 mt-[155px] pb-[155px] min-h-screen flex flex-col items-center justify-center px-6 md:px-20"
    >

      <div className="skewed-reversed"></div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-8 md:mt-0">
          Our <span className="text-[#0AB3F6] ml-1">Services</span>
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <FaLaptopCode className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
            <h3 className="text-2xl font-semibold my-4">Web Development</h3>
            <p className="text-gray-400">
              We build responsive and modern websites that are fast and scalable.
            </p>
          </div>

          <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <ImMobile className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
            <h3 className="text-2xl font-semibold my-4">Mobile Apps</h3>
            <p className="text-gray-400">
              Creating intuitive mobile applications for iOS and Android platforms.
            </p>
          </div>

          <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <LuBrainCircuit className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
            <h3 className="text-2xl font-semibold my-4">Custom Software Solutions</h3>
            <p className="text-gray-400">
              SweetSpot delivers custom software solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <IoMdCloudOutline className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
            <h3 className="text-2xl font-semibold my-4">Cloud Computing</h3>
            <p className="text-gray-400">
              SweetSpot provides cloud computing to securely manage data. 
            </p>
          </div>

          <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <MdOutlineDesignServices className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
            <h3 className="text-2xl font-semibold my-4">UI/UX Design</h3>
            <p className="text-gray-400">
              Designing user-friendly interfaces and experiences for your products.
            </p>
          </div>

          <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <IoChatbubbleEllipsesOutline className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
            <h3 className="text-2xl font-semibold my-4">Chatbots & Virtual Assistants</h3>
            <p className="text-gray-400">
              SweetSpot creates chatbots and virtual assistants to improve customer interactions.
            </p>
          </div>

        </div>

    </section>
  );
}
