import { FC } from "react";
import Image from "next/image";
import { SocialProps } from "./Footer.interface";
import Link from "next/link";

export const SocialProfiles: FC<SocialProps> = ({ socials }) => {
  return (
    <div className="flex flex-row items-start lg:items-center justify-between w-full lg:justify-start gap-2">
      {socials?.map((social) => {
        return (
          <Link href={"#"} key={social.id}>
            <Image
              src={social.icon}
              alt={social.title}
              height={24}
              width={24}
            />
          </Link>
        );
      })}
    </div>
  );
};
