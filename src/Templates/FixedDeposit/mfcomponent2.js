import React from "react";

const FDInfo = () => {
  // Shared Tailwind CSS class strings
  const textZinc = "text-zinc-600 dark:text-zinc-300 mb-4";
  const containerStyles =
    "container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between";

  return (
    <div className="px-10">
      <body className="bg-white dark:bg-zinc-900 transition-colors duration-500">
        <div className={containerStyles}>
          <div className="mb-8 md:mb-0 md:w-1/2 flex flex-col space-y-4">
            <img
              src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/mf-tree.svg"
              alt="Investment Illustration"
              className="max-w-full h-auto rounded-lg shadow-lg"
              crossOrigin="anonymous"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">
              What are Fixed Deposit?
            </h2>
            <p className={textZinc}>
            Fixed deposits (FDs) are financial instruments offered by banks and financial institutions that allow individuals to deposit funds for a fixed period at a predetermined interest rate. In essence, when you invest in a fixed deposit, you're lending money to the bank or financial institution for a specified duration, during which you earn interest on the deposited amount. Fixed deposits are considered one of the safest investment options as they offer guaranteed returns and are typically backed by the credibility and stability of the issuing institution.
            </p>
            <p className={`${textZinc} mb-2}`}>
              To learn more about them, read our detailed guide on{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                What are Fixed Deposit.
              </a>
            </p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default FDInfo;
