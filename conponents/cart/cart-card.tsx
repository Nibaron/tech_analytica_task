import React from "react";
import { CartItem as CartItemType } from "@/models/global-types";
import Image from "next/image";
import img from "@/assets/images/1002.png";
import { FiveStarIcon, TrashIcon } from "@/assets/icons";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
}

const CartCard: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between mb-4 bg-gray-200 shadow-md rounded-lg">
      <div className="flex items-center w-48 h-48 overflow-auto rounded-lg mr-4">
        <Image
          src={img}
          alt={item.name}
          width={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="p-4">
          <h2 className="text-lg font-medium mb-2">{`Wireless Bluetooth Headset Single Ear`}</h2>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <FiveStarIcon />
          </div>
          <p className="text-base text-gray-500 mb-2">(121 reviews)</p>
          <p className="text-lg font-semibold text-red-500 mr-2">${item.price}</p>
        </div>
      </div>
      <button className="cursor-pointer" onClick={() => onRemove(item.id)}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default CartCard;
