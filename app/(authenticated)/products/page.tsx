import { MultiViewIcon, SingleViewIcon } from "@/assets/icons";
import { MultiProductCard } from "@/conponents/card/MultiProductCard";
import Pagination from "@/conponents/pagination";
import React from "react";

const productsPage = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "@/assets/images/1001.png",
      description: "High-quality Bluetooth wireless headphones from Sony.",
    },
    {
      id: 2,
      name: "boAt Rockerz 450 wireless charging",
      price: 49,
      image: "/assets/images/1002.png",
      description: "Affordable and stylish Bluetooth headphones from boAt.",
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: "/assets/images/1003.png",
      description: "Premium noise-canceling headphones from JBL.",
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: "/assets/images/1004.png",
      description: "Reliable wired headphones from Logitech.",
    },
    {
      id: 5,
      name: "APPLE Max Bluetooth Headset",
      price: 199,
      image: "/assets/images/1005.png",
      description:
        "Apple's high-end Bluetooth headset with active noise cancellation.",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "/assets/images/1006.png",
      description: "Budget-friendly wired headphones from Zebronics.",
    },
  ];
  return (
    <main className="min-h-screen pt-[80px] px-12">
      <div className="flex flex-row h-[90px]">
        <div className="basis-3/5">
          <div className="flex justify-between">
            <div className="text-[30px]">Our All Products</div>
            <div className="flex items-center justify-center space-x-4">
              <div className="group">
                <a href="#">
                  <MultiViewIcon />
                </a>
              </div>
              <div className="group">
                <a href="#">
                  <SingleViewIcon />
                </a>
              </div>
            </div>
          </div>

          <form className="max-w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search An Item"
                required
              />
            </div>
          </form>
          <section className="container mx-auto px-4 py-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {" "}
            {/* Added container, grid, and gap classes */}
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-lg bg-white shadow-md overflow-hidden"
              >
                {" "}
                {/* Added classNames */}
                <MultiProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </section>
          <Pagination/>
        </div>
      </div>
    </main>
  );
};

export default productsPage;
