import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {AiOutlineUser} from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const [scroll, setScroll] = useState(true);

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const [burger, setBurger] = useState(true);

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className=" ">
      <div
        className={`${scroll ? " bg-[#E7F6ED]" : "shadow bg-white/60"} 
        ${burger ? " " : " !bg-blue-400"} 
        z-50 w-full h-[80px] items-center flex fixed top-0 left-0 myGlass`}
      >
        <div className={` container px-[13rem] mx-auto `}>
          <div className=" flex justify-between items-center ">
            <div>
              <span className=" text-[25px] font-[500]">Hously</span>
            </div>
            <div className=" hidden md:flex gap-5">
              <Link>
                <h3>Home</h3>
              </Link>
              <h3>Buy</h3>
              <h3>Sell</h3>
              <h3>Pages</h3>
              <h3>About us</h3>
              <h3>Contact</h3>
            </div>
            <div className=" hidden md:flex gap-1">
              <button className=" bg-green-500 text-white px-2 py-2  rounded-full">
                <AiOutlineUser size={"1.5rem"} />
              </button>
              <button className=" px-4 py-1 rounded-full bg-green-500 text-white">
                Sign up
              </button>
            </div>

            <div onClick={() => setBurger(!burger)} className=" md:hidden">
              burger
            </div>
          </div>
        </div>
      </div>
      {/* inthere */}
      {/* for mobile */}
      <div
        className={` transition-all  duration-300  ease-in-out transform ${
          burger
            ? " fixed top-[-100vh] translate-y-[-100%]  left-0 h-[100%] w-[100%] "
            : " fixed !translate-y-0  left-0 h-screen w-[100%]"
        } bg-blue-400 z-50`}
      >
        <ul className=" flex flex-col justify-center items-center w-full h-full">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
