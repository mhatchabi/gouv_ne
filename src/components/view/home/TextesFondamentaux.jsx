import React from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import Link from "next/link";

const TextesFondamentaux = () => {
  const textes = [
    {
      title: "Constitution 7ème République",
      link: "#",
    },
    {
      title: "Code Electoral",
      link: "#",
    },
    {
      title: "Charte des Partis Politiques",
      link: "#",
    },
    {
      title: "Status de l'Opposition",
      link: "#",
    },
    {
      title: "Recueil de Textes",
      link: "#",
    },
    {
      title: "Autres Textes",
      link: "#",
    },
  ];

  return (
    <section className="container p-5 mx-auto" style={{ maxWidth: "1200px" }}>
      <h2 className="text-4xl font-bold text-center">Textes Fondamentaux</h2>
      <div className="grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 md:grid-cols-3">
        {textes.map((item, index) => (
          <Link href={item.link} key={index} className="block h-full">
            <article className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#F57B1E] h-full">
              <GavelIcon sx={{ fontSize: "40px" }} />
              <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TextesFondamentaux;
