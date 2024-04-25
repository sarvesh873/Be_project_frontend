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
    question: "What is a Health Insurance & How Does it work?",
    answer: "Health insurance is a type of insurance coverage that provides financial protection against medical expenses incurred due to illness, injury, or other healthcare needs.",
  },
  {
    question: "How to choose a good Health Insurance?",
    answer: "Choosing a good health insurance plan requires careful consideration of various factors to ensure that it meets your healthcare needs, budget, and preferences.",
  },
  {
    question: "Is Health Insurance taxed?",
    answer: "Health insurance itself is not taxed; however, the tax treatment of health insurance premiums, benefits, and reimbursements can vary depending on the country's tax laws and regulations.",
  },
  {
    question: "How can I choose a proper Health Insurance?",
    answer: "You can choose a proper health insurance plan that provides comprehensive coverage, aligns with your budget, and offers peace of mind for your healthcare needs. It's essential to review plan details carefully, ask questions, and seek clarification on any aspects.",
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

const HIFaqSection = () => {
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

export default HIFaqSection;
