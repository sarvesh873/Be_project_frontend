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
    question: "What is a Fixed Deposit & How Does it work?",
    answer: "A fixed deposit (FD) is a financial instrument offered by banks and financial institutions that allows individuals to deposit funds for a fixed period at a predetermined interest rate.",
  },
  {
    question: "How to choose a good Fixed Deposit investment?",
    answer: "Choosing a good fixed deposit (FD) investment involves considering several factors to ensure that it aligns with your financial goals and offers the best possible returns.",
  },
  {
    question: "How are Fixed Deposit withdrawals taxed?",
    answer: "The taxation of fixed deposit (FD) withdrawals varies depending on the tax laws and regulations in your country. In many jurisdictions, the interest earned on fixed deposits is subject to income tax.",
  },
  {
    question: "How can I invest in Fixed Deposit on Finvise?",
    answer: "Investing in fixed deposits through Finvise is a streamlined process accessible via the mobile app. After downloading the app and creating an account, completing the KYC process is typically required to comply with regulatory standards.",
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

const FDFaqSection = () => {
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

export default FDFaqSection;
