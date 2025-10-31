import Image from "next/image";
import { StaticImageData } from "next/image";

type ModalProps = {
  message: string;
  imageSrc: string | StaticImageData;
};

export default function Modal({ message, imageSrc }: ModalProps) {
  return (
    <div className="insert-box px-[15px] inset-0 fixed z-50 flex items-center justify-center bg-black/40">
      <div
        style={{ boxShadow: "0px 15px 25px 5px rgba(0, 0, 0, 0.25)" }}
        className="flex flex-col items-center justify-center bg-white w-full md:w-[600px] rounded-xl"
      >
        <div className="relative w-[300px] h-[300px]">
          <Image src={imageSrc} alt="Modal Icon" fill className="object-contain" unoptimized />
        </div>
        <p className="text-center text-[14px] md:text-[20px] font-bold p-10">{message}</p>
      </div>
    </div>
  );
}