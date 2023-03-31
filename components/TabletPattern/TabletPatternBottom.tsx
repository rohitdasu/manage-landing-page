import React from "react";
import Image from "next/image";

export const TabletPatternBottomDesktop = () => {
  return (
    <Image
      src="/bg-tablet-pattern.svg"
      alt="tablet-pattern"
      className="absolute hidden lg:block -left-[40%] top-[50%] -z-10"
      height={800}
      width={800}
    />
  );
};

export const TabletPatternBottomMobile = () => {
  return (
    <Image
      src="/bg-tablet-pattern.svg"
      alt="tablet-pattern"
      className="absolute -z-10 top-[15%] -right-[65%]"
      height={400}
      width={400}
    />
  );
};
