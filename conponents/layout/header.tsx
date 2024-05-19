"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashIcon, LogoSite } from "@/assets/icons";

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");
   // Get the active link from local storage on component mount
   useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  // Update local storage whenever activeLink changes
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);
  const router = useRouter();

  const handleLinkClick = (
    link: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setActiveLink(link);
    router.push(link);
  };

  return (
    <nav className="bg-slate-900 fixed w-full z-20">
      <div className="flex items-center justify-between px-12">
        <LogoSite />
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="/products"
                className={"block p-2 text-white relative"}
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
                className={`block py-2 px-3 text-white relative`}
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
            className="m-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-4 py-2 text-center"
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
