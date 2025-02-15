import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartItems = ({ cartItemList, removeFromCart }) => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cartItemList.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: 1,
      }),
      {}
    )
  );

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const totalPrice = cartItemList.reduce(
    (acc, item) => acc + item.price * quantities[item.id],
    0
  );

  const storePickup = 0;
  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + tax + storePickup;

  console.log(cartItemList);
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-200 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-orange-600 sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItemList.length > 0 ? (
                cartItemList.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-white md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img
                          onClick={() => navigate(`/product/${item.id}`)}
                          className="h-20 w-20"
                          src={item.image}
                          alt={item.title}
                        />
                      </a>

                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-orange-600 dark:bg-orange-700 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>

                          <input
                            type="text"
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-black focus:outline-none focus:ring-0 dark:text-black"
                            value={quantities[item.id]}
                            readOnly
                          />

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-orange-600 dark:bg-orange-700 dark:hover:bg-orange-600 dark:focus:ring-orange-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-gray-700">
                            ${item.price * quantities[item.id]}
                          </p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a
                          onClick={() => navigate(`/product/${item.id}`)}
                          href="#"
                          className="text-base font-medium text-gray-900 hover:underline dark:text-gray-600"
                        >
                          {item.title}
                        </a>

                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <svg
                              className="me-1.5 h-5 w-5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="2"
                                d="M6 18 17.94 6M18 18 6.06 6"
                              />
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h2>No items in the cart.</h2>
                </div>
              )}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-white sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-orange-500">
                Order summary
              </p> 

              <div className="mt-4 space-y-4">
                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-600">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-600">
                    ${totalPrice.toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-600">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium text-gray-600">
                    ${storePickup}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between">
                  <dt className="text-base font-normal text-gray-600">
                    Tax (10%)
                  </dt>
                  <dd className="text-base font-medium text-gray-600">
                    ${tax.toFixed(2)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between border-t border-gray-200 pt-2">
                  <dt className="font-bold text-gray-600">Total</dt>
                  <dd className="font-bold text-gray-600">
                    ${finalTotal.toFixed(2)}
                  </dd>
                </dl>
              </div>

              <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-md hover:bg-orange-900">
                Proceed to Checkout
              </button>

              <div class="flex items-center justify-center gap-2">
                <span class="mt-4 text-sm font-normal text-gray-600 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-white sm:p-6">
              <form class="space-y-4">
                <div>
                  <label
                    for="voucher"
                    class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-700"
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-white dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-black dark:bg-orange-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
