'use client';

import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { DashIcon } from "@/assets/icons";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string >("/products");

  const handleLinkClick = (link: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveLink(link);
  };

  return (
    <nav className="bg-slate-900 fixed w-full z-20 top-0 start-0 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-[12px]">
        <Image src={logo} alt="Logo" width={150} />
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/products"
                className={`block py-2 px-3 text-white relative ${
                  activeLink === "/products" ? "font-bold" : ""
                }`}
                aria-current="page"
                onClick={(e) => handleLinkClick("/products", e)}
              >
                PRODUCTS
                {activeLink === "/products" && <DashIcon />}
              </a>
            </li>
            <li>
              <a
                href="/cart"
                className={`block py-2 px-3 text-white relative ${
                  activeLink === "/cart" ? "font-bold" : ""
                }`}
                aria-current="page"
                onClick={(e) => handleLinkClick("/cart", e)}
              >
                CART
                {activeLink === "/cart" && <DashIcon />}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LOGIN
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center m-4 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
