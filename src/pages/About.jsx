import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="lg:py-12 lg:flex lg:justify-center min-h-[80vh]">
      <div className="overflow-hidden lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:h-full">
            <img
              className="object-cover w-full h-full"
              src="../about.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Build Your New <span className="text-indigo-600">House</span>
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <Link to="/product">
              <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
