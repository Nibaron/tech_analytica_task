export const setCartItems = (items:any) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    window.dispatchEvent(new Event("cartItemsUpdated"));
  };
  
  export const getCartItems = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  };