"use client";

import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const SliderItem = ({ item }) => (
<div className="grid min-w-full grid-cols-5">
  <div className="col-span-5 overflow-hidden lg:col-span-2">
    <img
      src={item.images}
      alt="carousel-image"
      className="block w-full h-full rounded-lg"
    />
  </div>
  <div className="flex flex-col items-stretch col-span-5 p-5 lg:col-span-3">
    <h2 className="mb-2 text-2xl font-bold lg:!text-4xl lg:mb-3">{item.title}</h2>
    <div className="hidden lg:block">
      <p className="text-xl text-gray-500 lg:line-clamp-3">{item.corpus}</p>
    </div>
    <div className="flex-grow"></div>
    <div>
      <button className="my-2 bg-[#F57B1E] px-10 py-2 rounded-lg hover:bg-[#f06e0a]">
        Lire l`&apos;`article
      </button>
    </div>
  </div>
</div>

);

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      images:
        "https://www.actuniger.com/images/2023/Tchiani_et_Lamine_Zeine.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 1",
      corpus:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatem.",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
    {
      images: "https://www.actuniger.com/images/2023/Gouv_CNSP.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 2",
      corpus:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatem.",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
    {
      images:
        "https://media.istockphoto.com/id/1221481559/fr/photo/chef-dhomme-daffaires-menant-un-grand-groupe-de-personnes.jpg?s=612x612&w=0&k=20&c=6SeAt8qhCWNttdPYdB8eKO2fUinRlClGO3t1kmyh3cY=",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 3",
      corpus:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, voluptatem.",
      thematiques: "",
      category: "",
      publishedAt: null,
      published: false,
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="container p-5 mx-auto" style={{ maxWidth: "1200px" }}>
      <article
        className="relative w-full overflow-hidden"
        data-carousel="pause"
      >
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <SliderItem key={index} item={item} />
          ))}
        </div>

        {/* Carousel navigation */}
        <div
          id="carousel-nav"
          className="flex items-center justify-center gap-3 mt-3"
        >
          <button onClick={prevSlide} className="inline-flex items-center">
            <KeyboardArrowLeftIcon />
            <span className="hidden lg:flex">Précédent</span>
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-10 h-2 rounded-lg ${
                  index === currentIndex ? "bg-[#F57B1E]" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="inline-flex items-center">
            <span className="hidden lg:flex">Suivant</span>
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Slider;
