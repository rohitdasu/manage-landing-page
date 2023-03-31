import React from "react";
import { Copyright } from "./Copyright";

export const NewsLetter = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        className="px-4 py-3 rounded-full text-black"
        type="email"
        placeholder="Enter email id"
      />
      <button className="bg-[#f2603c] px-4 py-3 rounded-full hover:opacity-80">
        subscribe
      </button>
    </div>
  );
};
