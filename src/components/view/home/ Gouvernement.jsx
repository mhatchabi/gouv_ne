import React from "react";
import Link from "next/link";
import GavelIcon from "@mui/icons-material/Gavel";

const Gouvernement = () => {
  const axes = [
    {
      _id: 1,
      images: "",
      title: "Renforcement de la Sécurité et de la Cohésion Sociale",
      corpus: "",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
    {
      _id: 2,
      images: "",
      title: "Promotion de la Bonne Gouvernance",
      corpus: "",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
    {
      _id: 3,
      images: "",
      title:
        "Développement des Bases de Production pour la Souveraineté Économique",
      corpus: "",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
    {
      _id: 4,
      images: "",
      title: "Accélération des Réformes Sociales",
      corpus: "",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
  ];
  return (
    <section className="container p-5 mx-auto" style={{ maxWidth: "1200px" }}>
      <header className="flex items-center justify-center mb-5">
        <img
          src="https://nigerdiaspora.net/images/008_Nigerdiaspora/Conseil_min_14_10_2023.jpg"
          alt="Gouvernement"
          className="rounded-lg"
        />
      </header>
      <h2 className="text-4xl font-bold text-center">
        Axes stratégiques du CNSP
      </h2>
      <div className="grid grid-cols-1 gap-4 my-5 lg:grid-cols-4 md:grid-cols-2">
        {axes.map((item, index) => (
          <Link href={"#"} key={item._id} className="block h-full">
            <article className="flex flex-col items-center justify-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#F57B1E] h-full">
              <GavelIcon sx={{ fontSize: "40px" }} />
              <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gouvernement;
