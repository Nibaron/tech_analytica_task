import React from "react";
import { SearchIcon } from "@/assets/icons"; // Assuming SearchIcon is imported

const SearchForm: React.FC = () => {
  return (
    <form className="max-w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="p-1 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon/>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full font-normal leading-[20.2px] text-gray-900 bg-gray-50 border ps-10 text-sm border-gray-300 rounded-lg "
                placeholder="      Search An Item"
                required
              />
            </div>
          </form>
  );
};

export default SearchForm;
