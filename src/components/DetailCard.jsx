import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function DetailCard({ productDetails }) {
  return (
    // <Link to={`/product/${productDetails.id}`}></Link>
    <div className="p-4 grid grid-cols-1 md:grid-cols-2  gap-8 jusify-center items-center -z-10">
      <img
        alt="Home"
        src={productDetails.image}
        className=" w-full h-[200px] object-cover rounded-md hover:scale-105 transition-all saturate-300 ease-in-out border"
      />

      <div className="flex flex-col gap-2 justify-center items-start ">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">
            {productDetails.name}
          </h1>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <FaRupeeSign className="inline-block" />
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(productDetails.price)}
          </p>
        </div>
        <p className="text-[0.9rem]">
          {productDetails.description.substr(0, 100) + "..."}
        </p>
        <Link to={`/product/${productDetails.id}`}>
          <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DetailCard;
