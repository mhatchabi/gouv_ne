"use client";

import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";

function MobileScreenMenu({
  openStates,
  setOpenStates,
  sousMenuData,
  setIsMobileMenuOpen,
}) {
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
    <React.Fragment>
      <nav className="items-center justify-end mb-2 lg:hidden">
        <ul className="flex items-center justify-center">
          <li>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                className="w-64 rounded-lg"
                placeholder="Recherche ..."
              />
              <button
                type="submit"
                className="px-3 py-2 ml-2 rounded-lg cursor-pointer"
                style={{ background: "#F77D23" }}
              >
                {<SearchIcon />}
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <nav className="lg:hidden">
        <ul className="flex flex-col items-center px-4 bg-white shadow-lg">
          <Link
            href={"#"}
            className="flex items-center justify-start w-full py-2 border-b-2 cursor-pointer hover:border-[#E55E19]"
            onClick={() => setIsMobileMenuOpen(false)}
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
            className={`relative flex flex-col items-center w-full py-2 border-b-2 cursor-pointer ${
              !isInstitutionsOpen && "hover:border-[#E55E19]"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isInstitutionsOpen && "border-b-2 pb-2 border-[#E55E19]"
              }`}
            >
              {/* Institutions Menu */}
              Institutions
              <KeyboardArrowDownIcon
                className={`transition-transform duration-300 ${
                  isInstitutionsOpen ? "rotate-180" : ""
                } ml-2`}
              />
            </div>
            {isInstitutionsOpen && (
              <ul ref={institutionsRef} className="w-full mt-1 bg-white">
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
            className={`relative flex flex-col items-center w-full py-2 border-b-2 cursor-pointer ${
              !isPrimatureOpen && "hover:border-[#E55E19]"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isPrimatureOpen && "border-b-2 pb-2 border-[#E55E19]"
              }`}
            >
              {/* Primature Menu */}
              Primature
              <KeyboardArrowDownIcon
                className={`transition-transform duration-300 ${
                  isPrimatureOpen ? "rotate-180" : ""
                } ml-2`}
              />
            </div>
            {isPrimatureOpen && (
              <ul ref={primatureRef} className="w-full mt-1 bg-white">
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
            className={`relative flex flex-col items-center w-full py-2 border-b-2 cursor-pointer ${
              !isTextesFondamentauxOpen && "hover:border-[#E55E19]"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isTextesFondamentauxOpen && "border-b-2 pb-2 border-[#E55E19]"
              }`}
            >
              {/* Textes Fondamentaux Menu */}
              Textes Fondamentaux
              <KeyboardArrowDownIcon
                className={`transition-transform duration-300 ${
                  isTextesFondamentauxOpen ? "rotate-180" : ""
                } ml-2`}
              />
            </div>
            {isTextesFondamentauxOpen && (
              <ul ref={textFondamentauxRef} className="w-full mt-1 bg-white">
                {texteFondamentaux.map((i, index) => {
                  return (
                    <Link
                      key={`sousMenuTexteFondamentaux_${index}`}
                      href={i.url}
                    >
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
            className={`relative flex flex-col items-center w-full py-2 border-b-2 cursor-pointer ${
              !isTourismeOpen && "hover:border-[#E55E19]"
            }`}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isTourismeOpen && "border-b-2 pb-2 border-[#E55E19]"
              }`}
            >
              {/* Le Niger Menu */}
              Le Niger
              <KeyboardArrowDownIcon
                className={`transition-transform duration-300 ${
                  isTourismeOpen ? "rotate-180" : ""
                } ml-2`}
              />
            </div>
            {isTourismeOpen && (
              <ul ref={tourismeRef} className="w-full mt-1 bg-white">
                {tourismInfo.map((i, index) => {
                  return (
                    <Link
                      key={`sousMenuTexteFondamentaux_${index}`}
                      href={i.url}
                    >
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
            className="flex items-center justify-start w-full py-2 border-b-2 cursor-pointer hover:border-[#E55E19]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li>Ministères</li>
          </Link>
          <Link
            href={"#"}
            className="flex items-center justify-start w-full py-2 border-b-2 cursor-pointer hover:border-[#E55E19]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <li>Programmes</li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default MobileScreenMenu;
