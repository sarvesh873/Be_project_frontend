import React from "react";
import FDInfo from "./mfcomponent2";
import FDComponent from "./mfcomponent1";
import FDAdvantages from "./mfcomponent3";
import MainFDbg from "../../components/FixedDeposit/MainFDbg.js";
import FDFaqSection from "./mfcomponent5";

const FDmain = () => {
  return (
    <>
      <FDComponent />
      <FDInfo/>
      <FDAdvantages/>
      <MainFDbg/>
      <FDFaqSection />
    </>
  );
};
export default FDmain;
