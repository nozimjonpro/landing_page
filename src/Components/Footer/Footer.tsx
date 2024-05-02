import Link from "next/link";
import React from "react";
import { Android, Ios } from "@/Assets/Images";
import Image from "next/image";
import DownloadApps from "../Customs/Button/DownloadApps";

type NavbarData = {
  title: string;
  path: string;
};

const navbarData: NavbarData[] = [
  { path: "/restaurants", title: "Restoranlar" },
  { path: "/medicine", title: "Meditsina" },
  { path: "/famous", title: "Mashhurlar" },
  { path: "/contact", title: "Aloqa" },
  { path: "/policy", title: "Privacy Policy" },
];

export const Footer = () => {
  return (
    <footer className="pb-10">
      <div className="layout_container bg-silver rounded-60">
        <div className="py-16">
          <h2 className="common__heading xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-3">
            Savollar va takliflar bormi ?
          </h2>
          <p className="common__text mb-7">
            Biz sizning muammoingizni hal qilamiz
          </p>
          <div className="w-full justify-center flex md:flex-row flex-col items-center md:gap-y-0 gap-y-6 gap-x-4 mb-14">
            <a
              className="block rounded-100 bg-white text-brand md:text-2xl text-lg font-helvetica font-bold md:p-5 p-3 md:max-w-[375px] max-w-64 w-full text-center"
              href="tel:998555106000"
            >
              +998 55 510 60 00
            </a>
            <a
              className="block rounded-100 bg-white text-brand md:text-2xl text-lg font-helvetica font-bold md:p-5 p-3 md:max-w-[375px] max-w-64 w-full text-center"
              href="https://info@1sonia.uz"
            >
              info@1sonia.uz
            </a>
          </div>
          <p className="footer__main--text mb-7">©1SONiA</p>
          <ul className="flex md:flex-row flex-col items-center w-full lg:gap-x-20 md:gap-y-0 gap-y-6 justify-center mb-7">
            {navbarData.map((el, i) => (
              <li key={i}>
                <Link
                  className="text-dark font-medium text-2xl md:text-xl font-helvetica mb-7"
                  href={el.path}
                >
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mb-14">
            <DownloadApps />
          </div>
          <p className="text-lg font-helvetica text-[#9F9FAB] text-center">
            Barcha huquqlar himoyalangan
          </p>
        </div>
      </div>
    </footer>
  );
};
