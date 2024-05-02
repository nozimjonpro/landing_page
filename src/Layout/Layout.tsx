import React from "react";
import { Header } from "@/Components/Header/Header";
import { Footer } from "@/Components/Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};
