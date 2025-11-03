'use client';

import { SectionProps } from "@/types/sections";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

import successImage from "../../public/success.gif";
import error from "../../public/error.gif";

import Loading from "../Loading";
import Modal from "../Modal";

export default function ContactSection({ id }: SectionProps) {
  const [isLoading, setIsLoading] = useState(false);

  type ModalType = {
    isOpen: boolean;
    message: string;
    image: string | StaticImageData;
  };

  const [modal, setModal] = useState<ModalType>({
    isOpen: false,
    message: "",
    image: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (modal.isOpen) {
      const timer = setTimeout(() => {
        setModal((prev) => ({ ...prev, isOpen: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [modal.isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mqagdqgr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({
          isOpen: true,
          message: "Thank you for reaching out! Our team will contact you shortly.",
          image: successImage,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setModal({
          isOpen: true,
          message: "Something went wrong, please try again later.",
          image: error,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

      <section
        id={id}
        className="scroll-mt-16 lg:scroll-mt-0 min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          <span className="text-[#0AB3F6]">Contact</span> Us
        </h2>
        <p className="text-gray-500 font-semibold mb-8">Let&#39;s Build Something Great Together</p>

        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8 w-full max-w-6xl">

          <form onSubmit={handleSubmit} className="rounded-xl flex flex-col gap-4 w-full">

            <div className="flex flex-col md:flex-row">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border-none outline-none p-3 rounded-lg w-full md:min-w-[300px] bg-gray-100"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-none outline-none p-3 rounded-lg mt-3 w-full md:min-w-[300px] md:ml-5 md:mt-0 bg-gray-100"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject (Optional)"
              value={formData.subject}
              onChange={handleChange}
              className="border-none outline-none p-3 rounded-lg bg-gray-100"
            />

            <textarea
              required
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border-none outline-none p-3 rounded-lg resize-none bg-gray-100"
              rows={5}
            />

            <button
              type="submit"
              className="w-[200px] bg-[#0AB3F6] border-[2px] border-[#0AB3F6] text-white px-6 py-3 rounded-lg shadow hover:bg-transparent hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>

          </form>

          <div className="w-full flex flex-col">
            <p className="text-xl md:text-2xl font-bold">Contact Information:</p>

            <div className="flex items-center mt-5">
              <FaPhoneAlt className="text-3xl mr-5 text-[#0AB3F6]" />
              <div>
                <h4 className="text-xl font-semibold">Phone:</h4>
                <p className="font-medium text-gray-500">+963 994 650 249</p>
              </div>
            </div>

            <div className="flex items-center mt-5">
              <MdEmail className="text-3xl mr-5 text-[#0AB3F6]" />
              <div>
                <h4 className="text-xl font-semibold">Email:</h4>
                <p className="font-medium text-gray-500">info@sweetspotech.com</p>
              </div>
            </div>

            <div className="flex items-center mt-5">
              <FaLocationDot className="text-3xl mr-5 text-[#0AB3F6]" />
              <div>
                <h4 className="text-xl font-semibold">Address:</h4>
                <p className="font-medium text-gray-500">Damascus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isLoading && <Loading />}
      {modal.isOpen && <Modal message={modal.message} imageSrc={modal.image} />}

    </>
  );
}
