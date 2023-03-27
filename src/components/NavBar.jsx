import React, { useState } from "react";

import { FaShoppingCart, FaXbox } from "react-icons/fa";
import "animate.css";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaXbox } from "react-icons/fa";

function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="flex px-8 py-2  justify-between items-center text-[1.2rem]">
      <div>
        <p className="text-[1.5rem] tracking-wider  font-['Hachi_Maru_Pop']">
          Comfy
        </p>
      </div>

      <div className="hidden md:block">
        <ul className="flex  justify-between items-center gap-8">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/product">
            <li>Product</li>
          </Link>
        </ul>
      </div>

      <div className="relative hidden   md:flex justify-center items-center gap-8">
        <button>
          <FaShoppingCart className="text-[1.5rem]" />{" "}
        </button>
        <div className="absolute  left-4 bottom-2  rounded-full bg-my-color w-7 h-7 text-white flex justify-center items-center">
          <p>0</p>
        </div>
        <button>Login</button>
      </div>
      {!showMobileNav && (
        <button onClick={() => setShowMobileNav(true)} className="md:hidden">
          <FaBars />
        </button>
      )}

      {showMobileNav && (
        <button onClick={() => setShowMobileNav(false)}>
          <FaXbox />
        </button>
      )}

      {showMobileNav && (
        <div className="absolute w-full h-full top-20 left-0 animate__animated animate__fadeInLeft flex flex-col items-center">
          <ul className="flex flex-col justify-between items-center gap-8 mb-8">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
          </ul>
          <div className="relative w-[100px] flex justify-center items-center gap-8">
            <button>
              <FaShoppingCart className="text-[1.5rem]" />{" "}
            </button>
            <div className="absolute  left-4 bottom-2  rounded-full bg-my-color w-7 h-7 text-white flex justify-center items-center">
              <p>0</p>
            </div>
            <button>Login</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;