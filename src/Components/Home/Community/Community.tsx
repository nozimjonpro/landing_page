import React from "react";
import { ProblemMan, Play } from "@/Assets/Images";
import Image from "next/image";

function Community() {
  return (
    <section className="mb-24">
      <div className="layout_container">
        <h2
          className="common__heading xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-2"
          style={{ textAlign: "start" }}
        >
          <span className="text-brand">1SONiA</span> Jamiyatda uchratadigan va
          ko'p vaqt sarflanadigan mavjud tarmoqli muammolarga intelektual yechim
          beradi.
        </h2>
        <p
          className="common__text lg:mb-11 md:mb-9 sm:mb-6 mb-4 lg:text-xl md:text-lg text-base"
          style={{ textAlign: "start" }}
        >
          Biz insonlar rejalashtirgan ishlarimizni o'z vaqtida qilishni
          xohlaymiz. Qancha yumushimizni erta yakunlasak va bizning bisotimizda
          yana ham qo'shimcha bo'sh vaqtimiz bo'lishini bilish hissiyotiga ega
          bo'lishimiz qanchalar yoqimli!
        </p>
        <div className="w-full relative">
          <Image
            className="w-full"
            src={ProblemMan}
            alt="Just a pic"
            height={560}
          />
          <Image
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-16 md:h-16 sm:w-10 sm:h-10 w-7 h-7"
            src={Play}
            alt="Just a pic"
            width={64}
            height={64}
          />
        </div>
      </div>
    </section>
  );
}

export default Community;
