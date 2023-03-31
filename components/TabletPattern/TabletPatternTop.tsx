import React from "react";
import Image from "next/image";

export const TabletPatternTop = () => {
  return (
    <Image
      src="/bg-tablet-pattern.svg"
      alt="tablet-pattern"
      className="absolute -right-10 md:-right-44 -top-20 md:-top-56 -z-10"
      height={800}
      width={800}
    />
  );
};
