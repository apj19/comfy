import React, { useState } from "react";
import Hero from "../components/home/Hero";
import Card from "../components/Card";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import NewCollection from "../components/home/NewCollection";
import { randomNumber } from "../utilities/randomNumber";

function Home() {
  const [featuredProductList, setFeaturedProductList] = useState([]);
  const [newcollection, setnewcollection] = useState([]);

  async function featuredProducts() {
    const fetchproductList = await axios.get(products_url);
    setFeaturedProductList(fetchproductList.data.slice(0, 3));
    setnewcollection(fetchproductList.data.slice(4, 7));
  }

  useEffect(() => {
    featuredProducts();
  }, []);

  return (
    <div>
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
