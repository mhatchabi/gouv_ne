import React from "react";
import Link from "next/link";

const ministreCard = (item, index) => (
  <article key={index} className="min-w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
      <img
        className="w-full h-64 rounded-t-lg"
        src={item.image}
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h3>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {item.poste}
      </p>
    </div>
  </article>
);

const Ministres = () => {
  const ministres = [
    {
      name: "Général de Corps d'Armée Salifou Mody",
      poste: "Ministre d'Etat, Ministre de la Défense Nationale",
      image: "https://www.gouv.ne/images/salifou-mody.jpg"
    },
    {
      name: "Général de Brigade Mohamed Toumba",
      poste: "Ministre d'Etat, Ministre de l'Intérieur, de la Sécurité Publique et de l'Administration du Territoire",
      image: "https://www.gouv.ne/images/mohamed-Toumba.jpg"
    },
    {
      name: "Médecin Colonel - Major Garba Hakimi",
      poste: "Ministre de la Santé Publique, de la Population et des Affaires Sociales",
      image: "https://www.gouv.ne/images/Garba-Hakimi.jpg"
    },
    {
      name: "Ministre de la Jeunesse, de la Culture, des Arts et des Sports",
      poste: "Colonel - Major Abdourahamane Amadou",
      image: "https://www.gouv.ne/images/abdourahamane-amadou.jpg"
    },
    {
      name: "Colonel - Major Salissou Mahaman Salissou",
      poste: "Ministre des Transports et de l'Equipement",
      image: "https://www.gouv.ne/images/salissou-mahamane-salissou.jpg"
    },
    {
      name: "Commissaire - Colonel Abarchi Ousmane",
      poste: "Ministre des Mines",
      image: "https://www.gouv.ne/images/abarchi-ousmane.jpg"
    },
    {
      name: "Colonel Maizama Abdoulaye",
      poste: "Ministre de l'Hydraulique, de l'Assainissement et de l'Environnement",
      image: "https://www.gouv.ne/images/maizama-abdoulaye.jpg"
    },
    {
      name: "M. Bakary Yaou Sangaré",
      poste: "Ministre des Affaires Etrangères, de la Coopération et des nigériens à l'Extérieur",
      image: "https://www.gouv.ne/images/bakari-yaou-sangare.jpg"
    },
    {
      name: "Dr Soumana Boubacar",
      poste: "Ministre, Directeur de Cabinet du Président du Conseil National pour la Sauvegarde de la Patrie",
      image: "https://www.gouv.ne/images/soumana-boubacar.jpg"
    },
    {
      name: "Professeur Mamadou Saidou",
      poste: "Ministre de l'Enseignement Supérieur, de la Recherche et de l'Innovation Technologique",
      image: "https://www.gouv.ne/images/mamadou-saidou.jpg"
    },
    {
      name: "Dr Elisabeth Cherif",
      poste: "Ministre de l'Education Nationale, de l'Alphabétisation, de l'Enseignement Professionnel et de la Promotion des Langues Nationales",
      image: "https://www.gouv.ne/images/elisabeth-sherif.jpg"
    },
    {
      name: "M. Alio Daouda",
      poste: "Ministre de la Justice et des Droits de l'Homme, Garde des Sceaux",
      image: "https://www.gouv.ne/images/alio-daouda.jpg"
    },
    {
      name: "M. Salissou Sahirou Adama",
      poste: "Ministre de l'Urbanisme et de l'Habitat",
      image: "https://www.gouv.ne/images/salissou-sahirou.jpg"
    },
    {
      name: "Mme Aïssa Laouan Wandarama",
      poste: "Ministre de l'Action Humanitaire et de la Gestion des Catastrophes",
      image: "https://www.gouv.ne/images/aissa-laouan-wandarama.jpg"
    },
    {
      name: "M. Barké Bako Mahaman Moustapha",
      poste: "Ministre du Pétrole",
      image: "https://www.gouv.ne/images/barke-bako.jpg"
    },
    {
      name: "M. Mohamed Sidi Raliou",
      poste: "Ministre de la Communication, des Postes et de l'Economie Numérique",
      image: "https://www.gouv.ne/images/sidi-mohamed-raliou.jpg"
    },
    {
      name: "M. Seydou Asman",
      poste: "Ministre du Commerce et de l'Industrie",
      image: "https://www.gouv.ne/images/seydou-asmane.jpg"
    },
    {
      name: "Professeur Amadou Haoua",
      poste: "Ministre de l'Energie",
      image: "https://www.gouv.ne/images/amadou-haoua.jpg"
    },
    {
      name: "Colonel Elhadj ousmane Mahaman",
      poste: "Ministre de l'Agriculture et de l'Elevage",
      image: "https://www.gouv.ne/images/ousmane-mahamane.jpg"
    },
    {
      name: "Mme Aissatou Abdoulaye Tondi",
      poste: "Ministre de la Fonction Publique, du Travail et de l'Emploi",
      image: "https://www.gouv.ne/images/aissata-abdoulaye-tondi.jpg"
    },
    {
      name: "Mme Soufiane Aghaichata Guichene",
      poste: "Ministre de l'Artisanat et du Tourisme",
      image: "https://www.gouv.ne/images/soufiane-aghaichata.jpg"
    },
    {
      name: "M. Moumouni Boubacar Saidou",
      poste: "Ministre Délégué auprès du Premier Ministre Chargé des Finances",
      image: "https://www.gouv.ne/images/moumouni-boubacar.jpg"
    },
  ];

  return (
    <section className="p-5">
      <header>
        <h2 className="text-4xl font-bold text-center">
          Institutions / Ministres
        </h2>
      </header>
      <div className="flex gap-5 p-5 overflow-x-auto">
        {ministres.map((i, index) => ministreCard(i, index))}
      </div>
    </section>
  );
};

export default Ministres;
