"use client";

import Image, { StaticImageData } from "next/image";
import React, { CSSProperties } from "react";
import * as i from "@/Assets/Images";
import MoreButton from "@/Components/Customs/Button/MoreButton";
import FamousLabel from "../FamousLabel/FamousLabel";

type MockDataType = {
  title: string;
  icon?: StaticImageData;
  text: string;
  bgColor: string;
};

type FamousDataType = {
  img: StaticImageData;
  title: string;
  serviceType: string;
  className: string;
  styles: CSSProperties;
};

const famousData: FamousDataType[] = [
  {
    img: i.SariqBola,
    title: "Jahongir Xojayev",
    serviceType: "Boshlovchi",
    className: "famous__label famous__first",
    styles: { position: "absolute", top: "275px", rotate: "-8.85deg" },
  },
  {
    img: i.Shokhrukhan,
    title: "Shohruhhon",
    serviceType: "Xonanda",
    className: "famous__label famous__second",
    styles: {
      position: "absolute",
      top: "254px",
      rotate: "9.66deg",
      right: "60px",
    },
  },
  {
    img: i.Ziyoda,
    title: "Ziyoda Qobilova",
    serviceType: "Xonanda",
    className: "famous__label famous__third",
    styles: { position: "absolute", top: "480px", rotate: "-4.34deg" },
  },
  {
    img: i.Shukurullo,
    title: "Shukurullo Isroilov",
    serviceType: "Qiziqchi",
    className: "famous__label famous__fourth",
    styles: {
      position: "absolute",
      top: "480px",
      rotate: "5.65deg",
      right: "60px",
    },
  },
];

const serviceData: MockDataType[] = [
  {
    title: "Restoranlar",
    text: "Restoranlar bo'yicha eng kerakli xizmatlar bir ilova ichida. Eng qulay joylarni o'zimiz sizga tafsiya qilamiz",
    icon: i.HomeResPhone,
    bgColor: "#D2CCF8",
  },
  {
    title: "Meditsina",
    text: "Meditsina yonalishida bizlarda, 10 yildan ortiq tajribaga ega shifokorlar mavjud. Ular aniq sizlarni sarson qilmasdan, kerakli muolajalarni tafsiya qilishadi",
    icon: i.HomeMedPhone,
    bgColor: "#E7F8CC",
  },
];

function Services() {
  const handleClick = () => {};
  return (
    <section className="lg:mb-24 md:mb-16 mb-12">
      <div className="layout_container">
        <div className="w-full flex justify-between lg:flex-row lg:gap-y-0 gap-y-5 flex-col gap-x-5 mb-5">
          {serviceData.map((el, i) => (
            <div
              className={`sm:px-9 px-4 sm:pt-12 pt-8 flex items-center flex-col w-full grow sm:rounded-60 rounded-40`}
              key={i}
              style={{ backgroundColor: el.bgColor }}
            >
              <h3 className="common__heading xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-2">
                {el.title}
              </h3>
              <p className="common_text text-center mb-auto lg:text-xl md:text-lg text-base">
                {el.text}
              </p>
              <div className="md:mt-7 sm:mt-5 mt-4 w-full flex justify-center lg:mb-14 md:mb-10 sm:mb-8 mb-7">
                <MoreButton handleClick={handleClick} />
              </div>
              <div className="sm:px-0 px-5">
                <Image
                  src={el.icon as StaticImageData}
                  alt="Phone pic"
                  draggable={false}
                  width={408}
                  height={354}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full sm:rounded-60 rounded-40 bg-lightGreen relative lg:p-12 md:p-9 pt-6 sm:p-6 p-4 pb-0"
          style={{ paddingBottom: 0 }}
        >
          <h3 className="common__heading xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-2">
            Mashhurlar
          </h3>
          <p
            className="common_text text-center mb-auto lg:text-xl md:text-lg text-base mx-auto"
            style={{ maxWidth: "534px", width: "100%" }}
          >
            Qarindoshlar va yaqinlarni tabriklashga eng zamonaviy yechim.
            San&apos;atkorlarni birrovga chaqirib o&apos;tirmang, endi hammasini
            video tabrik orqali qiling!
          </p>
          <div className="md:mt-7 mt-5 w-full flex justify-center lg:mb-14 md:mb-10 sm:mb-7 mb-5">
            <MoreButton handleClick={handleClick} />
          </div>
          <div className="flex flex-col gap-y-5">
            {famousData.map((el, i) => (
              <FamousLabel
                key={i}
                title={el.title}
                img={el.img}
                serviceType={el.serviceType}
                // styles={el.styles}
                className={el.className}
              />
            ))}
          </div>
          <div className="px-5 md:px-0">
            <Image
              className="mx-auto block"
              src={i.HomeFamPhone as StaticImageData}
              alt="Phone pic"
              draggable={false}
              width={408}
              height={354}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
