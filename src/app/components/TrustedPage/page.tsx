import React from "react";
import Image from "next/image";
const trustedPeople = [
  {
    image: "/omarA.png",
    name: "Omar A.",
    country: "UAE",
    comment:
      "“Express LLC formed my Wyoming LLC within the same hour. I couldn’t believe how fast and professional the process was.”",
    flag: "/uae.png",
  },
  {
    image: "/maria.png",
    name: "Maria G.",
    country: "Spain",
    comment:
      "“I moved my company from another provider to ExpressLLC. They saved me money on annual reports and the client portal makes everything so simple.”",
    flag: "/spain.png",
  },
  {
    image: "/kenji.png",
    name: "Kenji T.",
    country: "Japan",
    comment:
      "“The team guided me through EIN and tax filing without any stress. Truly an all-in-one service. Highly recommended.”",
    flag: "/japan.png",
  },
  {
    image: "/ali.png",
    name: "Ali K.",
    country: "Turkey",
    comment:
      "“I opened my U.S. company to sell on Amazon. Express LLC handled everything: LLC, EIN, bank account, even my first tax return. Perfect service.”",
    flag: "/turkey.png",
  },
];

function TrustedPage() {
  return (
    <div className="container mt-10">
      <div className="text-center my-24">
        <h2 className="text-5xl font-medium text-express-header">
          Trusted by Entrepreneurs Worldwide
        </h2>
        <p className="text-express-blue text-3xl mt-12 capitalize">
          Thousands of founders from over 100+ countries <br /> have already chosen
          Express LLC to launch and <br /> manage their U.S. businesses. Here’s what
          they say:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-24">
        {trustedPeople.map((person, index) => (
          <div
            key={index}
            className="bg-[#e91c24] text-white p-8 rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] relative h-[290px] w-[300px] flex flex-col"
          >
            {/* Sol üst tırnak işareti */}
            <div className="absolute top-[135px] left-[1px]">
              <svg
                width="121"
                height="96"
                viewBox="0 0 121 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.9411 0.668699L33.4611 67.8687L27.3011 42.6687C35.3278 42.6687 41.8611 45.002 46.9011 49.6687C51.9411 54.3354 54.4611 60.7754 54.4611 68.9887C54.4611 77.0154 51.8478 83.5487 46.6211 88.5887C41.5811 93.442 35.2345 95.8687 27.5811 95.8687C19.7411 95.8687 13.2078 93.442 7.98112 88.5887C2.94112 83.5487 0.421124 77.0154 0.421124 68.9887C0.421124 66.562 0.60779 64.2287 0.981124 61.9887C1.35446 59.562 2.10112 56.762 3.22112 53.5887C4.34112 50.4154 5.92779 46.2154 7.98112 40.9887L24.2211 0.668699H51.9411ZM118.021 0.668699L99.5411 67.8687L93.3811 42.6687C101.408 42.6687 107.941 45.002 112.981 49.6687C118.021 54.3354 120.541 60.7754 120.541 68.9887C120.541 77.0154 117.928 83.5487 112.701 88.5887C107.661 93.442 101.314 95.8687 93.6611 95.8687C85.8211 95.8687 79.2878 93.442 74.0611 88.5887C69.0211 83.5487 66.5011 77.0154 66.5011 68.9887C66.5011 66.562 66.6878 64.2287 67.0611 61.9887C67.4345 59.562 68.1811 56.762 69.3011 53.5887C70.4211 50.4154 72.0078 46.2154 74.0611 40.9887L90.3011 0.668699H118.021Z"
                  fill="white"
                  fillOpacity="0.2"
                />
              </svg>
            </div>

            {/* Sağ alt tırnak işareti */}
            <div className="absolute right-1 bottom-1 text-[40px]">
              <svg
                width="121"
                height="97"
                viewBox="0 0 121 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3334 96.0955L21.8134 28.8955L27.9734 54.3755C19.9467 54.3755 13.3201 52.0422 8.0934 47.3755C3.0534 42.5222 0.533398 35.9888 0.533398 27.7755C0.533398 19.7488 3.14673 13.3088 8.3734 8.45549C13.6001 3.41549 20.0401 0.895491 27.6934 0.895491C35.5334 0.895491 41.9734 3.41549 47.0134 8.45549C52.0534 13.3088 54.5734 19.7488 54.5734 27.7755C54.5734 30.2022 54.3867 32.6288 54.0134 35.0555C53.8267 37.2955 53.1734 40.0022 52.0534 43.1755C51.1201 46.3488 49.5334 50.5488 47.2934 55.7755L31.0534 96.0955H3.3334ZM69.4134 96.0955L87.8934 28.8955L94.0534 54.3755C86.0267 54.3755 79.4001 52.0422 74.1734 47.3755C69.1334 42.5222 66.6134 35.9888 66.6134 27.7755C66.6134 19.7488 69.2267 13.3088 74.4534 8.45549C79.6801 3.41549 86.1201 0.895491 93.7734 0.895491C101.613 0.895491 108.053 3.41549 113.093 8.45549C118.133 13.3088 120.653 19.7488 120.653 27.7755C120.653 30.2022 120.467 32.6288 120.093 35.0555C119.907 37.2955 119.253 40.0022 118.133 43.1755C117.2 46.3488 115.613 50.5488 113.373 55.7755L97.1334 96.0955H69.4134Z"
                  fill="white"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
            {/* Üst kısım: Resim, İsim ve Ülke yan yana */}
            <div className="flex items-start gap-4">
              {" "}
              {/* gap-4 ile elementler arası boşluk */}
              {/* Profil resmi - Sabit boyut */}
              <div className="w-[100px] h-[100px] flex-shrink-0">
                {" "}
                {/* Sabit genişlik ve yükseklik */}
                <Image
                  width={100}
                  height={100}
                  src={person.image}
                  alt={person.name}
                  className="rounded-[40px] w-full h-full object-cover"
                />
              </div>
              {/* İsim ve Ülke - Sabit yükseklik */}
              <div className="h-[100px] flex flex-col justify-center">
                {" "}
                {/* Dikey ortalama */}
                <h3 className="text-2xl font-bold leading-tight">
                  {person.name}
                </h3>
                <p className="text-lg text-white/80">{person.country}</p>
              </div>
              {/* Bayrak - Sabit pozisyon */}
              <div className="absolute -top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  width={68}
                  height={70}
                  src={person.flag}
                  alt="Country Flag"
                />
              </div>
            </div>

            {/* Yorum - Sabit margin-top */}
            <p className="mt-4 text-sm leading-6">{person.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustedPage;
