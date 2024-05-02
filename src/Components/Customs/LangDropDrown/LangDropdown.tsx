import React, { useState } from "react";
import { ArrowDown, Check, RuFlag, UzFlag } from "@/Assets/Images";
import Image, { StaticImageData } from "next/image";

type LangDataType = {
  title: string;
  icon: StaticImageData;
};

const langData: LangDataType[] = [
  { title: "ru", icon: RuFlag },
  { title: "uz", icon: UzFlag },
];

export const LangDropdown = () => {
  const [selected, setSelected] = useState<LangDataType>(langData[1]);
  const [isClicked, setIsClicked] = useState<Boolean>(false);

  return (
    <div
      className="bg-silver md:px-4 px-3 md:py-3 py-2  rounded-lg cursor-pointer relative md:min-w-28 min-w-max"
      onClick={() => {
        // setIsClicked(!isClicked)
      }}
    >
      <div className="flex items-center justify-between gap-x-2">
        <Image
          className="w-6 h-6 select-none"
          src={selected.icon}
          alt="Just an icon"
          width={24}
          height={24}
          draggable={false}
        />
        <span className="capitalize text-lg font-medium text-dark font-helvetica select-none md:block hidden">
          {selected.title}
        </span>
        <Image
          className={`${
            isClicked ? "rotate-180" : "rotate-0"
          } transition-transform duration-300 md:block hidden`}
          src={ArrowDown}
          alt="Just an icon"
          draggable={false}
        />
      </div>
      <ul
        className={`absolute flex flex-col gap-y-4 top-105% left-0 bg-silver transition-transform duration-300 origin-top-right rounded-lg w-full py-3 px-4 ${
          isClicked ? "scale-100" : "scale-0"
        }`}
      >
        {langData.map((el, i) => (
          <li
            className="flex justify-left gap-x-2 items-center"
            key={i}
            onClick={() => {
              setSelected(el);
              setIsClicked(false);
            }}
          >
            <Image
              className="w-6 h-6"
              src={el.icon}
              alt="Just an icon"
              width={24}
              height={24}
              draggable={false}
            />
            <span className="capitalize text-lg font-medium text-dark">
              {el.title}
            </span>
            <Image
              className={`w-max h-max ml-auto ${
                selected.title === el.title ? "block" : "hidden"
              }`}
              src={Check}
              alt="Just an icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
