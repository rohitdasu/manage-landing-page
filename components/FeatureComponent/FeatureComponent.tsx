import React, { FC } from "react";
import { FeatureProps } from "./FeatureComponent.interface";

export const FeatureComponent: FC<FeatureProps> = ({ features }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-start justify-between">
      <div className="flex flex-col items-center lg:items-start justify-start gap-8 w-full lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-semibold lg:text-left text-center text-gray-900">
          What&apos;s different about Manage?
        </h2>
        <h3 className="lg:w-2/3 text-base text-center lg:text-left text-gray-400">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </h3>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <ul className="flex flex-col gap-8">
          {features?.map((feature, idx: number) => {
            return (
              <li key={feature.id}>
                <div className="flex flex-row gap-8">
                  <div className="hidden lg:block">
                    <p className="bg-[#f26641] px-6 py-1 rounded-full text-white">
                      {idx + 1}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="hidden lg:block text-base font-semibold">
                      {feature.title}
                    </p>
                    <div className="w-full bg-[#fef0ea] flex flex-row items-center gap-4 rounded-full lg:hidden">
                      <div className="bg-[#f26641] rounded-full px-8 py-2">
                        <span className="text-white">{idx + 1}</span>
                      </div>
                      <p className="text-base font-semibold">{feature.title}</p>
                    </div>
                    <p className="text-base text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
