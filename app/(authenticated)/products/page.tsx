"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { MultiViewIcon, SingleViewIcon } from "@/assets/icons";
import { MultiProductCard } from "@/conponents/card/MultiProductCard";
import { SingleProductCard } from "@/conponents/card/SingleProductCard";
import CartComponent from "@/conponents/cart/cart-component";
import Pagination from "@/conponents/pagination";
import SearchForm from "@/conponents/Search";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState("multi");
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from API or use session storage if available
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Check if products are already stored in session storage
        const storedProducts = sessionStorage.getItem("products");
        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
          console.log("Products loaded from session storage");
        } else {
          // Fetch products from API if not in session storage
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
          sessionStorage.setItem("products", JSON.stringify(response.data));
          console.log(
            "Products fetched from API and stored in session storage"
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="rounded-lg bg-white shadow-md overflow-hidden"
              >
                {viewMode === "single" ? (
                  <SingleProductCard
                    key={product.id}
                    name={product.title}
                    price={product.price}
                    image={product.image}
                  />
                ) : (
                  <MultiProductCard
                    key={product.id}
                    name={product.title}
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
