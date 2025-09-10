"use client";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question:
      "CAN I FORM A U.S. COMPANY IF I AM NOT A U.S. CITIZEN OR RESIDENT?",
    answer:
      "Yes, you can form a U.S. company regardless of your citizenship or residency status. Express LLC helps entrepreneurs worldwide establish their businesses in the United States.",
    isOpen: false,
  },
  {
    id: 2,
    question: "HOW FAST CAN MY COMPANY BE FORMED?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 3,
    question: "What is included in the state fee?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Do you provide an address in the U.S.?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Can you help me open a U.S. bank account?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 6,
    question: "Do you also prepare tax returns?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 7,
    question: "What happens after the first year?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 8,
    question: "Can I transfer my existing company to ExpressLLC?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 9,
    question: "What is the difference between an EIN and an ITIN?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
  {
    id: 10,
    question: "Why should I choose ExpressLLC over larger competitors?",
    answer:
      "Same-day filing in all 50 states. In some states (like Wyoming), your company can be approved within the same hour.",
    isOpen: false,
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="mb-4 w-full">
    <div
      onClick={onToggle}
      className={`w-full p-6 bg-[rgba(246,246,246,1)] border-1 border-[#29388E] rounded-lg flex items-center gap-6  transition-all duration-300 relative cursor-pointer justify-center ${
        isOpen ? "shadow-[-10px_15px_40px_2px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      {/* +/- işareti için container */}
      <div
        className={`w-[53px] h-[52px] flex items-center justify-center text-7xl  rounded-lg shrink-0
        ${isOpen ? "text-[#E91C24]" : "text-[#29388E]"}`}
      >
        {isOpen ? "-" : "+"}
      </div>

      {/* Soru ve cevap kısmı */}
      <div className="flex-1 text-left">
        <div className="text-xl font-semibold text-express-blue uppercase">
          {question}
        </div>

        {isOpen && (
          <div className="mt-4 text-lg text-express-blue">{answer}</div>
        )}
      </div>
    </div>
  </div>
);

function FAQ() {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (id: number) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq))
    );
  };

  return (
    <div className="container my-24">
      <h2 className="text-5xl font-medium text-express-header mb-12">
        FAQ&apos;s
      </h2>

      <div className="w-full">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={faq.isOpen}
            onToggle={() => toggleFAQ(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
