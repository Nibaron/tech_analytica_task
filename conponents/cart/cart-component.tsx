"use client";

import React, { useState } from "react";
import CartList from "@/conponents/cart/cart-list";
import { CartItem as CartItemType } from "@/models/global-types";

const initialItems: CartItemType[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headset Single Ear",
    price: 8.5,
    quantity: 1,
    image: "/path-to-image.jpg",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headset Single Ear",
    price: 8.5,
    quantity: 1,
    image: "/path-to-image.jpg",
  },
];

const CartComponent: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>(initialItems);

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="p-1 border rounded">
        <div className="font-inter text-[12px] font-bold leading-[20px] tracking-[2px] text-center text-white mb-4 bg-black rounded px-4 py-2">
          Selected Products
        </div>

        <CartList items={items} onRemove={handleRemoveItem} />
        <div className="mt-4">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms">
            I have read and agree to the{" "}
            <span className="underline">terms and conditions</span>,{" "}
            <span className="underline">refund policy</span> &{" "}
            <span className="underline">privacy policy</span>
          </label>
          <br />
          <div className="flex justify-center">
            <button className="font-inter text-[12px] font-bold leading-[20px] tracking-[2px] text-left bg-black text-white px-4 py-2 rounded ml-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
