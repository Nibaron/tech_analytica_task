import React, { useEffect, useState } from "react";
import CartCard from "./cart-card";
import { CartItem as CartItemType } from "@/models/global-types";
import { getCartItems, setCartItems } from "@/utils/helpers/common-helpers";

const CartList: React.FC = () => {
  const [items, setItems] = useState<CartItemType[]>([]);
  const [total, setTotal] = useState(0);

  const fetchCartItems = () => {
    const fetchedItems = getCartItems();
    setItems(fetchedItems);
    const newTotal = fetchedItems.reduce(
      (acc: number, item: any) => acc + item.price,
      0
    );
    setTotal(newTotal);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Update state when local storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      fetchCartItems();
    };

    window.addEventListener("cartItemsUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("cartItemsUpdated", handleStorageChange);
    };
  }, []);

  const handleRemoveItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setCartItems(updatedItems);
    const newTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <CartCard key={item.id} item={item} onRemove={handleRemoveItem} />
      ))}
      <div className="text-xl font-bold mt-4 text-center">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartList;
