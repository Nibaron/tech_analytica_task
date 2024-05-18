import React from "react";
import img from "@/assets/images/1002.png";
import Image from "next/image";
import { FiveStarIcon } from "@/assets/icons";
import { getCartItems, setCartItems } from "@/utils/helpers/common-helpers";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const SingleProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
}) => {
  const handleAddToCart = () => {
    const item = { id, name, price, image };
    const currentCartItems = getCartItems();
    const updatedCartItems = [...currentCartItems, item];
    setCartItems(updatedCartItems);
  };
  return (
    <div className="flex items-end justify-between p-0 border rounded bg-gray-200">
      <div className="flex items-center ">
        <Image src={img} alt="" width={300} className="object-cover" />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium">{`${name}`}</h2>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <FiveStarIcon />
          </div>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            (121 reviews)
          </p>

          <p className="text-lg font-semibold text-red-600 dark:text-white">
            {`$ ${price}`}
          </p>
        </div>
      </div>
      <button
        className="rounded-lg bg-slate-900 mr-2 mb-6 px-5 py-2.5 text-center text-sm font-medium text-white"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};
