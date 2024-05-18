"use client";

import { MultiViewIcon, SingleViewIcon } from "@/assets/icons";
import { MultiProductCard } from "@/conponents/card/MultiProductCard";
import { SingleProductCard } from "@/conponents/card/SingleProductCard";
import CartComponent from "@/conponents/cart/cart-component";
import Pagination from "@/conponents/pagination";
import SearchForm from "@/conponents/Search";
import { useState } from "react";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("multi");

  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
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
      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-3/5 w-full mr-3">
          <div className="flex justify-between mb-[24px]">
            <span className="font-open-sans text-[32px] font-semibold leading-[21px] text-left">
              Our All Products
            </span>
            <div className="flex items-center justify-center space-x-4">
              <div className="group">
                <a href="#" onClick={() => setViewMode("multi")}>
                  <MultiViewIcon />
                </a>
              </div>
              <div className="group">
                <a href="#" onClick={() => setViewMode("single")}>
                  <SingleViewIcon />
                </a>
              </div>
            </div>
          </div>
          <SearchForm />

          <section
            className={`py-10 grid gap-4 ${
              viewMode === "single"
                ? "grid-cols-1"
                : "grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-lg bg-white shadow-md overflow-hidden"
              >
                {viewMode === "single" ? (
                  <SingleProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                ) : (
                  <MultiProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                )}
              </div>
            ))}
          </section>
          <Pagination />
        </div>
        <div className="hidden lg:block lg:basis-2/5 pt-[130px]">
          <section className="container mx-auto">
            <CartComponent />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;