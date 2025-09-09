import React from "react";

const howItWorksSteps = [
  {
    id: 1,
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hand cursor */}
        <path d="M25 45L15 35L25 25L35 35L25 45Z" fill="#FF1520" />
        <path
          d="M25 45L15 35L25 25L35 35L25 45Z"
          stroke="#FF1520"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Pointer finger */}
        <path d="M30 40L35 35L40 40L35 45L30 40Z" fill="#FF1520" />
        {/* Checkbox */}
        <rect x="35" y="10" width="15" height="15" rx="3" fill="#FF1520" />
        <path
          d="M38 17L40 19L46 13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Small red squares with dots */}
        <rect x="5" y="35" width="8" height="8" rx="2" fill="#FF1520" />
        <circle cx="9" cy="39" r="2" fill="white" />
        <rect x="45" y="5" width="8" height="8" rx="2" fill="#FF1520" />
        <circle cx="49" cy="9" r="2" fill="white" />
      </svg>
    ),
    title: "Choose Your Service",
    description:
      "Select The Package Or Service You Need And Provide Your Company Details.",
    additionalInfo:
      "LLC Formation, EIN/ITIN Application, Or Transfer Your Existing Company To Us.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Document body with folded corner */}
        <path
          d="M10 10C10 8.89543 10.8954 8 12 8H38L50 20V50C50 51.1046 49.1046 52 48 52H10C8.89543 52 8 51.1046 8 50V12C8 10.8954 8.89543 10 10 10Z"
          fill="#FF1520"
        />
        <path d="M38 8V20H50L38 8Z" fill="white" /> {/* Folded corner */}
        {/* Lines of text */}
        <rect x="18" y="28" width="24" height="4" rx="1" fill="white" />
        <rect x="18" y="36" width="18" height="4" rx="1" fill="white" />
        <rect x="18" y="44" width="20" height="4" rx="1" fill="white" />
      </svg>
    ),
    title: "We Handle The Paperwork",
    description:
      "Our Team Files Everything With The State And IRS The Same Day Often Within The Same Hour.",
    additionalInfo:
      "Includes Registered Agent Setup, Address Assignment, And Compliance Documents.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main building body */}
        <rect x="15" y="20" width="30" height="30" rx="4" fill="#FF1520" />
        {/* Roof - flat top with slight peak */}
        <path d="M15 20H45L30 10L15 20Z" fill="#FF1520" />
        {/* Entrance */}
        <rect x="25" y="40" width="10" height="10" rx="2" fill="white" />
        {/* Windows grid */}
        <rect x="19" y="24" width="6" height="6" rx="1" fill="white" />
        <rect x="35" y="24" width="6" height="6" rx="1" fill="white" />
        <rect x="19" y="32" width="6" height="6" rx="1" fill="white" />
        <rect x="35" y="32" width="6" height="6" rx="1" fill="white" />
      </svg>
    ),
    title: "Get Your Company Ready To Operate",
    description:
      "Receive Your Approved Company Documents, EIN And Access To Your Personalized Client Portal...",
    additionalInfo:
      "From There, Manage Annual Reports, Tax Filings, Invoices, And More — All Online.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#FF1520] mb-8">
          HOW IT WORKS?
        </h2>
        <div className="w-24 h-1 bg-[#FF1520] mx-auto mb-12"></div>{" "}
        {/* Red underline */}
        <div className="relative flex flex-col items-center">
          {howItWorksSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center w-full max-w-3xl my-6 z-10"
            >
              {/* Numbered Circle */}
              {/* Numbered Circle */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#29388E] text-white font-bold text-xl flex items-center justify-center">
                  {step.id}
                </div>

                {/* Vertical red line - circle'ın tam altında ve ortada */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-[#FF1520]"></div>
                )}
              </div>

              {/* Step Content Box */}
              <div className="flex-grow bg-white border border-[#29388E] rounded-xl p-6 ml-4 shadow-md">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#29388E] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-base text-[#29388E]">
                      {step.description}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#FF1520] mt-2">
                  {step.additionalInfo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
