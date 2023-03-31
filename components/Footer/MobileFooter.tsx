import { FC } from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Footer";
import { FooterProps } from "./Footer.interface";
import { NavigationLinks } from "./NavigationLinks";
import { NewsLetter } from "./NewsLetter";
import { SocialProfiles } from "./SocialProfiles";

export const MobileFooter: FC<FooterProps> = ({
  socials,
  navigations,
  otherNavigations,
}) => {
  return (
    <div className="lg:hidden flex flex-col items-center justify-center gap-8 w-full px-8">
      <div className="px-8">
        <NewsLetter />
      </div>
      <div className="flex flex-row justify-between w-full">
        <NavigationLinks navigations={navigations} />
        <NavigationLinks navigations={otherNavigations} />
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-8">
        <SocialProfiles socials={socials} />
        <Logo />
      </div>
      <Copyright />
    </div>
  );
};
