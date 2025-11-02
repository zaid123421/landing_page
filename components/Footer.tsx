"use client";

import Image from "next/image";

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoInstagram } from "react-icons/bi";

export default function Footer() {

  return (
    <footer className="bg-gradient-to-tr from-[#0A3D62] to-[#1E90FF] ">

      <div className="flex flex-col items-center justify-center py-12">

        <Image
          src="/SweetSpot logo-03.webp"
          alt="Logo"
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="/SweetSpot logo-03.webp"
        />

        <div className="flex mt-5 text-white">
          <a target="_blank" href="https://www.facebook.com/share/17ekds7GEL/?mibextid=wwXIfr" className="p-2 rounded-xl cursor-pointer hover:bg-[#0AB3F6] ">
            <TiSocialFacebook className="text-2xl" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/sweet-spot-tech/" className="p-2 rounded-xl cursor-pointer hover:bg-[#0AB3F6] ml-2">
            <TiSocialLinkedin className="text-2xl" />
          </a>
          <a target="_blank" href="https://www.instagram.com/sweetspotech/#" className="p-2 rounded-xl cursor-pointer hover:bg-[#0AB3F6] ml-2">
            <BiLogoInstagram className="text-2xl" />
          </a>
        </div>

        <p className="text-white/70 mt-5 font-medium px-5 text-center">&copy; 2025 SweetSpot. All rights reserved.</p>

      </div>

    </footer>
  );
}
