import React, { FC } from "react";
import Image from "next/image";
import { FooterProps } from "./Footer.interface";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export const Logo = () => {
  return <Image src="/logo-dark.svg" alt="logo" height={100} width={150} />;
};

export const Footer: FC<FooterProps> = ({
  navigations,
  otherNavigations,
  socials,
}) => {
  return (
    <div className="bg-[#1e1e26] py-16 h-full">
      <DesktopFooter
        socials={socials}
        navigations={navigations}
        otherNavigations={otherNavigations}
      />
      <MobileFooter
        socials={socials}
        navigations={navigations}
        otherNavigations={otherNavigations}
      />
    </div>
  );
};
