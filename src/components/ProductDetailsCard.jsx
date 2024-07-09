import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { single_product_url } from "../utilities/EndPoints";
import { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { GridLoader } from "react-spinners";
import { AddtoCart } from "../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";

function ProductDetailsCard() {
  const { productid } = useParams();
  const [showLoder, setShowLoader] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectColor, setSelectColor] = useState(0);
  const fivestarts = [
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStar />,
  ];

  const [productdetails, setproductdetail] = useState({
    id: "",
    name: "",
    images: "",
    colors: [],
    description: "",
    price: 0,
  });
  const [color, setcolor] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchProductDetails() {
    setShowLoader(true);
    let productData;
    try {
      productData = await axios.get(`${single_product_url}${productid}`);
      const Details = productData.data.data;
      // console.log(Details);

      const modifiedDetails = {
        id: Details.id,
        name: Details.attributes.title,
        images: Details.attributes.image,
        colors: [...Details.attributes.colors],
        description: Details.attributes.description,
        price: Details.attributes.price,
      };
      setproductdetail(modifiedDetails);
    } catch (error) {
      navigate("/notfound");
    }

    setShowLoader(false);
  }

  function handleAddtoCart() {
    let selectedcolor;
    if (color == "") {
      selectedcolor = productdetails.colors[0];
    } else {
      selectedcolor = color;
    }

    dispatch(
      AddtoCart({
        id: productdetails.id,
        name: productdetails.name,
        price: productdetails.price,
        imgsrc: productdetails.images,
        color: "dd",
        pquantity: quantity,
        pcolor: selectedcolor,
        stock: 0,
      })
    );
    navigate("/cart");
  }
  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section>
      {showLoder && (
        <div className="absolute w-full h-full backdrop-blur-lg   flex justify-center items-center z-10 left-0 top-0">
          {/* <ClockLoader color="#ff0500" /> */}
          <GridLoader color="#36d7b7" />
        </div>
      )}
      <div className=" mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-2">
            <div className=" mt-4">
              <img
                alt="Tee"
                src={imageUrl || productdetails.images}
                className="h-[300px] w-full rounded-xl md:h-[500px]  "
              />
            </div>

            {/* <div className="mt-2 flex gap-2 justify-center items-center">
              {productdetails.images.map((m, i) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={() => setImageUrl(m.url)}
                >
                  <img
                    alt="Tee"
                    src={m.url}
                    className="h-16 w-18  rounded-md "
                  />
                </div>
              ))}
            </div> */}
          </div>

          <div className="lg:sticky lg:top-0 lg:col-span-2">
            <div className="space-y-4 lg:pt-8">
              <div>
                <h1 className="text-2xl font-bold lg:text-3xl">
                  {productdetails.name}
                </h1>

                <div className="flex justify-start gap-2 items-center">
                  <div className="flex gap-1 my-2">
                    {fivestarts.map((s, i) => (
                      <div
                        key={i}
                        className={`${
                          i < Math.ceil(productdetails.stars) - 1
                            ? "text-[#ffb900]"
                            : "text-gray-200"
                        }`}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  ({productdetails.reviews} customer reviews)
                </div>

                <p>{productdetails.description}</p>
              </div>

              <div>
                <p className="text-xl font-bold">
                  <FaRupeeSign className="inline-block" />
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(productdetails.price)}
                </p>
              </div>
              {/* <div className="border-b">
                <table className="border-spacing-4 border-separate">
                  <tbody>
                    <tr>
                      <th>Available</th>
                      <td>
                        {productdetails.stock > 0
                          ? "in stock : " + productdetails.stock
                          : "out of stock"}
                      </td>
                    </tr>
                    <tr>
                      <th>SKU</th>
                      <td>{productdetails.id}</td>
                    </tr>
                    <tr>
                      <th>Brand</th>
                      <td>{productdetails.company}</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}

              <div>
                <div>
                  <table className="border-spacing-4 border-separate">
                    <tbody>
                      <tr>
                        <th>Colors</th>
                        {productdetails.colors?.map((m, i) => (
                          <td key={i}>
                            <button
                              onClick={(e) => {
                                setSelectColor(i);
                                setcolor(m);
                                // setselectfiltercolor(e.target.value);
                                // allFilters("", "", e.target.value);
                              }}
                              value={m}
                              className={`border-2  rounded-full w-6 h-6  
                  ${selectColor == i ? "border-black" : ""}`}
                              style={{ backgroundColor: m }}
                            ></button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex mb-2">
                  <div className="flex min-w-24 text-black">
                    <button
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity == 1}
                      type="button"
                      className="h-7 w-7 rounded-full border border-[#ddb7b7]"
                    >
                      -
                    </button>
                    <p className="h-7 w-9 text-center mx-1 text-[1.3rem]">
                      {quantity}
                    </p>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity == productdetails.stock}
                      type="button"
                      className="h-7 w-7 rounded-full border border-[#e0e0e0] flex justify-center items-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddtoCart}
                  className="w-full md:w-[200px] rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsCard;
