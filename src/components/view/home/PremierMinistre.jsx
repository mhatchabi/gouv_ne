import React from "react";

const PremierMinistre = () => {
  return (
    <section className="container p-5 mx-auto" style={{ maxWidth: "1200px" }}>
      <header>
        <h2 className="text-4xl font-bold text-center">Le Premier ministre</h2>
      </header>
      <article className="grid min-w-full grid-cols-5 my-5">
        <div className="col-span-5 overflow-hidden lg:col-span-2">
          <img
            src="https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2024/05/23/jad20240523-conf-niger-tchad-lamine-zeine.jpg"
            alt="Le PM"
            className="block w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col items-stretch col-span-5 p-5 lg:col-span-3">
          <h2 className="mb-2 text-2xl font-bold lg:!text-4xl lg:mb-3">
            SE. Ali Lamine Zeine
          </h2>
          <div className="hidden lg:block">
            <p className="text-xl text-gray-500 lg:line-clamp-3">
              Premier Ministre, Chef du Gouvernement, Ministre de l'économie et
              des Finances
            </p>
          </div>
          <div className="flex-grow"></div>
          <div>
            <button className="my-2 bg-[#F57B1E] px-10 py-2 rounded-lg hover:bg-[#f06e0a] float-end">
              Lire la Biographie
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PremierMinistre;
