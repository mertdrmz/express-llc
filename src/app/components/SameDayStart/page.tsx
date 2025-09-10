import React from "react";
import Image from "next/image";

function SameDayStart() {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="text-5xl font-medium text-express-write my-24">
          Start Your U.S. Company <br />
          <span className="text-express-write capitalize font-bold">on the Same Day</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 items-center gap-12">
        <div className="relative h-[600px]">
          <Image
            src="/business-people-blue-background-1.png"
            alt="Statue of Liberty"
            width={600}
            height={600}
            quality={80}
            className="object-contain rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px]"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-3xl font-medium text-express-blue mt-8 capitalize">
            Fast. Trusted. All-in-One. Save Time & Save Money Join 1,000+
            entrepreneurs who already trust ExpressLLC as their one-stop partner
            for formation, banking, compliance, and taxes.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-12 sm:flex-row gap-4 justify-center">
            <button className="cta-button bg-white border-2 border-[#29388E] text-[#29388E] hover:bg-[#29388E] hover:text-white transition-colors duration-300">
              <span className="cta-button-text">Start My Company Now</span>
            </button>
            <button className="cta-button bg-[#FF1520] text-white hover:bg-red-700 transition-colors duration-300">
              <span className="cta-button-text">Transfer My Company</span>
            </button>
          </div>
    </div>
  );
}

export default SameDayStart;
