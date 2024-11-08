"use client";

import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/Coat_of_arms_of_Niger.svg.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import LargeScreenMenu from "./LargeScreenMenu";
import MobileScreenMenu from "./MobileScreenMenu";
import SearchIcon from "@mui/icons-material/Search";

const institutions = [
  { urlLabel: "Présidence", url: "#" },
  { urlLabel: "Assemblée Nationale", url: "#" },
  { urlLabel: "Gouvernement", url: "#" },
  { urlLabel: "Cour des Comptes", url: "#" },
  { urlLabel: "Cour Constitutionnelle", url: "#" },
  { urlLabel: "Cour de Cassation", url: "#" },
  { urlLabel: "Conseil d'Etat", url: "#" },
  { urlLabel: "Commission Nationale Electorale Indépendante", url: "#" },
  { urlLabel: "Conseil Supérieur de la Communication", url: "#" },
  { urlLabel: "Conseil Economique, Social et Culturel", url: "#" },
  { urlLabel: "Médiature de la République", url: "#" },
  { urlLabel: "Commission Nationale des Droits Humains", url: "#" },
];

const primature = [
  { urlLabel: "Biographie du Premier Ministre", url: "#" },
  { urlLabel: "Cabinet", url: "#" },
  { urlLabel: "Secrétariat Général du Gouvernement", url: "#" },
  { urlLabel: "Etablissements sous tutelle", url: "#" },
  { urlLabel: "Les Anciens Premiers Ministres", url: "#" },
];

const texteFondamentaux = [
  { urlLabel: "Constitution de la 7ème République", url: "#" },
  { urlLabel: "Code Electoral", url: "#" },
  { urlLabel: "Charte des Partis politiques", url: "#" },
  { urlLabel: "Statut de l'opposition", url: "#" },
  { urlLabel: "Autres Textes", url: "#" },
  { urlLabel: "Recueil de Textes", url: "#" },
];

const tourismInfo = [
  { urlLabel: "Présentation", url: "#" },
  { urlLabel: "Les Symboles", url: "#" },
  { urlLabel: "Les Sites touristiques du Niger", url: "#" },
];

const sousMenuData = {
  institutions,
  primature,
  texteFondamentaux,
  tourismInfo,
};

function Header() {
  // États pour gérer l'ouverture des sous-menus
  const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);
  const [isPrimatureOpen, setIsPrimatureOpen] = useState(false);
  const [isTextesFondamentauxOpen, setIsTextesFondamentauxOpen] =
    useState(false);
  const [isTourismeOpen, setIsTourismeOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openStates = {
    isInstitutionsOpen,
    isPrimatureOpen,
    isTextesFondamentauxOpen,
    isTourismeOpen,
  };

  const setOpenStates = {
    setIsInstitutionsOpen,
    setIsPrimatureOpen,
    setIsTextesFondamentauxOpen,
    setIsTourismeOpen,
  };

  return (
    <header
      className="sticky top-0 flex items-start justify-center bg-white shadow-lg"
      style={{ zIndex: "100" }}
    >
      <div className="container max-w-[1200px]" style={{maxWidth: "1200px"}}>
        <div>
          <div className="flex flex-col justify-center p-5 md:flex-row md:justify-between">
            <Link href={"#"} className="items-center justify-center md:flex">
              <div className="justify-center hidden md:flex">
                <Image src={Logo} alt="Logo" width={200} height={200} />
              </div>
              <div className="flex justify-center md:hidden">
                <Image src={Logo} alt="Logo" width={100} height={100} />
              </div>
              <div className="flex-col justify-center text-center md:hidden">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <strong>Gouvernement du Niger</strong>
                </span>
                <div className="">
                  <strong className="italic font-normal">Fraternité</strong>{" "}
                  {" | "}
                  <strong className="italic font-normal">Travail</strong>{" "}
                  {" | "}
                  <strong className="italic font-normal">Progrès</strong>
                </div>
              </div>
              <div className="flex-col justify-center hidden ml-5 text-center md:flex">
                <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <strong>Gouvernement du Niger</strong>
                </span>
                <div className="">
                  <strong className="block italic font-normal text-start">
                    Fraternité
                  </strong>{" "}
                  <strong className="block italic font-normal text-start">
                    Travail
                  </strong>{" "}
                  <strong className="block italic font-normal text-start">
                    Progrès
                  </strong>
                </div>
              </div>
            </Link>
            <nav className="items-center justify-end hidden lg:flex">
              <ul className="flex items-center mr-5 lg:mr-10 gap-x-5">
                <li>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="search"
                      className="rounded-lg"
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
          </div>

          <hr />

          <div className="flex items-center justify-end py-2 mr-5 lg:hidden">
            <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              Menu
              {isMobileMenuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button>
          </div>

          {/* Navigation pour écrans larges */}
          <LargeScreenMenu
            openStates={openStates}
            setOpenStates={setOpenStates}
            sousMenuData={sousMenuData}
          />

          {/* Navigation pour mobile */}
          {isMobileMenuOpen && (
            <MobileScreenMenu
              openStates={openStates}
              setOpenStates={setOpenStates}
              sousMenuData={sousMenuData}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
