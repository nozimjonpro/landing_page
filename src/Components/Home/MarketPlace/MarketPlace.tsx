"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import * as i from "@/Assets/Images";

type MockDataType = {
  title: string;
  icon?: StaticImageData;
  text: string;
  bgColor: string;
};

const data: MockDataType[] = [
  {
    title: "Afzallik 1",
    icon: i.UserLogin,
    text: "Kerakli joyni yoki odamni toping va barcha kerakli ma'lumot oling",
    bgColor: "#D2CCF8",
  },
  {
    title: "Afzallik 2",
    icon: i.Checklist,
    text: "Narxlarni oldindan ko'ring",
    bgColor: "#F8CCCC",
  },
  {
    title: "Afzallik 3",
    icon: i.Shield,
    text: "Endi telefonsiz ham ish bitadi, osongina bir necha tugmada ishingizni xal qiling",
    bgColor: "#E7F8CC",
  },
  {
    title: "Afzallik 4",
    icon: i.CreditCard,
    text: "Aksiyalarda ishtirok etib, pulingizni tejang",
    bgColor: "#CCF8DE",
  },
];

function MarketPlace() {
  return (
    <section className="lg:mb-24 md:mb-16 mb-12">
      <div className="layout_container">
        <h2 className="common__heading md:text-4xl sm:text-3xl text-2xl lg:text-5xl mb-4">
          Bozorda eng yaxshi <br className="sm:block hidden" /> xizmatni taqdim
          etamiz
        </h2>
        <p className="common__text lg:text-xl md:text-lg text-base lg:mb-12 md:mb-9 sm:mb-7 mb-5">
          Restoranda stol bron qilish, shifokorlarga online registratsiya{" "}
          <br className="md:block hidden" />
          qilish va mashhurlardan tabrik videolar olish
        </p>
        <ul className="flex justify-between lg:flex-nowrap flex-wrap gap-x-10 mb-24 lg:gap-y-0 gap-y-6">
          {data.map((el, i) => (
            <li
              className="grow basis-0 min-w-44 lg:text-start text-center"
              key={i}
            >
              <div
                className="rounded-xl p-2.5 mb-4 w-max lg:mx-0 mx-auto"
                style={{ backgroundColor: el.bgColor }}
              >
                <Image src={el.icon as StaticImageData} alt="" />
              </div>
              <h3 className="lg:text-2xl text-lg font-helvetica font-bold text-dark mb-1">
                {el.title}
              </h3>
              <p className="font-helvetica lg:text-lg text-base text-dark">
                {el.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MarketPlace;
