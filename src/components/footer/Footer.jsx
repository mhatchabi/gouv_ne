import React from "react";
import Logo from "../../assets/images/Coat_of_arms_of_Niger.svg.png";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

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
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Présidence
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Assemblée Nationale
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Gouvernement
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Cour des Comptes
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Cour Constitutionnelle
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Cour de Cassation
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Conseil d`&apos;`Etat
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Commission Nationale Electorale Indépendante
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Conseil Supérieur de la Communication
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Conseil Economique, Social et Culturel
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Médiature de la République
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Commission Nationale des Droits Humains
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Primature</h2>
            <ul>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Biographie du Premier Ministre
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Cabinet
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Secrétariat Général du Gouvernement
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Etablissements sous tutelle
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Les Anciens Premiers Ministres
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Textes Fondamentaux</h2>
            <ul>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Constitution de la 7ème République
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Code Electoral
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Charte des Partis politiques
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Statut de l`&apos;`opposition
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Autres Textes
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Recueil de Textes
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="pb-2 font-bold border-b-2">Le Niger</h2>
            <ul>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Présentation
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Les Symboles
                </li>
              </Link>
              <Link href={"#"}>
                <li className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">
                  Les Sites touristiques du Niger
                </li>
              </Link>
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
