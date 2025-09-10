import React from "react";
import "./whyCooseUs.css";
import ThunderSvg, {
  DollarSvg,
  PaperSVG,
  WorldSVG,
  DealSVG,
} from "./whyChooseUsSVG";

const whyChooseUsFeatures = [
  {
    icon: <ThunderSvg />,
    title: "Same-Day (Even Same-Hour) Filing",
    description: "Your Company Formed And Approved Faster Than Anyone Else.",
  },
  {
    icon: <DollarSvg />,
    title: "Transparent & Affordable Pricing",
    description:
      "No hidden fees. Annual reports filed at cost only state fees, no extra service charges.",
  },
  {
    icon: <PaperSVG />,
    title: "All-in-One Compliance & Tax Support",
    description:
      "From EIN/ITIN to annual tax returns and amendments, everything managed in one place.",
  },
  {
    icon: <WorldSVG />,
    title: "Exclusive Client Portal",
    description:
      "Track filings, pay invoices, receive reminders, and manage documents all online 24/7.",
  },
  {
    icon: <DealSVG />,
    title: "Proven Trust, Referral-Driven Growth",
    description:
      "Over 1,000 satisfied clients worldwide built entirely on referrals, not ads.",
  },
];

function whyChooseUs() {
  return (
    <div className="container text-center py-32">
      <div>
        <h2 className="why-choose-us-title">WHY CHOOSE US?</h2>
        <div className="w-56 h-1 bg-[#FF1520] mx-auto mt-12 mb-12"></div>{" "}
        <p className="why-choose-us-description">
          More Than Just Company Formation Your Long-Term U.S. Business Partner.
          Thousands of entrepreneurs worldwide trust ExpressLLC for their U.S.
          business needs.
        </p>
        <h3 className="why-choose-us-subtitle mt-12">Here’s why:</h3>
      </div>
      <div className="mt-12">
        <div className="flex flex-col items-center gap-8">
          {whyChooseUsFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="svg-container">{feature.icon}</div>
              <div className="flex items-center justify-center gap-2 why-choose-us-svg-title-1">
                <span className="w-[12px] h-[12px] mr-8 bg-[#FF1520] rounded-full"></span>
                <h4 className="why-choose-us-h4">{feature.title}</h4>
              </div>
              <p className="why-choose-us-svg-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="why-choose-us-button mt-20">See Our Packages</button>
      </div>
    </div>
  );
}

export default whyChooseUs;
