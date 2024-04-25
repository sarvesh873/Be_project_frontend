import React from "react";

// Shared TailwindCSS class strings
const containerClasses =
  "flex justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900";
const boxClasses =
  "bg-white dark:bg-zinc-800 p-6 max-w-6xl w-full  h-auto md:h-full";
const headerClasses =
  "text-2xl font-semibold mb-6 text-zinc-800 dark:text-white";
const summaryClasses =
  "flex justify-between items-center p-4 cursor-pointer bg-zinc-50 dark:bg-zinc-700 rounded-lg";
const questionClasses =
  "text-lg font-semibold text-zinc-800 dark:text-zinc-200";
const answerClasses = "px-4 pb-4 text-zinc-600 dark:text-zinc-400";

const faqs = [
  {
    question: "What is a NPS & How Does it work?",
    answer: "National Pension System provides a structured and regulated framework for building retirement savings and ensuring financial security in retirement for Indian citizens. It offers flexibility, tax benefits, and investment options tailored to the needs of subscribers, making it an attractive retirement planning tool.",
  },
  {
    question: "How to choose a good NPS scheme?",
    answer: "You can choose a good National Pension System scheme that aligns with your retirement objectives, risk tolerance, and investment preferences. Regularly review your NPS investment portfolio and adjust your strategy as needed to ensure it remains aligned with your evolving needs and objectives over time.",
  },
  {
    question: "How are NPS withdrawals taxed?",
    answer: "The tax treatment of National Pension System (NPS) withdrawals depends on various factors such as the type of withdrawal, the annuity option chosen, and the prevailing tax laws.",
  },
  {
    question: "How can I invest in NPS on Finvise?",
    answer: "It's essential to review the terms and conditions of the NPS scheme, understand the associated fees and charges, and consult with a financial advisor if needed before making investment decisions.",
  },
];

const FaqItem = ({ question, answer }) => (
  <details className="group">
    <summary className={summaryClasses}>
      <h3 className={questionClasses}>{question}</h3>
      <span className="text-green-500 group-open:hidden">+</span>
      <span className="text-green-500 hidden group-open:inline">−</span>
    </summary>
    <p className={answerClasses}>{answer}</p>
  </details>
);

const NPSFaqSection = () => {
  return (
    <div className="px-10">
      <div className={containerClasses}>
        <div className={boxClasses}>
          <h2 className={headerClasses}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPSFaqSection;
