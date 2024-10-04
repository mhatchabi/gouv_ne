import React from "react";
import Link from "next/link";

const card = (item) => (
  <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="w-full h-64 rounded-t-lg"
        src="https://www.gouv.ne/cache/mod_bt_contentslider/d3788c94f620cdc69ef0020e02c727c2-img-20241002-wa0170.jpg"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <Link
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm text-center rounded-lg bg-[#F57B1E] hover:bg-[#f06e0a]"
      >
        Read more
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
  </article>
);

const Audiences = () => {
  return (
    <section className="container p-5 mx-auto" style={{ maxWidth: "1400px" }}>
      <header>
        <h2 className="text-4xl font-bold text-center">Audiences</h2>
      </header>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {[1, 2, 3].map((_, index) => card())}
      </div>
      <div style={{maxWidth: "1200px", margin: "auto"}} className="px-5">
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

export default Audiences;
