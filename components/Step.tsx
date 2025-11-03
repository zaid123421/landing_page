"use client";

import React from "react";

type StepProps = {
  Icon: React.ElementType;
  title: string;
  desc?: string[];
  x?: number;
  y?: number;
  isMobile?: boolean;
};

function Step({ Icon, title, desc, x = 0, y = 0, isMobile = false }: StepProps) {
  if (isMobile) {
    return (
      <div className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-4 border border-[#0AB3F6]/20">
        <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#0AB3F6]/40 rounded-full text-[#0AB3F6] text-xl mb-2">
          <Icon />
        </div>

        <h3 className="w-[120px] font-semibold text-gray-800">{title}</h3>

        {desc && (
          <p className="text-xs text-gray-500 mt-1 whitespace-pre-line">
            {desc.join("\n")}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className="bg-white absolute flex flex-col items-center justify-center text-center transition-transform duration-300 z-10"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white shadow-md rounded-full border border-[#0AB3F6]/40 text-xl sm:text-2xl text-[#0AB3F6] hover:shadow-[#0AB3F6]/30 transition-all duration-300 hover:-translate-y-1">
        <Icon />
      </div>

      <span className="w-[121px] mt-2 text-sm sm:text-base font-bold text-gray-800">
        {title}
      </span>

      {desc && (
        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-tight whitespace-pre-line hidden sm:block">
          {desc.join("\n")}
        </p>
      )}
    </div>
  );
}

export default React.memo(Step);