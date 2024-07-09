import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removefromCart,
  incrementProductQuantity,
} from "../features/cartSlice";
import { FaRupeeSign } from "react-icons/fa";

function Cart() {
  const cartproductList = useSelector((state) => state.cart.cartitemsList);
  const dispatch = useDispatch();

  function totalValue() {
    let value = 0;
    cartproductList.forEach((e) => {
      let temp = e.pquantity * e.price;
      value += temp;
    });

    return value;
  }

  // console.log(cartproductList);

  return (
    <div className=" ">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-black  sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="lg:col-span-8 bg-white dark:bg-slate-100 text-black"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="divide-y   border-t border-b ">
              {cartproductList.map((product) => (
                <div key={product.id} className="px-4">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imgsrc}
                        alt={product.name}
                        className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <p className="font-medium text-lg ">
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
                            <p className="text-[1.2rem]  font-medium  ">
                              <FaRupeeSign className="inline-block" />
                              {new Intl.NumberFormat("en-IN", {
                                maximumSignificantDigits: 3,
                              }).format(product.price)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <div className="flex mb-2">
                    <div className="flex min-w-24 ">
                      <button
                        onClick={() =>
                          dispatch(
                            incrementProductQuantity({
                              id: product.id,
                              pquantity: -1,
                            })
                          )
                        }
                        disabled={product.pquantity == 1}
                        type="button"
                        className="h-7 w-7 rounded-full border border-[#e0e0e0]"
                      >
                        -
                      </button>
                      <p className="h-7 w-9 text-center mx-1 text-[1.3rem]">
                        {product.pquantity}
                      </p>

                      <button
                        disabled={product.pquantity == product.stock}
                        onClick={() =>
                          dispatch(
                            incrementProductQuantity({
                              id: product.id,
                              pquantity: 1,
                            })
                          )
                        }
                        type="button"
                        className="h-7 w-7 rounded-full border border-[#e0e0e0] flex justify-center items-center"
                      >
                        +
                      </button>
                    </div>

                    <div className="ml-4 flex flex-1 sm:ml-6 dark:text-white">
                      <button
                        onClick={() => dispatch(removefromCart(product.id))}
                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          {cartproductList.length > 0 && (
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-md bg-white dark:bg-slate-600 lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 dark:text-gray-200"
              >
                Price Details
              </h2>

              <div>
                <dl className=" space-y-1  px-6 py-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-800 dark:text-gray-200">
                      Price ({cartproductList.length} item)
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                      }).format(totalValue())}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm text-gray-800 dark:text-gray-200">
                      <span>Discount</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                      - ----
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm text-gray-800 dark:text-gray-200">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium text-green-700 dark:text-green-400">
                      Free
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-4 border-y border-dashed ">
                    <dt className="text-base font-medium text-gray-900 dark:text-white">
                      Total Amount
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {new Intl.NumberFormat("en-IN", {
                        maximumSignificantDigits: 3,
                      }).format(totalValue())}
                    </dd>
                  </div>
                </dl>
                {/* <div className="px-6 pb-4 font-medium text-green-700 dark:text-green-400">
                You will save ₹ 3,431 on this order
              </div> */}
              </div>
            </section>
          )}
        </form>
      </div>

      <div className="flex justify-center space-x-4 pb-8">
        <Link to="/product">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </button>
        </Link>
        <Link to="/checkout">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
