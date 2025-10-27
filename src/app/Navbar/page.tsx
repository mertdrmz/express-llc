/* "use client";
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
        <Link href="/">
          <Image src={"/logo.svg"} alt="Express LLC Homepage" width={230} height={70} className="navbar-logo md:w-[230px]"/>
        </Link>
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

          <button className="text-xl font-medium text-[#D9D9D9] bg-express-write  border-express-write rounded-[3px] px-4 py-2 tracking-[2px] align-center justify-center">
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
 */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container pt-10">
      {/* Üst Kısım - Logo ve Butonlar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image 
            src={"/logo.svg"} 
            alt="Express LLC Homepage" 
            width={230} 
            height={70} 
            className="navbar-logo w-[180px] md:w-[230px]"
          />
        </Link>

        {/* Hamburger Menu Butonu - Mobile */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Desktop Butonları */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="search-button" aria-label="Search">
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

          <button className="text-xl font-medium text-express-write">
            SIGN IN
          </button>

          <button className="text-xl font-medium text-[#D9D9D9] bg-express-write border-express-write rounded-[3px] px-4 py-2 tracking-[2px] flex items-center justify-center">
            START MY BUSINESS
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col bg-white rounded-lg shadow-lg">
          {/* Mobil Arama ve Butonlar */}
          <div className="p-4 flex flex-col gap-4 border-b border-gray-200">
            <button className="w-full text-left flex items-center gap-2 text-express-blue">
              <svg width="20" height="20" viewBox="0 0 32 30" fill="none">
                <circle cx="12" cy="12" r="11" stroke="#29388E" strokeWidth="2" />
                <path d="M20.6549 20.2443L31 29" stroke="#29388E" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Search
            </button>
            <button className="w-full py-2 text-center text-express-write">
              SIGN IN
            </button>
            <button className="w-full py-2 text-center text-[#D9D9D9] bg-express-write rounded-[3px]">
              START MY BUSINESS
            </button>
          </div>

          {/* Mobil Navigasyon Linkleri */}
          <div className="p-4 flex flex-col gap-2">
            <Link className={`nav-menu-item py-2 ${pathname === "/" ? "active" : ""}`} href="/">
              HOME
            </Link>
            <Link className={`nav-menu-item py-2 ${pathname === "/prices" ? "active" : ""}`} href="/prices">
              PRICES
            </Link>
            <Link className={`nav-menu-item py-2 ${pathname === "/our-services" ? "active" : ""}`} href="/our-services">
              OUR SERVICES
            </Link>
            <Link className={`nav-menu-item py-2 ${pathname === "/about-us" ? "active" : ""}`} href="/about-us">
              ABOUT US
            </Link>
            <Link className={`nav-menu-item py-2 ${pathname === "/contact-us" ? "active" : ""}`} href="/contact-us">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigasyon */}
      <div className="hidden lg:block mb-5">
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