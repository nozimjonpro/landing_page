import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

type NavbarData = {
  title: string;
  path: string;
};

type NavbarProps = {
  isClicked: Boolean;
  setIsClicked: Dispatch<SetStateAction<Boolean>>;
  forMobile?: Boolean;
};

const navbarData: NavbarData[] = [
  { path: "/restaurants", title: "Restoranlar" },
  { path: "/medicine", title: "Meditsina" },
  { path: "/famous", title: "Mashhurlar" },
  { path: "/contact", title: "Aloqa" },
];

const Navbar = (props: NavbarProps) => {
  const pathname = usePathname();
  return (
    <nav className={props.forMobile ? "md:hidden block" : "md:block hidden"}>
      <ul
        className={` ${
          props.forMobile
            ? "flex flex-col gap-y-5 pt-24 px-5 w-full"
            : "flex items-center lg:gap-x-7 md:gap-x-3 gap-x-2"
        }`}
      >
        {navbarData.map((el, i) => (
          <li className={props.forMobile ? "w-full" : ""} key={i}>
            <Link
              className={`text-xl font-medium font-helvetica py-2.5 px-3  rounded-lg transition-colors duration-300 ${
                el.path === pathname ? "bg-silverBold" : "hover:bg-silver"
              } ${props.forMobile ? "w-full block" : ""}`}
              href={el.path}
              onClick={() => props.setIsClicked(false)}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
