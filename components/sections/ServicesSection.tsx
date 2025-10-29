'use client';

import { SectionProps } from "@/types/sections";
import { FaLaptopCode } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import ServiceCard from "../ServiceCard";

export default function ServicesSection( { id }: SectionProps) {

  const services = [
    { Icon: FaLaptopCode, title: "Web Development", description: "We build responsive and modern websites that are fast and scalable." },
    { Icon: ImMobile, title: "Mobile Apps", description: "Creating intuitive mobile applications for iOS and Android platforms." },
    { Icon: LuBrainCircuit, title: "Custom Software Solutions", description: "SweetSpot delivers custom software solutions tailored to your business needs." },
    { Icon: IoMdCloudOutline, title: "Cloud Computing", description: "SweetSpot provides cloud computing to securely manage data." },
    { Icon: MdOutlineDesignServices, title: "UI/UX Design", description: "Designing user-friendly interfaces and experiences for your products." },
    { Icon: IoChatbubbleEllipsesOutline, title: "Chatbots & Virtual Assistants", description: "SweetSpot creates chatbots and virtual assistants to improve interactions." }
  ];

  return (
    <section
      id={id}
      className="relative z-10 scroll-mt-24 mt-[155px] md:pb-[155px] min-h-screen flex flex-col items-center justify-center px-6 md:px-20"
    >

      <div className="skewed-reversed"></div>

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
