import React from "react";
import Image from "next/image";
const partners = [
  {
    image: "/partners/mercury.png",
    alt: "mercury",
  },
  {
    image: "/partners/payooner.png",
    alt: "payoneer",
  },
  {
    image: "/partners/wise.png",
    alt: "wise",
  },
  {
    image: "/partners/stripe.png",
    alt: "stripe",
  },
  {
    image: "/partners/zyla.png",
    alt: "zyla",
  },
  {
    image: "/partners/tello.png",
    alt: "tello",
  },
  {
    image: "/partners/aws.png",
    alt: "aws",
  },
  {
      image: "/partners/googlecloud.png",
    alt: "google-cloud",
  },
  {
    image: "/partners/shopyfy.png",
    alt: "shopify",
  },
  {
    image: "/partners/etsy.png",
    alt: "etsy",
  },
  {
    image: "/partners/helium.png",
    alt: "hellum",
  },
  {
    image: "/partners/smartscout.png",
    alt: "smart-scout",
  },
  {
    image: "/partners/zendesk.png",
    alt: "zendesk",
  },
  {
    image: "/partners/virallaunch.png",
    alt: "viral-launch",
  },
  {
    image: "/partners/openphone.png",
    alt: "open-phone",
  },
  {
    image: "/partners/next.png",
    alt: "next",
  },
  {
    image: "/partners/tiktok.png",
    alt: "tiktok",
  },
  {
    image: "/partners/fiverr.png",
    alt: "fiver",
  },
  {
    image: "/partners/dropshippng.png",
    alt: "dropshipping",
  },
  {
    image: "/partners/godaddy.png",
    alt: "godaddy",
  },
  {
    image: "/partners/notion.png",
    alt: "notion",
  },
];

function TrustedPartners() {
  return (
    <div className="container">
      <div className="text-center my-24">
        <h2 className="text-5xl font-semibold text-express-header">
          Exclusive Benefits From Our <br /> Trusted Partners
        </h2>
        <p className="text-express-blue text-3xl mt-12 capitalize">
          When you start your U.S. company with Express LLC,
          <br /> you also unlock special perks and discounts from <br /> leading
          platforms.
        </p>
        <div className="flex justify-center items-center ">
          <button className="text-express-blue text-xl font-bold border-[4px] rounded-[15px] w-[600px] h-[90px] cursor-pointer hover:bg-express-blue hover:text-white transition-all duration-300 mt-12 ">
            Get Started Today and Unlock These Perks
          </button>
        </div>
         {/* Partner Grid Container */}
         <div className="mt-16">
          <div className="grid grid-cols-7 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={partner.alt}
                className="bg-[#E8E8E8] p-4 rounded-lg flex items-center justify-center h-[120px]"
              >
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={80}
                  height={48}
                  className="object-contain w-auto h-auto"
                  loading={index < 7 ? "eager" : "lazy"}
                  quality={65}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedPartners;
