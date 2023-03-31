import Link from "next/link";
import { FC } from "react";
import { NavigationProps } from "./Footer.interface";

export const NavigationLinks: FC<NavigationProps> = ({ navigations }) => {
  return (
    <ul className="flex flex-col items-start justify-center gap-2">
      {navigations?.map((navigation) => {
        return (
          <Link key={navigation.id} href={navigation.url}>
            <li className="text-sm text-gray-300">{navigation.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};
