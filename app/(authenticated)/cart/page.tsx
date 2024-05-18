"use client";

import React, { useState } from "react";
import CartList from "@/conponents/cart/cart-list";
import { CartItem as CartItemType } from "@/models/global-types";
import CartComponent from "@/conponents/cart/cart-component";

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

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>(initialItems);

  const handleRemoveItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen pt-[80px] px-12">
      <CartComponent/>
    </main>
  );
};

export default CartPage;
