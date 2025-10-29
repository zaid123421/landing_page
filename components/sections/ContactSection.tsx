'use client';

import { SectionProps } from "@/types/sections";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactSection({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-18 lg:scroll-mt-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        <span className="text-[#0AB3F6]">Contact</span> Us
      </h2>
      <p className="text-gray-500 mb-8">Let&#39;s Build Something Great Together</p>

      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 w-full max-w-6xl">
        <form className="rounded-xl flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="border-none outline-none p-3 rounded-lg w-full md:min-w-[300px] bg-gray-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-none outline-none p-3 rounded-lg mt-3 w-full md:min-w-[300px] md:ml-5 md:mt-0 bg-gray-100"
            />
          </div>
          <input
            type="message"
            placeholder="Subject"
            className="border-none outline-none p-3 rounded-lg bg-gray-100"
          />
          <textarea
            placeholder="Message"
            className="border-none outline-none p-3 rounded-lg resize-none bg-gray-100"
            rows={5}
          />
          <button className="w-[200px] bg-[#0AB3F6] border-[2px] border-[#0AB3F6] text-white px-6 py-3 rounded-lg shadow hover:bg-transparent hover:text-black transition-colors duration-300 cursor-pointer">
            Send Message
          </button>
        </form>
        <div className="w-full flex flex-col">
          <p className="text-xl md:text-2xl font-bold">Contact Infromation:</p>
          
          <div className="flex items-center mt-5">
            <FaPhoneAlt className="text-3xl mr-5 text-[#0AB3F6]" />
            <div>
              <h4 className="text-xl font-bold">Phone:</h4>
              <p>+963 936 293 118</p>
            </div>
          </div>

          <div className="flex items-center mt-5">
            <MdEmail className="text-3xl mr-5 text-[#0AB3F6]" />
            <div>
              <h4 className="text-xl font-bold">Email:</h4>
              <p>team@sweetspot.com</p>
            </div>
          </div>

          <div className="flex items-center mt-5">
            <FaLocationDot className="text-3xl mr-5 text-[#0AB3F6]" />
            <div>
              <h4 className="text-xl font-bold">Address:</h4>
              <p>Damascus</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
