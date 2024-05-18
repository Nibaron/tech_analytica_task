import React from "react";
import { CartItem as CartItemType } from "@/models/global-types";
import Image from "next/image";
import img from "@/assets/images/1002.png";
import { FiveStarIcon, TrashIcon } from "@/assets/icons";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex flex-row items-center justify-between mb-4 bg-gray-200 shadow-md rounded-lg overflow-hidden h-64">
      {" "}
      {/* Main container */}
      <div className="w-48 h-48 rounded-lg overflow-hidden mr-4">
        {" "}
        {/* Image container */}
        <Image
          src={img}
          alt={item.name}
          width={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        {" "}
        {/* Content container */}
        <div className="p-4">
          {" "}
          {/* Product details */}
          <h2 className="text-lg font-medium mb-2">{item.name}</h2>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <FiveStarIcon /> {/* Rating icon */}
          </div>
          <p className="text-base text-gray-500 mb-2">
            {" "}
            {/* Reviews */}
            (121 reviews)
          </p>{" "}
          {/* Price and trash */}
          <p className="text-lg font-semibold text-red-500 mr-2">
            ${item.price}
          </p>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => onRemove(item.id)}>
        <TrashIcon /> {/* Trash icon */}
      </div>
    </div>
  );
};

export default CartItem;
