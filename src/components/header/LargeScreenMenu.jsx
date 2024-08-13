"use client";

import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

function LargeScreenMenu({ openStates, setOpenStates, sousMenuData }) {
  const institutionsRef = useRef(null);
  const primatureRef = useRef(null);
  const textFondamentauxRef = useRef(null);
  const tourismeRef = useRef(null);

  const {
    isInstitutionsOpen,
    isPrimatureOpen,
    isTextesFondamentauxOpen,
    isTourismeOpen,
  } = openStates;
  const {
    setIsInstitutionsOpen,
    setIsPrimatureOpen,
    setIsTextesFondamentauxOpen,
    setIsTourismeOpen,
  } = setOpenStates;
  const { institutions, primature, texteFondamentaux, tourismInfo } =
    sousMenuData;

  return (
    <nav className="justify-end hidden mr-10 lg:flex">
      <ul className="relative flex items-center justify-end my-2 gap-x-5">
        <Link
          href={"#"}
          className="flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          <li>Accueil</li>
        </Link>

        <li
          onClick={() => {
            setIsInstitutionsOpen((prev) => !prev);
            setIsPrimatureOpen(false);
            setIsTextesFondamentauxOpen(false);
            setIsTourismeOpen(false);
          }}
          className="relative flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          {/* Institutions Menu */}
          Institutions
          <KeyboardArrowDownIcon
            className={`transition-transform duration-300 ${
              isInstitutionsOpen ? "rotate-180" : ""
            }`}
          />
          {isInstitutionsOpen && (
            <ul
              ref={institutionsRef}
              className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg top-full w-[400px]"
            >
              {institutions.map((i, index) => {
                return (
                  <Link key={`sousMenuInstiturions_${index}`} href={i.url}>
                    <li className="px-4 py-2 border-b-2 hover:border-[#E55E19]">
                      {i.urlLabel}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </li>

        <li
          onClick={() => {
            setIsPrimatureOpen((prev) => !prev);
            setIsInstitutionsOpen(false);
            setIsTextesFondamentauxOpen(false);
            setIsTourismeOpen(false);
          }}
          className="relative flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          {/* Primature Menu */}
          Primature
          <KeyboardArrowDownIcon
            className={`transition-transform duration-300 ${
              isPrimatureOpen ? "rotate-180" : ""
            }`}
          />
          {isPrimatureOpen && (
            <ul
              ref={primatureRef}
              className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg top-full w-[400px]"
            >
              {primature.map((i, index) => {
                return (
                  <Link key={`sousMenuPrimature_${index}`} href={i.url}>
                    <li className="px-4 py-2 border-b-2 hover:border-[#E55E19]">
                      {i.urlLabel}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </li>

        <li
          onClick={() => {
            setIsTextesFondamentauxOpen((prev) => !prev);
            setIsInstitutionsOpen(false);
            setIsPrimatureOpen(false);
            setIsTourismeOpen(false);
          }}
          className="relative flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          {/* Textes Fondamentaux Menu */}
          Textes Fondamentaux
          <KeyboardArrowDownIcon
            className={`transition-transform duration-300 ${
              isTextesFondamentauxOpen ? "rotate-180" : ""
            }`}
          />
          {isTextesFondamentauxOpen && (
            <ul
              ref={textFondamentauxRef}
              className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg top-full w-[400px]"
            >
              {texteFondamentaux.map((i, index) => {
                return (
                  <Link key={`sousMenuTexteFondamentaux_${index}`} href={i.url}>
                    <li className="px-4 py-2 border-b-2 hover:border-[#E55E19]">
                      {i.urlLabel}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </li>

        <li
          onClick={() => {
            setIsTourismeOpen((prev) => !prev);
            setIsInstitutionsOpen(false);
            setIsPrimatureOpen(false);
            setIsTextesFondamentauxOpen(false);
          }}
          className="relative flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          {/* Le Niger Menu */}
          Le Niger
          <KeyboardArrowDownIcon
            className={`transition-transform duration-300 ${
              isTourismeOpen ? "rotate-180" : ""
            }`}
          />
          {isTourismeOpen && (
            <ul
              ref={tourismeRef}
              className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg top-full w-[400px]"
            >
              {tourismInfo.map((i, index) => {
                return (
                  <Link key={`sousMenuNiger_${index}`} href={i.url}>
                    <li className="px-4 py-2 border-b-2 hover:border-[#E55E19]">
                      {i.urlLabel}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </li>

        <Link
          href={"#"}
          className="flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          <li>Ministères</li>
        </Link>

        <Link
          href={"#"}
          className="flex items-center w-auto py-2 border-b-2 border-transparent cursor-pointer hover:border-[#E55E19]"
        >
          <li>Programmes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default LargeScreenMenu;
