import React from "react";
import Link from "next/link";
import GavelIcon from "@mui/icons-material/Gavel";

const pubicationsCards = (items) =>
  items.map((item, index) => (
    <Link href={item.link} key={index} className="block h-full">
      <article className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-[#F57B1E] h-full">
        <GavelIcon sx={{ fontSize: "40px" }} />
        <h2 className="mb-2 text-xl font-bold">{item.title}</h2>
      </article>
    </Link>
  ));

const Publications = () => {
  const publications = [
    {
      title: "Communiqués",
      link: "#",
    },
    {
      title: "Conseil des Ministres",
      link: "#",
    },
    {
      title: "Rapports",
      link: "#",
    },
  ];

  return (
    <section className="container p-5 mx-auto" style={{ maxWidth: "1200px" }}>
      <header>
        <h2 className="text-4xl font-bold text-center">Publications</h2>
      </header>
      <div className="grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 md:grid-cols-3">
        {pubicationsCards(publications)}
      </div>
      <div style={{ maxWidth: "1250px" }}>
        <Link href={"#"} className="flex items-center justify-end">
          Voir plus{" "}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Publications;
