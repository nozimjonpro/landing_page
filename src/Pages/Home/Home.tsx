import React from "react";
import Hero from "@/Components/Home/Hero/Hero";
import Partners from "@/Components/Home/Partners/Partners";
import MarketPlace from "@/Components/Home/MarketPlace/MarketPlace";
import Services from "@/Components/Home/Services/Services";
import OnlineMap from "@/Components/Home/OnlineMap/OnlineMap";
import Community from "@/Components/Home/Community/Community";

export const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      <Partners />
      <MarketPlace />
      <Services />
      {/* <OnlineMap /> */}
      <Community />
    </div>
  );
};
