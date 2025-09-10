import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-express-blue text-white mt-32">
      <div className="container mx-auto px-6 pt-16 pb-16">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Side */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/logo.svg"
              alt="Express LLC"
              width={200}
              height={60}
              className="mb-6"
            />
            <p className="text-base leading-relaxed opacity-90 max-w-[600px]">
              Launching A Company In USA Is Now Very Easy, Fast And Affordable. Click The Button Below Right
              Now And Start Your Company. Take Action With Us Without Wasting More Time And Money. Get
              Your Company Ready With All The Features You Need In 1 Week. We&apos;ll Take Care Of Everything
              Necessary For You, You Focus On Your Business.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/4">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/about-us" 
                className="text-lg font-medium hover:opacity-80 transition-opacity"
              >
                ABOUT US
              </Link>
              <Link 
                href="/news" 
                className="text-lg font-medium hover:opacity-80 transition-opacity"
              >
                NEWS
              </Link>
              <Link 
                href="/prices" 
                className="text-lg font-medium hover:opacity-80 transition-opacity"
              >
                PRICES
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-medium hover:opacity-80 transition-opacity"
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-express-footer-bottom">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link 
              href="/terms" 
              className="text-sm hover:opacity-80 transition-opacity"
            >
              Terms And Conditions
            </Link>
            <Link 
              href="/cookie-policy" 
              className="text-sm hover:opacity-80 transition-opacity"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-4 md:mt-0">
            Copyright 2025 EXPRESS LLC -EIN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;