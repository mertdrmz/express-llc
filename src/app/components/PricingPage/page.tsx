import React from "react";
import "./pricing.css";

const packages = [
  {
    title: "DIY Freedom",
    titleDescription: "(Self-File Option)",
    priceBox: "$99 +",
    description:
      "For founders on a tight budget who want to handle most steps themselves.",
    descriptionList: [
      "LLC Filing (all 50 states)",
      "Registered Agent (1st year included)",
      "Digital Company Documents",
      "EIN Application (Optional +$50)",
      "No suite address (RA address only)",
    ],
    buttonText: "File My Company",
  },
  {
    title: "Launch Package",
    titleDescription: "(Incorporate Starter)",
    priceBox: "$239 +",
    description: "The fastest way to establish your U.S. company.",
    descriptionList: [
      "LLC Formation (same-day filing)",
      "EIN Application included",
      "Registered Agent (1st year included)",
      "Operating Agreement",
      "Digital Company Documents",
    ],
    buttonText: "Start My Company",
  },
  {
    title: "Build Package",
    titleDescription: "(Build Package)",
    priceBox: "$499 +",
    description:
      "For entrepreneurs who want a professional setup with long-term growth support.",
    descriptionList: [
      "Everything in Launch",
      "U.S. Business Address (Suite + Mail Forwarding)",
      "Banking Setup (Mercury / Wise)",
      "Compliance Reminders",
      "Full Client Portal Access",
    ],
    buttonText: "Get Started Today",
  },

  {
    title: "Thrive Package",
    titleDescription: "(Enterprise Solution)",
    priceBox: "$999 +",
    description:
      "For founders on a tight budget who want to handle most steps themselves.",
    descriptionList: [
      "Everything in Build",
      "ITIN Application (1 Individual) Annual Report Filing",
      "(state fee only, no service fee)",
      "First-Year Federal Tax Return (Form 5472 + Form 1040NR)",
      "Priority Support",
    ],
    buttonText: "Launch My Business",
  },
];
const PricingPage = () => {
  return (
    <div className="container min-h-screen flex flex-col items-center justify-center py-20">
      <div className="flex items-center justify-center">
        <h2 className="pricing-page-title">Pricing Packages</h2>
      </div>
      <div className="flex flex-row items-stretch gap-4 max-w-full mt-20 justify-center">
        {packages.map((packages) => (
          <div
            className="pricing-cards flex flex-col items-center justify-center p-4 text-center"
            key={packages.title}
          >
            <h3 className="pricing-title">{packages.title}</h3>
            <p className="pricing-title-description">{packages.titleDescription}</p>
            <p className="pricing-price">{packages.priceBox}<span className="pricing-price-state-fee">State Fee</span></p>
            <p className="pricing-description">{packages.description}</p>
            <ul className="pricing-description-list">
              {packages.descriptionList.map((item) => (
                <li key={item} className="text-sm">• {item}</li>
              ))}
            </ul>
            <button className="pricing-button">
              {packages.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
