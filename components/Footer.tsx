"use client";

import Image from "next/image";

import { links } from "@/data/social_links";
import SocialLink from "./SocialLink";

export default function Footer() {

  return (
    <footer className="relative pt-[200px] overflow-hidden">

      <div className="skewed-reversed"></div>

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
          {links.map((link, index) => (
            <SocialLink
              key={index}
              link={link.link}
              Icon={link.Icon}
            />
          ))}
        </div>

        <p className="text-white/70 mt-5 font-medium px-5 text-center">&copy; 2025 SweetSpot. All rights reserved.</p>

      </div>

    </footer>
  );
}
