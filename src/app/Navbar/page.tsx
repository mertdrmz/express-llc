import React from "react";
import Image from "next/image";
import "./navbar.css";
import Link from "next/link";



const Navbar = () => {
  return (
    <div className="container pt-10">
      <div className="flex justify-between items-center ">
        <Image src={"/logo.svg"} alt="logo" width={318} height={85} className="navbar-logo"/>
        <div className="flex items-center gap-4">
          <button className="search-button">
            <svg
              width="28"
              height="26"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11" stroke="#29388E" strokeWidth="2" />
              <path
                d="M20.6549 20.2443L31 29"
                stroke="#29388E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="sign-in-button text-express-write">SIGN IN</button>

          <button className=" start-my-business-button ">
            START MY BUSINESS
          </button>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex items-center justify-between mt-7 text-express-write border-t-4 border-gray-300 pb-4 py-2">
          <Link className="nav-menu-item flex-1" href="/">
            HOME
          </Link>
          <Link className="nav-menu-item flex-1" href="/prices">
            PRICES
          </Link>
          <Link className="nav-menu-item flex-1" href="/our-services">
            OUR SERVICES
          </Link>
          <Link className="nav-menu-item flex-1" href="/about-us">
            ABOUT US
          </Link>
          <Link className="nav-menu-item flex-1" href="/contact-us">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
