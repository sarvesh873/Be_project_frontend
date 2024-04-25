import React from "react";

const PPFInfo = () => {
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
              What is Public Provident Fund?
            </h2>
            <p className={textZinc}>
            Public Provident Fund (PPF) offers a combination of tax benefits, attractive interest rates, safety, flexibility, and accessibility, making it an ideal investment option for long-term wealth creation and financial planning.
            The Public Provident Fund (PPF) offers several advantages that make it a popular choice for long-term savings and investment.
            </p>
            <p className={`${textZinc} mb-2}`}>
              To learn more about them, read our detailed guide on{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                What is Public Provident Fund.
              </a>
            </p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default PPFInfo;
