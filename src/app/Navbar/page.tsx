"use client";
import React from "react";
import Image from "next/image";
import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const pathname = usePathname();


  return (
    <div className="container pt-10">
      <div className="flex justify-between items-center ">
        <Image src={"/logo.svg"} alt="logo" width={230} height={70} className="navbar-logo"/>
        <div className="flex items-center gap-4">
          <button className="search-button">
            <svg
              width="20"
              height="20"
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

          <button className="text-xl font-medium text-express-write">SIGN IN</button>

          <button className="text-xl font-medium text-[#D9D9D9] bg-express-write  border-express-write rounded-[3px] px-4 py-2 tracking-[2px]">
            START MY BUSINESS
          </button>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex items-center justify-between mt-5 text-express-write border-t-4 border-gray-300 pb-4 py-2">
          <Link className={`nav-menu-item flex-1 ${pathname === "/" ? "active" : ""}`} href="/">
            HOME
          </Link>
          <Link className={`nav-menu-item flex-1 ${pathname === "/prices" ? "active" : ""}`} href="/prices">
            PRICES
          </Link>
          <Link className={`nav-menu-item flex-1 ${pathname === "/our-services" ? "active" : ""}`} href="/our-services">
            OUR SERVICES
          </Link>
          <Link className={`nav-menu-item flex-1 ${pathname === "/about-us" ? "active" : ""}`} href="/about-us">
            ABOUT US
          </Link>
          <Link className={`nav-menu-item flex-1 ${pathname === "/contact-us" ? "active" : ""}`} href="/contact-us">
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
