import React from "react";
import Image from "next/image";
import { FiveStarIcon } from "@/assets/icons";
import img from "@/assets/images/1002.png";
import { getCartItems, setCartItems } from "@/utils/helpers/common-helpers";
interface ProductCardProps {
  key: number;
  name: string;
  price: number;
  image: string;
}

export const MultiProductCard: React.FC<ProductCardProps> = ({
  key,
  name,
  price,
  image,
}) => {
  const handleAddToCart = () => {
    const item = { key, name, price, image };
    const currentCartItems = getCartItems();
    const updatedCartItems = [...currentCartItems, item];
    setCartItems(updatedCartItems);
  };

  return (
    <div className="flex flex-col justify-center mt-11 rounded-lg bg-gray-200">
      <Image
        className="w-full object-cover object-center"
        src={img}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium">{name}</h2>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <FiveStarIcon />
        </div>
        <p className="mb-2 text-base text-gray-700">(121 reviews)</p>
        <div className="flex flex-wrap items-center justify-between">
          <p className="mr-2 text-lg font-semibold text-red-600">{`$ ${price}`}</p>
          <button
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
