import React from "react";
import img from "@/assets/images/1002.png";
import Image from "next/image";
import { FiveStarIcon } from "@/assets/icons";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export const MultiProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
}) => {
  return (
    <div className="flex flex-col justify-center mt-11 rounded-lg bg-gray-200">
      <Image
        className="w-full object-cover object-center"
        src={img}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium">{`${name}`}</h2>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <FiveStarIcon />
        </div>
        <p className="mb-2 text-base text-gray-700">(121 reviews)</p>
        <div className="flex flex-wrap items-center justify-between">
          {" "}
          {/* Added flex-wrap for sm */}
          <p className="mr-2 text-lg font-semibold text-red-600">{`$ ${price}`}</p>
          <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
