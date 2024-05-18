// components/CartList.tsx
import React from "react";
import { CartItem as CartItemType } from "@/models/global-types";
import CartItem from "./cart-item";

interface CartListProps {
  items: CartItemType[];
  onRemove: (id: number) => void;
}

const CartList: React.FC<CartListProps> = ({ items, onRemove }) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
      <div className="text-xl font-bold mt-4 text-center">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartList;
