import React from "react";
import { useNavigate } from "react-router-dom";

// Define constants for repeated class strings
const containerClasses = "container mx-auto px-4 py-12";
const flexCenterClasses = "flex items-center";
const textColorClasses = "text-zinc-600 dark:text-zinc-300";

// Main component
const HIComponent = () => {
  return (
    <div className="px-10">
      <div className="bg-white dark:bg-zinc-800 ">
        <div className={containerClasses}>
          <div className="flex flex-wrap -mx-4 items-center justify-between">
            <FeatureSection />
            <ImageSection />
          </div>
          <AdvantagesSection />
        </div>
      </div>
    </div>
  );
};

const allmfs = () => {
  window.location.href = "/all-mutual-funds";
};

// Feature section component
const FeatureSection = () => {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-4">
          Health Insurance
        </h2>
        <p className={`${textColorClasses} mb-6`}>
        Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured individual. It provides financial protection against unexpected medical costs arising from illness, injury, or other health-related issues.
        </p>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition ease-in duration-200"
          onClick={() => allmfs()}
        >
          Know about health insurance
        </button>
      </div>
    </>
  );
};

// Image section component
const ImageSection = () => {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <img
        className="rounded-lg shadow-xl"
        src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/mf-banner-mweb.webp"
        alt="Investment App Screenshot"
      />
    </div>
  );
};

// Advantages section component
const AdvantagesSection = () => {
  return (
    <div className="mt-12 bg-indigo-700 text-white py-4 px-6 rounded-lg flex flex-wrap items-center justify-between">
      <div
        className={`${flexCenterClasses} mb-4 lg:mb-0`}
        sx={{ alignItems: "center" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-40 py-4">
          {" "}
          {/* Grid container with 3 columns and gap between them */}
          <AdvantageItem
            title="Health insurance advantage"
            src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/zerocommission.svg"
          />
          <AdvantageItem
            title="Zero Charge"
            src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/zerocommission.svg"
          />
          <AdvantageItem
            title="Track your existing health report"
            src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/track.svg"
          />
          <AdvantageItem
            title="Detailed report card"
            src="https://img.smartspends.com/static/images/etmoneyweb/mfHome/detailed-report.svg"
          />
        </div>
      </div>
    </div>
  );
};

// Advantage item component
const AdvantageItem = ({ title, src }) => {
  return (
    <div className={`${flexCenterClasses} mr-4`}>
      <img className="h-6 w-6 mr-2" src={src} alt={title} />
      {title}
    </div>
  );
};

export default HIComponent;
