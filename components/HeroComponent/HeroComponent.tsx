import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <Image
      src="/illustration-intro.svg"
      alt="illustration-intro"
      height={500}
      width={500}
    />
  );
};

export const HeroComponent = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-0 items-center lg:min-h-[calc(100vh-112px)]">
      <div className="flex flex-col items-center lg:items-start justify-start gap-8 w-full lg:w-1/2">
        <h1 className="text-4xl md:text-6xl font-semibold lg:text-left text-center text-gray-900">
          Bring everyone together to build better products.
        </h1>
        <h3 className="lg:w-2/3 text-center text-base lg:text-left text-gray-400">
          Manage makes it simple for software teams to day-to-day tasks while
          keeping the larger team goals in view
        </h3>
        <button className="bg-[#f26641] hover:opacity-80 px-6 py-2.5 w-auto rounded-full text-sm text-white">
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <HeroImage />
      </div>
    </div>
  );
};
