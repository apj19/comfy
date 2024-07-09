import React, { useState } from "react";
import ProductDetailsCard from "../components/ProductDetailsCard";
import { products_url } from "../utilities/EndPoints";
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import { GridLoader } from "react-spinners";
import DetailCard from "../components/DetailCard";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [orignalProductsList, setorignalProductsList] = useState([]);
  const [filteredProductList, setfilteredProductList] = useState([
    ...allProducts,
  ]);

  const [showLoder, setShowLoader] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectCatogory, setSelectCatogory] = useState(1);
  const [selectCompany, setselectCompany] = useState("all");
  const [selectCat, setselectcat] = useState("all");
  const [selectColor, setSelectColor] = useState("all");
  const [selectfiltercolor, setselectfiltercolor] = useState("all");
  const [showMobilefilter, setshowMobilefilter] = useState(false);

  const [selectPricefilter, setselectPricefilter] = useState("330000");

  const colorsArray = ["#33FF57", "#3366FF", "#FF5733", "#FFFF00", "#ffb900"];

  async function featuredProducts() {
    setShowLoader(true);
    try {
      const fetchproductList = await axios.get(products_url);
      // console.log(fetchproductList.data.data);
      setAllProducts(fetchproductList.data.data);
      setorignalProductsList(fetchproductList.data.data);
    } catch (error) {
      navigate("/notfound");
    }

    setShowLoader(false);
  }

  function handleSorting(e) {
    const currentproducts = [...allProducts];
    // console.log("current products");
    // console.log(currentproducts[0]);

    switch (e.target.value) {
      case "sortA_Z":
        // currentproducts.reverse();
        currentproducts.sort((str1, str2) => {
          let fa = str1.attributes.title.toLowerCase(),
            fb = str2.attributes.title.toLowerCase();

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
            let fa = str1.attributes.title.toLowerCase(),
              fb = str2.attributes.title.toLowerCase();

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
        currentproducts.sort(
          (str1, str2) => str1.attributes.price - str2.attributes.price
        );
        break;
      case "PriceHigh_Low":
        currentproducts
          .sort((str1, str2) => str1.attributes.price - str2.attributes.price)
          .reverse();
        break;
    }

    setAllProducts(currentproducts);
  }

  function handleSearch(e) {
    let currentproducts;
    // setfilteredProductList([...allProducts]);
    if (filteredProductList.length == 0) {
      currentproducts = orignalProductsList;
    } else {
      currentproducts = filteredProductList;
    }

    let filteredProducts = currentproducts.filter((f) =>
      f.attributes.title.includes(e.target.value)
    );
    setAllProducts(filteredProducts);
  }

  function allFilters(mycat, mycompany, incolor, inprice = 330000) {
    let comp;
    let cat;
    let color;
    let price;
    // console.log("state values", selectCat, selectCompany, selectfiltercolor);

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

    if (incolor == "") {
      color = selectfiltercolor;
    } else {
      color = incolor;
    }

    if (inprice == "" || inprice == undefined) {
      price = selectPricefilter;
    } else {
      price = inprice;
    }
    // console.log("current :catogery", cat, "Current company", comp);

    let filteredProducts = orignalProductsList;

    if (cat == "all") {
      filteredProducts = orignalProductsList;
    } else {
      filteredProducts = filteredProducts.filter((f) => {
        // console.log(f.attributes.company);
        return f.attributes.category == cat;
      });
    }

    if (comp == "all") {
    } else {
      filteredProducts = filteredProducts.filter(
        (f) => f.attributes.company == comp
      );
    }

    if (color == "all") {
    } else {
      filteredProducts = filteredProducts.filter((f) => {
        return f.attributes.colors.includes(color);
      });
    }

    if (price == 330000) {
    } else {
      filteredProducts = filteredProducts.filter(
        (f) => parseInt(f.attributes.price) < parseInt(price)
      );
    }

    setfilteredProductList(filteredProducts);
    setAllProducts(filteredProducts);
    // console.log("input values", mycat, mycompany, color);
  }

  function clearFilters() {
    setAllProducts(orignalProductsList);
    setSelectCatogory(1);
    setselectCompany("all");

    setSelectColor("all");
    setselectfiltercolor("all");
    setselectPricefilter(330000);
  }

  useEffect(() => {
    featuredProducts();
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="px-4">
      {showLoder && (
        <div className="absolute w-full h-full backdrop-blur-lg   flex justify-center items-center z-10 left-0 top-0">
          <GridLoader color="#36d7b7" />
        </div>
      )}

      <section className="flex flex-col md:flex-row ">
        <section className=" hidden md:inline-block md:sticky md:w-[200px] md:h-full md:left-0 md:top-5  mt-5  ">
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
                    allFilters(e.target.value, "", "");
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
                    allFilters(e.target.value, "", "");
                  }}
                  className={`${selectCatogory == 2 ? "border-b" : ""}`}
                  value="Chairs"
                >
                  Chairs
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(3);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "", "");
                  }}
                  className={`${selectCatogory == 3 ? "border-b" : ""}`}
                  value="Beds"
                >
                  Beds
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(4);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "", "");
                  }}
                  className={`${selectCatogory == 4 ? "border-b" : ""}`}
                  value="Tables"
                >
                  Tables
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(5);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "", "");
                  }}
                  className={`${selectCatogory == 5 ? "border-b" : ""}`}
                  value="Sofas"
                >
                  Sofas
                </button>
                <button
                  onClick={(e) => {
                    setSelectCatogory(6);

                    setselectcat(e.target.value);
                    allFilters(e.target.value, "", "");
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
                    allFilters(e.target.value, "", "");
                  }}
                  className={`${selectCatogory == 7 ? "border-b" : ""}`}
                  value="Kids"
                >
                  Kids
                </button>
              </div>
            </div>

            <div className="mt-2 mb-4 ">
              <p className="font-bold mb-2">Company</p>
              <select
                onChange={(e) => {
                  setselectCompany(e.target.value);
                  allFilters("", e.target.value, "");
                }}
                className="w-[50%] border"
                value={selectCompany}
              >
                <option value="all">All</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Homestead">Homestead</option>
                <option value="Comfora">Comfora</option>
              </select>
            </div>

            <div className="mt-2 mb-4 ">
              <p className="font-bold">Colors</p>
              <div className="flex gap-2 justify-start items-center">
                <button
                  className={` ${selectColor == "all" ? "border-b" : ""}`}
                  value="all"
                  onClick={(e) => {
                    setSelectColor("all");
                    setselectfiltercolor(e.target.value);
                    allFilters("", "", e.target.value);
                  }}
                >
                  {" "}
                  All
                </button>
                {colorsArray.map((m, i) => (
                  <button
                    key={m}
                    onClick={(e) => {
                      setSelectColor(i);
                      setselectfiltercolor(e.target.value);
                      allFilters("", "", e.target.value);
                    }}
                    value={m}
                    className={`border-2  rounded-full w-6 h-6  
                  ${selectColor == i ? "border-black" : ""}`}
                    style={{ backgroundColor: m }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mt-2 mb-4 ">
              <p className="font-bold mb-2">Price</p>
              <p>
                <FaRupeeSign className="inline-block" /> {selectPricefilter}
              </p>
              <input
                className="w-[80%] cursor-pointer"
                type="range"
                min="1"
                max="330000"
                onChange={(e) => {
                  setselectPricefilter(e.target.value);
                  // console.log(selectPricefilter);
                  allFilters("", "", "", e.target.value);
                }}
                value={selectPricefilter}
              />
            </div>

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

        <section className="md:hidden flex justify-center items-center">
          <button
            onClick={() => setshowMobilefilter(true)}
            className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
          >
            Filters
          </button>

          {showMobilefilter && (
            <div className="absolute w-full py-5 top-16 left-0 animate__animated animate__fadeInLeft flex flex-col items-center z-10 bg-gray-50">
              <button
                onClick={() => setshowMobilefilter(false)}
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Close
              </button>

              <div className="flex flex-col px-2 mt-4">
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
                        allFilters(e.target.value, "", "");
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
                        allFilters(e.target.value, "", "");
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
                        allFilters(e.target.value, "", "");
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
                        allFilters(e.target.value, "", "");
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
                        allFilters(e.target.value, "", "");
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
                        allFilters(e.target.value, "", "");
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
                        allFilters(e.target.value, "", "");
                      }}
                      className={`${selectCatogory == 7 ? "border-b" : ""}`}
                      value="kids"
                    >
                      Kids
                    </button>
                  </div>
                </div>

                <div className="mt-2 mb-4 ">
                  <p className="font-bold mb-2">Company</p>
                  <select
                    onChange={(e) => {
                      setselectCompany(e.target.value);
                      allFilters("", e.target.value, "");
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

                <div className="mt-2 mb-4 ">
                  <p className="font-bold">Colors</p>
                  <div className="flex gap-2 justify-start items-center">
                    <button
                      className={` ${selectColor == "all" ? "border-b" : ""}`}
                      value="all"
                      onClick={() => {
                        setSelectColor("all");
                        setselectfiltercolor(e.target.value);
                        allFilters("", "", e.target.value);
                      }}
                    >
                      {" "}
                      All
                    </button>
                    {colorsArray.map((m, i) => (
                      <button
                        key={m}
                        onClick={(e) => {
                          setSelectColor(i);
                          setselectfiltercolor(e.target.value);
                          allFilters("", "", e.target.value);
                        }}
                        value={m}
                        className={`border-2  rounded-full w-6 h-6  
                  ${selectColor == i ? "border-black" : ""}`}
                        style={{ backgroundColor: m }}
                      ></button>
                    ))}
                  </div>
                </div>

                <div className="mt-2 mb-4 ">
                  <p className="font-bold mb-2">Price</p>
                  <p>
                    <FaRupeeSign className="inline-block" /> {selectPricefilter}
                  </p>
                  <input
                    className="w-[80%] cursor-pointer"
                    type="range"
                    min="1"
                    max="330000"
                    onChange={(e) => {
                      setselectPricefilter(e.target.value);
                      // console.log(selectPricefilter);
                      allFilters("", "", "", e.target.value);
                    }}
                    value={selectPricefilter}
                  />
                </div>

                <div>
                  <button
                    onClick={clearFilters}
                    className="text-white bg-red-500 p-2 rounded-md"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="w-[100%]">
          <section className=" flex flex-col md:flex-row justify-center items-center py-4  px-8 border-b mb-2  gap-2 md:gap-8">
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
          {/* {showDetails && allProducts.length > 0 && (
            <section className="grid text-red-500 grid-cols-1 px-8 gap-4">
              {allProducts.map((m, i) => (
                <DetailCard key={i} productDetails={m} />
              ))}
            </section>
          )} */}
          {allProducts.length <= 0 && <p>No product Found</p>}
        </div>
      </section>
    </main>
  );
}

export default Product;
