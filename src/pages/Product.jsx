import React, { useState } from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";

function Product() {
  const [allProducts, setAllProducts] = useState([]);
  async function featuredProducts() {
    const fetchproductList = await axios.get(products_url);
    // console.log(fetchproductList.data.slice(0, 3));
    setAllProducts(fetchproductList.data);
  }

  useEffect(() => {
    featuredProducts();
  }, []);
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-4">
        {allProducts.map((m, i) => (
          <Card key={i} productDetails={m} />
        ))}
      </section>
    </main>
  );
}

export default Product;
