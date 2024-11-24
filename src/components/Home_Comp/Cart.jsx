import React from "react";
import { Link } from "react-router-dom";
const Cart = ({ heading, categories }) => {
  return (
    <div className="pt-6 text-black bg-white mt-10">
      <h1 className="text-3xl font-serif font-bold text-center mb-3">
        {heading}
      </h1>
      <ul
        className="flex items-center justify-center gap-3 text-[18px] 
      font-serif mb-[-12px]"
      >
        {categories.map((category, index) => (
          <Link key={index}>{category}</Link>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
