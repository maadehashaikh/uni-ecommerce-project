import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className=" w-full flex items-center justify-between bg-white text-black text-center py-3
    "
    >
      <h2 className="logo text-center ml-10 text-lg font-serif font-semibold">
        Haseen's Offical
      </h2>
      <nav>
        <ul className="flex items-center justify-center gap-4 text-[18px] font-sans">
          <Link to={"/"}>Home</Link>
          <Link to={"/newArrival"}>New Arrival</Link>
          <Link to={"/bestSelling"}>Best Selling</Link>
          <Link to={"/sale"}>Sale</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
      </nav>
      <div className="mr-8 flex items-center gap-3 text-sm text-center">
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-regular fa-user"></i>
        <span className="text-base">
          <Link to={"/signIn"}>Sign In</Link> / {""}
          <Link to={"/register"}>Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
