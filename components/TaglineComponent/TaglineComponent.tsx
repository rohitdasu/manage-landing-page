import React from "react";
import {
  TabletPatternTaglineOne,
  TabletPatternTaglineTwo,
} from "../TabletPattern";

export const TaglineComponent = () => {
  return (
    <div className="bg-[#f2603c] relative overflow-hidden mt-16 py-4">
      <div className="max-w-6xl mx-auto flex px-8 h-80 lg:h-40 flex-col lg:flex-row gap-6 items-center lg:justify-between justify-center">
        <p className="text-white text-4xl w-3/4 lg:w-1/3 text-center lg:text-left">
          Simplify how your team works today.
        </p>
        <button className="bg-white hover:opacity-80 px-6 py-2.5 w-auto rounded-full text-sm text-[#f2603c] z-10">
          Get Started
        </button>
        <TabletPatternTaglineOne />
        <TabletPatternTaglineTwo />
      </div>
    </div>
  );
};
