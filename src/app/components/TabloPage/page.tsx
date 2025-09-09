import React from "react";
import "./table.css";
import Image from "next/image";
function TablePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="table-title">ExpressLLC vs. Other Providers</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-6xl">
          <Image
            src="/table.png"
            alt="ExpressLLC vs Other Providers Comparison Table"
            width={1707}
            height={501}
            className="w-full h-auto mt-12"
            priority
            quality={100}
            unoptimized={false}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="table-button">
          Get Started with Express LLC Today
        </button>
      </div>
    </div>
  );
}

export default TablePage;
