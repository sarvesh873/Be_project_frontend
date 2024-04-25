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
    question: "What is a Sukanya Samriddhi Yojana & How Does it work?",
    answer: "Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme introduced by the Government of India as part of its initiative to promote the welfare of the girl child. ",
  },
  {
    question: "How to learn more about SSY?",
    answer: "Explore official government websites such as the Ministry of Finance or the Reserve Bank of India (RBI), which provide comprehensive guides, FAQs, and official documents related to the scheme.",
  },
  {
    question: "How are SSY withdrawals taxed?",
    answer: "Withdrawals from Sukanya Samriddhi Yojana (SSY) accounts are not subject to taxation. The scheme offers tax benefits at all stages, including contributions, accumulation, and withdrawals.",
  },
  {
    question: "Is there any official website for the same?",
    answer: "Yes there is a proper official website for the proper maintainance and keeping records of the SSY scheme",
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

const SSYFaqSection = () => {
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

export default SSYFaqSection;
