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
    question: "What is a Gold Investment & How Does it work?",
    answer: "Gold investment involves acquiring gold as a means of safeguarding wealth, diversifying investment portfolios, or capitalizing on the price fluctuations of gold. Investors can opt for various methods to invest in gold, each with its own advantages and considerations. ",
  },
  {
    question: "How to choose a good Gold investment?",
    answer: "Choosing a good gold investment requires careful consideration of several factors to ensure it meets your financial objectives and risk tolerance. Start by understanding your investment goals, whether it's capital preservation, portfolio diversification, or speculative trading.",
  },
  {
    question: "How are Gold withdrawals taxed?",
    answer: "The taxation of gold withdrawals depends on factors such as the form of gold investment, holding period, and tax laws in your jurisdiction. For instance, selling physical gold, like gold bars or coins, may result in capital gains or losses subject to capital gains tax. ",
  },
  {
    question: "How can I invest in Gold investment in Finvise?",
    answer: "Investing in gold through Finvise typically involves selecting a suitable gold investment option available on the platform and initiating the investment process.",
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

const GoldFaqSection = () => {
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

export default GoldFaqSection;
