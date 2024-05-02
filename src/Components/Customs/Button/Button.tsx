"use client";

import React, { useEffect, useState } from "react";

function Button() {
  const getAppStoreLink = () => {
    // Define app store links for Android and iOS
    const androidAppLink =
      "https://play.google.com/store/apps/details?id=uz.sonia1.soniaapp";
    const iosAppLink = "https://apps.apple.com/uz/app/1sonia/id6444478902";

    // Get the user agent string in lowercase
    const userAgent = navigator.userAgent.toLowerCase();

    // Check if the user is using an Android device
    const isAndroid = userAgent.includes("android");

    // Check if the user is using an iOS device (iPhone, iPad, or iPod)
    const isiOS =
      userAgent.includes("iphone") ||
      userAgent.includes("ipad") ||
      userAgent.includes("ipod");

    // Determine the appropriate app store link based on the device
    if (isAndroid) window.location.href = androidAppLink;
    else if (isiOS) window.location.href = iosAppLink;
    else window.location.href = "https://your_website.com/apps";
  };
  return (
    <button
      className="rounded-xl bg-brand text-xl font-medium text-white p-2.5 md:p-4 block max-w-56 w-full text-center"
      onClick={getAppStoreLink}
    >
      Ilovani yulab olish
    </button>
  );
}

export default Button;
