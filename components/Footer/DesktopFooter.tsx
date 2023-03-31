import { FC } from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Footer";
import { FooterProps } from "./Footer.interface";
import { NavigationLinks } from "./NavigationLinks";
import { NewsLetter } from "./NewsLetter";
import { SocialProfiles } from "./SocialProfiles";

export const DesktopFooter: FC<FooterProps> = ({
  socials,
  navigations,
  otherNavigations,
}) => {
  return (
    <div className="grid-cols-4 max-w-6xl mx-auto px-8 text-white hidden lg:grid">
      <div className="flex flex-col items-start justify-between">
        <Logo />
        <SocialProfiles socials={socials} />
      </div>
      <NavigationLinks navigations={navigations} />
      <NavigationLinks navigations={otherNavigations} />
      <div className="flex flex-col justify-between items-end">
        <NewsLetter />
        <Copyright />
      </div>
    </div>
  );
};
