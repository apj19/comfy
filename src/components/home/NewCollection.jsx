import React from "react";
import { Link } from "react-router-dom";

function NewCollection({ list }) {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <div href="#" className="relative block group">
              <img
                src={list[0]?.attributes.image}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {list[0]?.name}
                </h3>
                <Link to={`/product/${list[0]?.id}`}>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
          </li>

          <li>
            <div className="relative block group">
              <img
                src={list[1]?.attributes.image}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {list[1]?.name}
                </h3>
                <Link to={`/product/${list[1]?.id}`}>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div href="#" className="relative block group">
              <img
                src={list[2]?.attributes.image}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  {list[2]?.name}
                </h3>

                <Link to={`/product/${list[2]?.id}`}>
                  <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NewCollection;
