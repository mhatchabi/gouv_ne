import Gouvernement from "@/components/view/home/ Gouvernement";
import Audiences from "@/components/view/home/Audiences";
import Ministres from "@/components/view/home/Ministres";
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

      {/* Institutions / Ministres */}
      <div className="bg-gray-100">
        <Ministres />
      </div>
    </main>
  );
}
