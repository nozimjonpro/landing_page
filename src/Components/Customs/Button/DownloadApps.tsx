import { Android, Ios } from "@/Assets/Images";
import Image from "next/image";
import React from "react";

function DownloadApps() {
  return (
    <div className="flex gap-x-4 justify-center">
      <a href="https://play.google.com/store/apps/details?id=uz.sonia1.soniaapp">
        <Image src={Android} alt="Play store" />
      </a>
      <a href="https://apps.apple.com/uz/app/1sonia/id6444478902">
        <Image src={Ios} alt="App store" />
      </a>
    </div>
  );
}

export default DownloadApps;
