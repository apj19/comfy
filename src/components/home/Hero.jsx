import React from "react";
import { Link } from "react-router-dom";

function hero() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Design your DreamHouse
          </h2>

          <p className=" text-gray-500 md:mt-4 md:block">
            The perfect furniture for a dream house should reflect your personal
            style and create a space that is both beautiful and functional. It
            should complement the overall aesthetic of the house and create a
            cozy and inviting atmosphere
          </p>

          <div className="mt-4 md:mt-8">
            <Link to="product">
              <p className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 ">
                Shop
              </p>
            </Link>
          </div>
        </div>
      </div>

      <img
        alt="Violin"
        src="../himg.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
}

export default hero;
