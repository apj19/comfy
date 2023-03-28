import React, { useState } from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import { GridLoader } from "react-spinners";
import DetailCard from "../components/DetailCard";
import { BsFillGridFill, BsList } from "react-icons/bs";

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [showLoder, setShowLoader] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  async function featuredProducts() {
    setShowLoader(true);
    const fetchproductList = await axios.get(products_url);
    // console.log(fetchproductList.data.slice(0, 3));
    setAllProducts(fetchproductList.data);
    setShowLoader(false);
  }

  useEffect(() => {
    featuredProducts();
  }, []);
  return (
    <main>
      {showLoder && (
        <div className="absolute w-full h-full backdrop-blur-lg   flex justify-center items-center z-10 left-0 top-0">
          {/* <ClockLoader color="#ff0500" /> */}
          <GridLoader color="#36d7b7" />
        </div>
      )}

      <section className="flex ">
        <section className="hidden md:inline-block sticky w-[200px] h-full left-0 top-12 border ">
          sadasfsdfsd sadasfsdfsd sadasfsdfsd sadasfsdfsd sadasfsdfsd
          sadasfsdfsd sadasfsdfsd sadasfsdfsd sadasfsdfsd sadasfsdfsd
          sadasfsdfsd sadasfsdfsd sadasfsdfsd
        </section>
        <div className="w-[100%]">
          <section className="hidden md:flex justify-center items-center py-4  px-8 border-b ">
            <button
              onClick={() => setShowDetails(false)}
              className={`border p-1 ${
                showDetails ? "" : "text-white bg-black"
              }`}
            >
              <BsFillGridFill className="  text-[1.5rem]" />
            </button>
            <button
              onClick={() => setShowDetails(true)}
              className={`border p-1 ${
                showDetails ? "text-white bg-black" : ""
              }`}
            >
              <BsList className="  text-[1.5rem]" />
            </button>
            <p>{allProducts?.length} Products Found</p>
          </section>

          {!showDetails && (
            <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 gap-4">
              {allProducts.map((m, i) => (
                <Card key={i} productDetails={m} />
              ))}
            </section>
          )}
          {showDetails && (
            <section className="grid  grid-cols-1 px-8 gap-4">
              {allProducts.map((m, i) => (
                <DetailCard key={i} productDetails={m} />
              ))}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

export default Product;
