import React from "react";
import BoardGames from "../../assets/board-games.jpg";

export default function Card() {
  return (
    <div className="max-w-sm bg-dark-blue border border-gray rounded-lg shadow dark:bg-blue dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={BoardGames}
          alt="img"
          data-testid="serviceImg"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sharing Moments
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          quasi?
        </p>
        <div className="flex justify-between">
          <a
            href="/service"
            className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-dark-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-testid="seeMoreLink"
          >
            See more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/service"
            className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-dark-blue bg-yellow rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-testid="contactLink"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
