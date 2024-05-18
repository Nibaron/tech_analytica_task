"use client";

import React, { useState } from "react";
import CartList from "@/conponents/cart/cart-list";



const CartComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-1 border rounded">
        <div className="font-inter text-[12px] font-bold leading-[20px] tracking-[2px] text-center text-white mb-4 bg-slate-900 rounded px-4 py-2">
          Selected Products
        </div>

        <CartList/>
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
            <button className="font-inter text-[12px] font-bold leading-[20px] tracking-[2px] text-left bg-slate-900 text-white px-4 py-2 rounded ml-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
