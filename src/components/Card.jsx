import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ productDetails }) {
  return (
    <div className="block cursor-pointer rounded-lg p-4 shadow-sm shadow-indigo-100 ">
      <Link to={`/product/${productDetails.id}`}>
        <img
          alt="Home"
          src={productDetails.image}
          className="h-56 w-full rounded-md object-cover hover:scale-105 transition-all saturate-300 ease-in-out"
        />

        <div className="mt-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium ">{productDetails.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                <FaRupeeSign className="inline-block" />
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(productDetails.price)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
