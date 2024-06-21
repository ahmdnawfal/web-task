"use client";

import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { linkNav } from "@/data/dataLinkNav";
import Drawer from "react-modern-drawer";
import { TypeLinkNav } from "@/lib/type";
import Link from "next/link";

import "react-modern-drawer/dist/index.css";
import NavLanguage from "./nav-language";

type Props = {
  language: string;
};

const DrawerHamburger = ({ language }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <span className="cursor-pointer" onClick={toggleDrawer}>
        <RxHamburgerMenu />
      </span>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <ul className="py-4 px-4  grid gap-3 font-semibold">
          {linkNav.map((value: TypeLinkNav, index: number) => (
            <Link
              href={`#${value.name.toLowerCase()}`}
              key={index}
              onClick={toggleDrawer}
            >
              <li className="hover:text-gray-500 cursor-pointer ">
                {value.name}
              </li>
            </Link>
          ))}
          <li className="hover:text-gray-500 cursor-pointer mt-[3px]">
            {!language ? "Loading.." : <NavLanguage language={language} />}
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default DrawerHamburger;
