import { linkNav, linkNavId } from "@/data/dataLinkNav";
import { TypeLinkNav } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLanguage from "./nav-language";
import DrawerHamburger from "./drawer_hamburger";
import { CookieValueTypes } from "cookies-next";

type Props = {
  language: string;
};

const Navbar = ({ language }: Props) => {
  const handleLanguage = (lang: CookieValueTypes) => {
    if (lang === "en") {
      return linkNav.map((value: TypeLinkNav, index: number) => (
        <Link href={`#${value.name.toLowerCase()}`} key={index}>
          <li className="hover:text-gray-500 cursor-pointer">{value.name}</li>
        </Link>
      ));
    } else if (lang === "id") {
      return linkNavId.map((value: TypeLinkNav, index: number) => (
        <Link href={`#${value.name.toLowerCase()}`} key={index}>
          <li className="hover:text-gray-500 cursor-pointer">{value.name}</li>
        </Link>
      ));
    }
  };

  return (
    <div className="flex justify-between items-center py-2 px-4 md:py-5 md:px-16 bg-white md:fixed md:top-0 w-full z-50 shadow-md">
      <div>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={120}
          height={120}
          style={{ objectFit: "cover", marginBottom: 6 }}
        />
      </div>
      <div>
        <ul className="hidden md:flex md:space-x-3 lg:space-x-6 font-semibold ">
          {handleLanguage(language)}
          <li className="hover:text-gray-500 cursor-pointer mt-[3px]">
            {!language ? "Loading.." : <NavLanguage language={language} />}
          </li>
        </ul>
        <span className="sm:flex md:hidden">
          <DrawerHamburger language={language} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
