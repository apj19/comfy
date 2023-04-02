import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";

function Checkout() {
  const cartproductList = useSelector((state) => state.cart.cartitemsList);

  function totalValue() {
    let value = 0;
    cartproductList.forEach((e) => {
      let temp = e.pquantity * e.price;
      value += temp;
    });

    return value;
  }

  return (
    <section className="min-h-[80vh]">
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 dark:bg-slate-200 py-12 md:py-24">
          <div className="px-6">
            <p className="text-2xl font-medium flex tracking-tight text-gray-900">
              <FaRupeeSign />{" "}
              <span>
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(totalValue())}
              </span>
            </p>
            <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
          </div>
          {cartproductList.map((product) => (
            <div key={product.id} className="px-4">
              <li className="flex py-6 sm:py-6 ">
                <div className="flex-shrink-0">
                  <img
                    src={product.imgsrc.url}
                    alt={product.name}
                    className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <p className="font-medium text-lg text-gray-700 dark:text-white">
                            {product.name}
                          </p>
                        </h3>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p
                          className={`border-2  rounded-full w-6 h-6`}
                          style={{ backgroundColor: product.pcolor }}
                        ></p>
                      </div>
                      <div className="mt-1 flex items-end">
                        <p className="text-[1rem]  font-medium text-gray-500 ">
                          Quantity : {product.pquantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-400 py-12 md:py-24">
          <div className="">
            <div className="flex text-[2rem] justify-center items-center w-full h-full">
              <h2>Thanks for shopping with Us</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
