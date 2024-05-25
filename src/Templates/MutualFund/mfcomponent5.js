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
    question: "What is a Mutual Fund & How Does it work?",
    answer: "Mutual funds is a trust that pools investors' money. Investors are allotted units of the funds as per their share of investment in the pool of assets. This money is then invested across various types of mutual funds like equity, debt, and other securities by the fund manager appointed by the asset management company.",
  },
  {
    question: "How to choose a good mutual fund investment?",
    answer: "There is no straight answer to this question. Different funds have different risk-return profiles. You need to choose a fund based on your risk-taking capabilities and the time horizon you have in your mind for the investment. So, you need to find a balance between your risk tolerance and the risk of the fund you are planning to invest in. For example, if you are willing to take high risk but your investment horizon is less than 3 years, you shouldn't invest fully in equity funds.",
  },
  {
    question: "How are mutual funds withdrawals taxed?",
    answer: "On withdrawal, if your redemption value is higher than the purchase price of a mutual fund, the same will be classified as capital gains. The gains from both equity (above a threshold limit) and debt funds are taxable. The gains are classified as short-term capital gains (STCG) or long-term capital gains, depending on the holding period.",
  },
  {
    question: "How can I invest in mutual funds on ET Money?",
    answer: "You can use Etmoney website or download ET Money mobile app to start investing in mutual funds on ET Money",
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

const MFFaqSection = () => {
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

export default MFFaqSection;
