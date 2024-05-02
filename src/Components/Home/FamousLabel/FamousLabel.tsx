import { Galochka } from "@/Assets/Images";
import Image, { StaticImageData } from "next/image";
import React, { CSSProperties } from "react";
import { animate, motion } from "framer-motion";

type FamousLabelProps = {
  img: StaticImageData;
  title: string;
  serviceType: string;
  className: string;
  styles?: CSSProperties;
};

function FamousLabel(props: FamousLabelProps) {
  return (
    <motion.div
      className={`${props.className} lg:max-w-72 md:max-w-52 max-w-48 w-full bg-white rounded-xl flex gap-x-2 items-center p-3`}
      style={props.styles}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        className="lg:w-16 md:w-10 lg:h-16 md:h-10 h-7 w-7"
        src={props.img}
        alt="Famous pic"
        width={64}
        height={64}
      />
      <div>
        <h5 className="font-helvetica font-bold  text-xs lg:text-lg text-dark flex justify-between items-center">
          {props.title}
          <Image
            className="ml-1 md:w-5 w-3 md:h-5 h-3"
            src={Galochka}
            alt="Just an icon"
            width={20}
            height={20}
          />
        </h5>
        <p className="text-dark font-helvetica  text-xs lg:text-lg">
          {props.serviceType}
        </p>
      </div>
    </motion.div>
  );
}

export default FamousLabel;
