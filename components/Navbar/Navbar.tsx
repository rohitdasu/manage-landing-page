import React, { FC, useState } from "react";
import Image from "next/image";
import { NavProps, ButtonProps } from "./Navbar.interface";
import Link from "next/link";

const Logo = () => (
  <Image src="/logo.svg" alt="logo" height={100} width={150} />
);

const HamburgerButton = ({ onClick }: ButtonProps) => (
  <Image
    src="/icon-hamburger.svg"
    className="flex md:hidden"
    alt="logo"
    height={24}
    width={24}
    onClick={onClick}
  />
);

const CloseButton = ({ onClick }: ButtonProps) => (
  <Image
    src="/icon-close.svg"
    className="flex md:hidden"
    alt="logo"
    height={24}
    width={24}
    onClick={onClick}
  />
);

export const Navbar: FC<NavProps> = ({ navItems = [] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-8 relative">
        <div className="flex flex-row items-center justify-between">
          <Logo />
          <ul className="flex-row items-center gap-6 lg:gap-8 hidden md:flex">
            {navItems.map(({ name }, idx) => (
              <Link key={idx} href={"#"}>
                <li className="text-sm text-gray-900">{name}</li>
              </Link>
            ))}
          </ul>
          <button className="bg-[#f26641] hover:opacity-80 px-6 py-2.5 rounded-full text-sm text-white hidden md:flex">
            Get Started
          </button>
          <div className="cursor-pointer flex md:hidden">
            {!isMobileMenuOpen && (
              <HamburgerButton onClick={() => setIsMobileMenuOpen(true)} />
            )}
            {isMobileMenuOpen && (
              <CloseButton onClick={() => setIsMobileMenuOpen(false)} />
            )}
          </div>
        </div>
        <div className="absolute top-20 right-0 w-full">
          {isMobileMenuOpen && (
            <ul className="flex-col items-center gap-6 lg:gap-8 flex md:hidden bg-white shadow-xl py-6 mx-8">
              {navItems.map(({ name }, idx) => (
                <Link key={idx} href={"#"}>
                  <li className="text-sm font-semibold text-gray-900">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};
