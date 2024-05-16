import { MultiViewIcon, SingleViewIcon } from "@/assets/icons";
import React from "react";

// import { Container } from './styles';

const productsPage = () => {
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
        </div>
      </div>
    </main>
  );
};

export default productsPage;
