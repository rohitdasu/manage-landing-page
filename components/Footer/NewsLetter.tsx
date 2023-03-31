import React from "react";

export const NewsLetter = () => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      <input
        className="px-4 py-3 rounded-full text-black"
        type="email"
        placeholder="Email subscribe"
      />
      <button className="bg-[#f2603c] px-4 py-3 rounded-full hover:opacity-80">
        go
      </button>
    </div>
  );
};
