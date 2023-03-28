import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { single_product_url } from "../utilities/EndPoints";
import { useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

function ProductDetailsCard() {
  const { productid } = useParams();
  const [productdetails, setproductdetail] = useState({
    name: "",
    images: [
      {
        url: "",
      },
    ],
  });

  const [imageUrl, setImageUrl] = useState("");

  async function fetchProductDetails() {
    const productData = await axios.get(`${single_product_url}${productid}`);
    const Details = productData.data;
    setproductdetail(Details);
  }
  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-2">
            <div className="relative mt-4">
              <img
                alt="Tee"
                src={imageUrl || productdetails.images[0].url}
                className="h-[300px] w-full rounded-xl md:h-[500px]  "
              />
            </div>

            <div className="mt-2 flex gap-2 justify-center items-center">
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
            </div>
          </div>

          <div className="lg:sticky lg:top-0 lg:col-span-2">
            <form className="space-y-4 lg:pt-8">
              <div>
                <h1 className="text-2xl font-bold lg:text-3xl">
                  {productdetails.name}
                </h1>

                <div>reviews</div>

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
              <div className="border-b">
                <table className="border-spacing-4 border-separate">
                  <tr>
                    <th>Available</th>
                    <td>in stock</td>
                  </tr>
                  <tr>
                    <th>SKU</th>
                    <td>{productdetails.id}</td>
                  </tr>
                  <tr>
                    <th>Brand</th>
                    <td>{productdetails.company}</td>
                  </tr>
                </table>
              </div>
              <div>
                <table className="border-spacing-4 border-separate">
                  <tr>
                    <th>Colors</th>
                    {productdetails.colors?.map((m) => (
                      <td key={m}>
                        <FaCircle
                          className="text-[1.3rem]"
                          style={{ color: m }}
                        />
                      </td>
                    ))}
                  </tr>
                </table>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Add to cart
              </button>

              <button
                type="button"
                className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Notify when on sale
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsCard;

{
  /* <fieldset>
                <legend class="text-lg font-bold">Color</legend>

                <div class="mt-2 flex flex-wrap gap-1">
                  <label for="color_green" class="cursor-pointer">
                    <input
                      type="radio"
                      id="color_green"
                      name="color"
                      class="peer sr-only"
                      checked
                    />

                    <span class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                  </label>

                  <label for="color_blue" class="cursor-pointer">
                    <input
                      type="radio"
                      id="color_blue"
                      name="color"
                      class="peer sr-only"
                    />

                    <span class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                  </label>

                  <label for="color_pink" class="cursor-pointer">
                    <input
                      type="radio"
                      id="color_pink"
                      name="color"
                      class="peer sr-only"
                    />

                    <span class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                  </label>

                  <label for="color_red" class="cursor-pointer">
                    <input
                      type="radio"
                      id="color_red"
                      name="color"
                      class="peer sr-only"
                    />

                    <span class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                  </label>

                  <label for="color_indigo" class="cursor-pointer">
                    <input
                      type="radio"
                      id="color_indigo"
                      name="color"
                      class="peer sr-only"
                    />

                    <span class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend class="text-lg font-bold">Material</legend>

                <div class="mt-2 flex flex-wrap gap-1">
                  <label for="material_cotton" class="cursor-pointer">
                    <input
                      type="radio"
                      id="material_cotton"
                      name="material"
                      class="peer sr-only"
                      checked
                    />

                    <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Cotton
                    </span>
                  </label>

                  <label for="material_wool" class="cursor-pointer">
                    <input
                      type="radio"
                      id="material_wool"
                      name="material"
                      class="peer sr-only"
                      checked
                    />

                    <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                      Wool
                    </span>
                  </label>
                </div>
              </fieldset> */
}