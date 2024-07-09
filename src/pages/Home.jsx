import React, { useState } from "react";
import Hero from "../components/home/Hero";
import Card from "../components/Card";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import NewCollection from "../components/home/NewCollection";
import { GridLoader } from "react-spinners";

function Home() {
  const [featuredProductList, setFeaturedProductList] = useState([]);
  const [newcollection, setnewcollection] = useState([]);
  const [showLoder, setShowLoader] = useState(false);

  async function featuredProducts() {
    setShowLoader(true);
    try {
      const fetchproductList = await axios.get(products_url);

      setFeaturedProductList(fetchproductList.data.data.slice(0, 3));
      setnewcollection(fetchproductList.data.data.slice(4, 7));
      setShowLoader(false);
    } catch (error) {
      setShowLoader(false);
      console.error(error);
    }
  }

  useEffect(() => {
    featuredProducts();
  }, []);

  return (
    <div>
      {showLoder && (
        <div className="absolute w-full h-full backdrop-blur-lg   flex justify-center items-center z-10 left-0 top-0">
          {/* <ClockLoader color="#ff0500" /> */}
          <GridLoader color="#36d7b7" />
        </div>
      )}
      <Hero />
      <section className="mt-16">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl text-center">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-4">
          {/* productDetails */}
          {featuredProductList.map((m, i) => (
            <Card key={i} productDetails={m} />
          ))}
        </div>
      </section>
      <NewCollection list={newcollection} />
    </div>
  );
}

export default Home;
