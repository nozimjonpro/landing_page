"use client";

import { Logo } from "@/Assets/Images";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LangDropdown } from "../Customs/LangDropDrown/LangDropdown";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

export const Header = () => {
  const pathname = usePathname();

  const [isClicked, setIsClicked] = useState<Boolean>(false);

  return (
    <header className="bg-white py-6 fixed z-50 top-0 w-full">
      <div className="layout_container flex justify-between items-center">
        <div
          className="w-11 h-11 rounded-full bg-bgSilver md:hidden flex justify-center items-center z-30"
          onClick={() => setIsClicked(!isClicked)}
        >
          <div
            className={`w-6 rounded-md h-0.75 bg-black before:w-6 before:h-0.75 before:rounded-md before:bg-black before:content-[''] before:absolute after:w-6 after:h-0.75 after:rounded-md after:bg-black after:content-[''] after:absolute transition-all duration-300 before:transition-transform before:duration-300 after:transition-transform after:duration-300 ${
              isClicked
                ? "hamburger--active bg-transparent"
                : "after:translate-y-2 before:-translate-y-2"
            }`}
          ></div>
        </div>
        <Link href={"/"}>
          <Image src={Logo} alt="Company logo" width={176} height={44} />
        </Link>
        <Navbar
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          forMobile={false}
        />
        <LangDropdown />
        <div
          className={`fixed top-0 md:hidden right-0 bottom-0 left-0 bg-white transition-all duration-500 md:static md:translate-x-0 overflow-y-hidden z-10 ${
            isClicked ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Navbar
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            forMobile={true}
          />
        </div>
      </div>
    </header>
  );
};
