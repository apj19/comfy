import React from "react";
import { Link } from "react-router-dom";

function NewCollection({ list }) {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p class="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <img
                src={list[0]?.image}
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">{list[0]?.name}</h3>
                <Link to={`/product/${list[0]?.id}`}>
                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </Link>
              </div>
            </a>
          </li>

          <li>
            <a href="#" class="relative block group">
              <img
                src={list[1]?.image}
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">{list[1]?.name}</h3>
                <Link to={`/product/${list[1]?.id}`}>
                  <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </Link>
              </div>
            </a>
          </li>

          <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" class="relative block group">
              <img
                src={list[2]?.image}
                alt=""
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">{list[2]?.name}</h3>

                <Link to={`/product/${list[2]?.id}`}>
                  <button class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </button>
                </Link>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NewCollection;
