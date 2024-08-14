/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Logo from "../../assets/images/Coat_of_arms_of_Niger.svg.png";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import texteFondamentaux from "../../data/texteFondamentaux";
import institutions from "@/data/institutions";
import MenuListItem from "../toolbox/menuListItem";
import primature from "@/data/primature";
import tourismInfo from "@/data/tourismInfo";

function Footer() {
  return (
    <footer
      className="flex items-start justify-center w-full p-5 shadow"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="container mx-auto">
        <div className="grid justify-center grid-cols-12 gap-x-5">
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Institutions</h2>
            <ul>
              <MenuListItem menuData={institutions}></MenuListItem>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Primature</h2>
            <ul>
            <MenuListItem menuData={primature}></MenuListItem>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Textes Fondamentaux</h2>
            <ul>
            <MenuListItem menuData={texteFondamentaux}></MenuListItem>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Le Niger</h2>
            <ul>
            <MenuListItem menuData={tourismInfo}></MenuListItem>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex flex-col flex-wrap justify-around px-5 my-5 md:flex-row">
          <div>
            <Image
              src={Logo}
              width={200}
              height={200}
              alt="Logo"
              className="hidden md:flex"
            />
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="Logo"
              className="mx-auto md:hidden"
            />
          </div>
          <div className="py-5">
            <ul className="flex items-center justify-center h-full gap-5 md:justify-start">
              <li>
                <Link href={"#"}>
                  <EmailIcon fontSize="large" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <XIcon fontSize="large" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <FacebookIcon fontSize="large" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <LinkedInIcon fontSize="large" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="py-5">
          <p className="text-center">Copyright © Coding-Factory - 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
