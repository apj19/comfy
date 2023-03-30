import React, { useState } from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import { GridLoader } from "react-spinners";
import DetailCard from "../components/DetailCard";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { setComany, setCatgory } from "../features/filterSlice";
import { FaCircle } from "react-icons/fa";

function Product() {
  // const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);
  const [orignalProductsList, setorignalProductsList] = useState([]);

  const [showLoder, setShowLoader] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectCatogory, setSelectCatogory] = useState(1);
  const [selectCompany, setselectCompany] = useState("all");
  const [selectCat, setselectcat] = useState("all");
  const [selectColor, setSelectColor] = useState("all");

  const colorsArray = ["#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"];

  async function featuredProducts() {
    setShowLoader(true);

    const fetchproductList = await axios.get(products_url);

    setAllProducts(fetchproductList.data);
    setorignalProductsList(fetchproductList.data);

    setShowLoader(false);
  }

  function handleSorting(e) {
    const currentproducts = [...allProducts];

    switch (e.target.value) {
      case "sortA_Z":
        // currentproducts.reverse();
        currentproducts.sort((str1, str2) => {
          let fa = str1.name.toLowerCase(),
            fb = str2.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        break;
      case "sortZ_A":
        currentproducts
          .sort((str1, str2) => {
            let fa = str1.name.toLowerCase(),
              fb = str2.name.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          })
          .reverse();
        break;
      case "PriceLow_High":
        currentproducts.sort((str1, str2) => str1.price - str2.price);
        break;
      case "PriceHigh_Low":
        currentproducts.sort((str1, str2) => str1.price - str2.price).reverse();
        break;
    }

    setAllProducts(currentproducts);
  }

  function handleSearch(e) {
    let currentproducts;
    if (selectCompany != "all") {
      currentproducts = [...allProducts];
    } else {
      currentproducts = [...orignalProductsList];
    }

    let filteredProducts = currentproducts.filter((f) =>
      f.name.includes(e.target.value)
    );
    setAllProducts(filteredProducts);
  }

  function allFilters(mycat, mycompany) {
    let comp;
    let cat;
    if (mycat == "") {
      cat = selectCat;
    } else {
      cat = mycat;
    }

    if (mycompany == "") {
      comp = selectCompany;
    } else {
      comp = mycompany;
    }
    // console.log("current :catogery", cat, "Current company", comp);

    let filteredProducts = orignalProductsList;

    if (cat == "all") {
      filteredProducts = orignalProductsList;
    } else {
      filteredProducts = filteredProducts.filter((f) => f.category == cat);
    }

    if (comp == "all") {
    } else {
      filteredProducts = filteredProducts.filter((f) => f.company == comp);
    }

    setAllProducts(filteredProducts);
  }

  function clearFilters() {
    setAllProducts(orignalProductsList);
    setSelectCatogory(1);
    setselectCompany("all");
  }

  useEffect(() => {
    featuredProducts();
  }, []);
  return (
    <main className="px-4">
      {showLoder && (
        <div className="absolute w-full h-full backdrop-blur-lg   flex justify-center items-center z-10 left-0 top-0">
          <GridLoader color="#36d7b7" />
        </div>
      )}

      <section className="flex ">
        <section className="hidden md:inline-block sticky w-[200px] h-full left-0 top-12  mt-5 ">
          <div className="flex flex-col px-2">
            <input
              onChange={(e) => handleSearch(e)}
              type="text"
              className="border"
              placeholder="Search"
            />
            <div className="mt-6 ">
              <p className="font-bold">Category</p>
              <div className="text-[#859baf] flex flex-col gap-2 items-start mt-2">
                <button
                  onClick={(e) => {
                    setSelectCatogory(1);
                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 1 ? "border-b" : ""}`}
                  value="all"
                >
                  All
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(2);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 2 ? "border-b" : ""}`}
                  value="office"
                >
                  Office
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(3);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 3 ? "border-b" : ""}`}
                  value="living room"
                >
                  Living Room
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(4);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 4 ? "border-b" : ""}`}
                  value="kitchen"
                >
                  Kitchen
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(5);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 5 ? "border-b" : ""}`}
                  value="bedroom"
                >
                  Bedroom
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(6);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 6 ? "border-b" : ""}`}
                  value="dining"
                >
                  Dining
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(7);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "");
                  }}
                  className={`${selectCatogory == 7 ? "border-b" : ""}`}
                  value="kids"
                >
                  Kids
                </button>
              </div>
            </div>

            <div className="mt-6 mb-4 ">
              <p className="font-bold mb-2">Company</p>
              <select
                onChange={(e) => {
                  setselectCompany(e.target.value);
                  allFilters("", e.target.value);
                }}
                className="w-[50%] border"
                value={selectCompany}
              >
                <option value="all">All</option>
                <option value="marcos">Marcos</option>
                <option value="liddy">Liddy</option>
                <option value="ikea">Ikea</option>
                <option value="caressa">Caressa</option>
              </select>
            </div>

            <div className="mt-6 mb-4 ">
              <p className="font-bold">Colors</p>
              <div className="flex gap-2 justify-start items-center">
                <button
                  className={` ${selectColor == "all" ? "border-b" : ""}`}
                  value="all"
                  onClick={() => setSelectColor("all")}
                >
                  {" "}
                  All
                </button>
                {colorsArray.map((m, i) => (
                  <button
                    key={m}
                    onClick={(e) => setSelectColor(i)}
                    value={m}
                    className={`border-2 bg-[${m}] rounded-full w-6 h-6  
                  ${selectColor == i ? "border-black" : ""}`}
                  ></button>
                ))}
              </div>
            </div>

            <div></div>

            <div>
              <button
                onClick={clearFilters}
                className="text-white bg-red-500 p-2 rounded-md"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>

        <div className="w-[100%]">
          <section className=" flex flex-col md:flex-row justify-center items-center py-4  px-8 border-b mb-2 gap-8">
            <div className="flex gap-4">
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
            </div>
            <hr className="w-[15%]" />
            <p>{allProducts?.length} Products Found</p>
            <hr className="w-[15%]" />
            <div>
              <select onChange={(e) => handleSorting(e)}>
                <option value="sortA_Z">Name (A-Z)</option>
                <option value="sortZ_A">Name (Z-A)</option>
                <option value="PriceHigh_Low">Price (Hightest)</option>
                <option value="PriceLow_High">Price (Lowest)</option>
              </select>
            </div>
          </section>

          {!showDetails && allProducts.length > 0 && (
            <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 gap-4">
              {allProducts.map((m, i) => (
                <Card key={i} productDetails={m} />
              ))}
            </section>
          )}
          {showDetails && allProducts.length > 0 && (
            <section className="grid  grid-cols-1 px-8 gap-4">
              {allProducts.map((m, i) => (
                <DetailCard key={i} productDetails={m} />
              ))}
            </section>
          )}
          {allProducts.length <= 0 && <p>No product Found</p>}
        </div>
      </section>
    </main>
  );
}

export default Product;
