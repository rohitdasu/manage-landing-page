import React from "react";
import Image from "next/image";

export const TabletPatternTaglineOne = () => {
  return (
    <Image
      src="/bg-tablet-pattern.svg"
      alt="tablet-pattern"
      className="absolute -left-64 top-28 lg:-top-10 lg:left-60 opacity-10"
      height={400}
      width={400}
    />
  );
};

export const TabletPatternTaglineTwo = () => {
  return (
    <Image
      src="/bg-tablet-pattern.svg"
      alt="tablet-pattern"
      className="absolute hidden lg:block -top-60 -right-40 opacity-10"
      height={400}
      width={400}
    />
  );
};
