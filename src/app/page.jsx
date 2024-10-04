import Gouvernement from "@/components/view/home/ Gouvernement";
import Audiences from "@/components/view/home/Audiences";
import PremierMinistre from "@/components/view/home/PremierMinistre";
import Publications from "@/components/view/home/Publications";
import Slider from "@/components/view/home/Slider";
import TextesFondamentaux from "@/components/view/home/TextesFondamentaux";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Annonces */}
      <div className="bg-gray-100">
        <Slider />
      </div>

      {/* Liens vers les Textes Fondamentaux */}
      <TextesFondamentaux />

      {/* Gouvernement */}
      <div className="bg-gray-100">
        <Gouvernement />
      </div>

      {/* Le Premier Ministre */}
      <PremierMinistre />

      {/* Audiences */}
      <div className="bg-gray-100">
        <Audiences />
      </div>

      {/* Communiques */}
      <Publications />

      {/*
      <div className="flex items-center justify-center text-2xl font-bold bg-yellow-300 h-52">
        <h1>Audiences</h1>
      </div>
      <div className="flex items-center justify-center text-2xl font-bold bg-purple-300 h-52">
        <h1>Communiqués / conseils M / Rapports</h1>
      </div>
      <div className="flex items-center justify-center text-2xl font-bold bg-pink-300 h-52">
        <h1>Institutions / Ministres</h1>
      </div> */}
    </main>
  );
}
