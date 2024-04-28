import React from "react";

const SSYInfo = () => {
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
              What is SSY?
            </h2>
            <p className={textZinc}>
            "Sukanya Samriddhi Yojana (SSY)" is a government-backed savings scheme launched by the Government of India as part of the "Beti Bachao, Beti Padhao" campaign. It aims to encourage parents to save for the education and marriage expenses of their girl child.Under the Sukanya Samriddhi Yojana, parents or legal guardians can open an account in the name of their girl child who is below the age of 10 years.
            </p>
            <p className={`${textZinc} mb-2}`}>
              To learn more about them, read our detailed guide on{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                What is Sukanya Samriddhi Yojana.
              </a>
            </p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default SSYInfo;
