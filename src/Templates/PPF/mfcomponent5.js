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
    question: "What is a PPF & How Does it work?",
    answer: "The Public Provident Fund (PPF) is a long-term savings and investment scheme introduced by the Government of India to encourage individuals to save for their retirement and other long-term financial goals.",
  },
  {
    question: "How to choose a good PPF fund",
    answer: "Choosing a suitable Public Provident Fund (PPF) account entails considering factors such as the reputation of the provider, competitive interest rates, low fees, convenient accessibility, quality customer service, additional services offered, financial stability of the provider.",
  },
  {
    question: "How are PPF withdrawals taxed?",
    answer: "PPF withdrawals are tax-exempt under Indian tax laws. Both the principal amount and the interest earned on PPF are fully exempt from income tax.",
  },
  {
    question: "How can I invest in PPF on Finvise?",
    answer: "Finvise primarily provides financial advisory services rather than directly offering investment products like Public Provident Fund (PPF) accounts.",
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

const PPFFaqSection = () => {
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

export default PPFFaqSection;
