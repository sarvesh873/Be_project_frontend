import React from "react";

const TIInfo = () => {
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
              What are Term Insurance?
            </h2>
            <p className={textZinc}>
              Term insurance is a type of life insurance policy that provides coverage for a specific period, known as the "term." Unlike permanent life insurance policies such as whole life or universal life, which provide coverage for the insured's entire life, term insurance offers coverage for a predetermined period, typically ranging from 5 to 30 years. If the insured individual dies during the term of the policy, the designated beneficiaries receive a death benefit payout from the insurance company
            </p>
            <p className={`${textZinc} mb-2}`}>
              To learn more about them, read our detailed guide on{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                What is Term Insurance.
              </a>
            </p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default TIInfo;
