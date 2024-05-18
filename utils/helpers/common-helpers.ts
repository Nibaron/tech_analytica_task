import { CartItem as CartItemType } from "@/models/global-types";

const CART_ITEMS_KEY = "cartItems";

export const setCartItems = (items: CartItemType[]) => {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cartItemsUpdated"));
};

export const getCartItems = (): CartItemType[] => {
  const storedCart = localStorage.getItem(CART_ITEMS_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
};