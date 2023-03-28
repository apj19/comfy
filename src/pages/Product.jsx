import React, { useState } from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import { GridLoader } from "react-spinners";

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  const [showLoder, setShowLoader] = useState(false);
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-4">
        {allProducts.map((m, i) => (
          <Card key={i} productDetails={m} />
        ))}
      </section>
    </main>
  );
}

export default Product;
