import React from "react";
import * as i from "@/Assets/Images";
import Image, { StaticImageData } from "next/image";

const logos: StaticImageData[] = [
  i.PartnerSoy,
  i.Med1,
  i.PartnerRamiz,
  i.Med2,
  i.PartnerAmarant,
  i.Med3,
];

function Partners() {
  return (
    <section className="lg:mb-24 md:mb-16 mb-12">
      <div className="layout_container">
        <h2 className="common__heading md:text-4xl sm:text-3xl text-2xl lg:text-5xl lg:mb-10 md:mb-8 sm:mb-6 mb-4">
          Bizning hamkorlar
        </h2>
        <ul className="flex justify-center lg:gap-y-0 gap-y-3 lg:justify-between lg:flex-nowrap flex-wrap gap-x-3">
          {logos.map((el, i) => (
            <li className="w-max h-max rounded-20" key={i}>
              <Image
                className="md:w-[195px] w-[150px] h-[70px] md:h-[100px] object-center rounded-20"
                src={el}
                alt="Parnter logo"
                width={195}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Partners;
