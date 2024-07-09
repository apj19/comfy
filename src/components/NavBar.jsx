import React, { useState } from "react";

import { FaShoppingCart, FaXbox } from "react-icons/fa";
import "animate.css";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { FaXbox } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { UserLoggedOut } from "../features/loginSlice";

function NavBar() {
  const cartproductList = useSelector((state) => state.cart.cartitemsList);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const isloggedIn = useSelector((state) => state.login.islogin);
  const dispatch = useDispatch();

  return (
    <nav className="flex px-8 py-2  justify-between items-center text-[1.2rem]">
      <div>
        <Link to="/">
          <p className="text-[1.5rem] tracking-wider  font-['Hachi_Maru_Pop']">
            Comfy
          </p>
        </Link>
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
        <Link to="/cart">
          <button>
            <FaShoppingCart className="text-[1.5rem]" />{" "}
          </button>
        </Link>
        <div className="absolute  left-4 bottom-2  rounded-full bg-my-color w-7 h-7 text-white flex justify-center items-center">
          <p>{cartproductList.length}</p>
        </div>
        {!isloggedIn && (
          <Link to="/signin">
            <button>Login</button>
          </Link>
        )}

        {isloggedIn && (
          <button onClick={() => dispatch(UserLoggedOut())}>Logout</button>
        )}
      </div>
      {!showMobileNav && (
        <button onClick={() => setShowMobileNav(true)} className="md:hidden">
          <FaBars />
        </button>
      )}

      {showMobileNav && (
        <div
          onClick={() => setShowMobileNav(false)}
          className="fixed z-10 w-full h-[100vh]  top-0 py-12 left-0 animate__animated animate__fadeInLeft  flex flex-col justify-start items-center 
           bg-gray-50"
        >
          <div className="flex justify-end w-full px-10">
            <button onClick={() => setShowMobileNav(false)}>
              <FaXbox />
            </button>
          </div>
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
            <Link to="/cart">
              <button>
                <FaShoppingCart className="text-[1.5rem]" />{" "}
              </button>
            </Link>
            <div className="absolute  left-4 bottom-2  rounded-full bg-my-color w-7 h-7 text-white flex justify-center items-center">
              <p>{cartproductList.length}</p>
            </div>
            {!isloggedIn && (
              <Link to="/signin">
                <button>Login</button>
              </Link>
            )}

            {isloggedIn && (
              <button onClick={() => dispatch(UserLoggedOut())}>Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
