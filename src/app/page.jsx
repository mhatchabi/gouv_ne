import Slider from "@/components/view/home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-50">
        <Slider />
      </div>
      <div className="flex items-center justify-center text-2xl font-bold bg-blue-300 h-52">
        <h1>Textes Fondamentaux</h1>
      </div>
      {/* <div className="flex items-center justify-center text-2xl font-bold bg-red-300 h-52">
        <h1>Photo de famille</h1>
      </div>
      <div className="flex items-center justify-center text-2xl font-bold bg-green-300 h-52">
        <h1>Axes</h1>
      </div>
      <div className="flex items-center justify-center text-2xl font-bold bg-orange-300 h-52">
        <h1>PM</h1>
      </div>
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
