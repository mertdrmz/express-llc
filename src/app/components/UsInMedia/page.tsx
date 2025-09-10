import React from "react";
import Image from "next/image";
const media = [
  {
    image: "/us-in-media/Forbes.png",
    alt: "Forbes",
  },
  {
    image: "/us-in-media/Fortune.png",
    alt: "Fortune",
  },
  {
    image: "/us-in-media/FOX.png",
    alt: "FOX",
  },
  {
    image: "/us-in-media/yahoo.png",
    alt: "yahoo",
  },
  {
    image: "/us-in-media/business-insider.png",
    alt: "business-insider",
  },
];

function UsInMedia() {
  return (
    <div className="container">
      <div className="text-center my-20">
        <h2 className="text-5xl font-semibold text-express-header">
          Featured In Leading Media Outlets
        </h2>
        <p className="text-express-blue capitalize text-3xl mt-12 font-medium">
          ExpressLLC has been highlighted by trusted business and <br /> financial
          publications worldwide.
        </p>
        <div className="mt-32 flex flex-col items-center gap-8">
            <div className="flex justify-center items-center gap-16">
                {media.slice(0, 3).map((item) => (
                    <div key={item.alt} className="p-6 flex items-center justify-center">
                        <Image src={item.image} alt={item.alt} width={350} height={100} quality={90} className="object-contain" />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-40">
                {media.slice(3, 5).map((item) => (
                    <div key={item.alt}>
                        <Image src={item.image} alt={item.alt} width={350} height={100} quality={90} className="object-contain" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default UsInMedia;
