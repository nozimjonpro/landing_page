import React, { useEffect, useRef, useState } from "react";
import * as i from "@/Assets/Images";
import Image from "next/image";

function HeroCards() {
  const [playing, setPlaying] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.video !== "video") {
        setPlaying(false);
      }
    });
    return window.removeEventListener("click", () => {});
  }, []);
  return (
    <div className="lg:mt-16 md:mt-12 sm:mt-8 mt-6 flex gap-x-5 lg:flex-row flex-col lg:gap-y-0 gap-y-5 items-center justify-center lg:mb-24 md:mb-16 mb-12">
      <div className="flex gap-y-5 sm:gap-y-0 sm:gap-x-5 lg:w-1/2 sm:flex-row flex-col">
        <div className="relative overflow-hidden rounded-30 h-max w-max sm:w-1/2 max-w-60 lg:max-w-max">
          <div className="absolute text-center top-0 -translate-y-full left-1/2 -translate-x-1/2">
            <span className="text-xl font-helvetica mb-3 block">
              Biz haqimizda
            </span>
            <Image className="mx-auto mb-3" src={i.Arrow} alt="Just an icon" />
          </div>
          <Image
            className="rounded-30"
            src={i.AboutVideo}
            alt="Just a placeholder"
            width={295}
            height={416}
            draggable={false}
          />
          <Image
            className="absolute top-1/2 -translate-y-1/2 cursor-pointer left-1/2 -translate-x-1/2"
            src={i.Play}
            draggable={false}
            data-video="video"
            alt="Just an icon"
            onClick={() => setPlaying(true)}
          />
          <iframe
            className={`absolute top-0 right-0 transition-transform duration-300 left-0 bottom-0 rounded-30 ${
              playing ? "translate-y-0" : "translate-y-full"
            }`}
            width="295"
            height="416"
            src="https://www.youtube-nocookie.com/embed/zqVcubB9z48?si=Nb1ePyqDyVAVW_sI&amp;start=2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="rounded-30 w-max sm:w-1/2 max-w-60 lg:max-w-max">
          <Image
            className="rounded-30"
            src={i.HomeDoctor}
            alt="Just a placeholder"
            width={295}
            height={416}
            draggable={false}
          />
        </div>
      </div>
      <div className="flex gap-y-5 sm:gap-y-0 sm:gap-x-5 lg:w-1/2 sm:flex-row flex-col">
        <div className="rounded-30 min-w-max lg:w-1/2">
          <ul className="flex flex-col min-h-[338px] h-full min-w-[240px] lg:min-w-max sm:min-h-max relative">
            <li className="bg-lightViolet p-5 h-1/3 rounded-30 absolute w-full z-0 top-0 truncate">
              <span className="font-helvetica font-bold text-dark text-2xl">
                1000+
              </span>
              <p className="text-dark text-xl">restoranlar</p>
            </li>
            <li className="bg-yellowish p-5 h-1/3 rounded-30 absolute w-full z-10 bottom-[44%] truncate">
              <span className="font-helvetica font-bold text-dark text-2xl">
                1500+
              </span>
              <p className="text-dark text-xl">shifokorlar va klinikalar</p>
            </li>
            <li className="bg-lightGreen p-5 h-1/3 rounded-30 absolute w-full z-20 bottom-[22%] truncate">
              <span className="font-helvetica font-bold text-dark text-2xl">
                40+
              </span>
              <p className="text-dark text-xl">mashhurlar</p>
            </li>
            <li className="bg-lightRed p-5 h-1/3 rounded-30 absolute w-full bottom-0 z-30 truncate">
              <span className="font-helvetica font-bold text-dark text-2xl">
                100%
              </span>
              <p className="text-dark text-xl">qoniqarli biznes egalari</p>
            </li>
          </ul>
        </div>
        <div className="rounded-30 w-max lg:w-1/2 max-w-60 lg:max-w-max">
          <Image
            className="rounded-30"
            src={i.HomeWaiter}
            alt="Just a placeholder"
            width={295}
            height={416}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroCards;
