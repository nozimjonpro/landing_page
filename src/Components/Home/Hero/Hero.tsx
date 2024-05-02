"use client";

import React from "react";
import Button from "../../Customs/Button/Button";
import { motion } from "framer-motion";
import HeroCards from "../HeroCards/HeroCards";
import DownloadApps from "@/Components/Customs/Button/DownloadApps";

function Hero() {
  return (
    <section className="md:mt-7 sm:mt-5 mt-4 lg:mt-10">
      <div className="layout_container">
        <h1
          className="font-helvetica font-bold xl:text-6xl md:text-4xl sm:text-3xl text-2xl lg:text-5xl 2xl:text-7xl text-center text-dark text-wrap"
          // initial={{ y: 200, opacity: 0 }}
          // animate={{
          //   y: [50, 0],
          //   opacity: 1,
          //   transition: {
          //     duration: 0.3,
          //     ease: "easeOut",
          //   },
          // }}
        >
          Hayotingizni <span className="text-brand">1SONiA</span> ilovasi <br />
          bilan osonlashtiring
        </h1>
        <p className="text-dark font-helvetica md:mb-6 sm:mb-4 mb-3 lg:mb-8 text-center md:text-lg sm:text-base text-sm lg:text-xl mt-4">
          Restoranda stol bron qilish, shifokorlarga online registratsiya qilish
          <br />
          va mashhurlardan tabrik videolar olish
        </p>
        <div className="w-full md:mt-6 mt-4 lg:mt-8 justify-center md:hidden flex">
          <Button />
        </div>
        <div className="md:block hidden">
          <DownloadApps />
        </div>
        <HeroCards />
      </div>
    </section>
  );
}

export default Hero;
