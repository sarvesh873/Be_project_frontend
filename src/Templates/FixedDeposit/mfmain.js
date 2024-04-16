import React from "react";
import MutualFundsInfo from "./mfcomponenet2";
import MutualFundsComponent from "./mfcomponent1";
import MutualFundAdvantages from "./mfcomponent3";
import MainFDbg from "../../components/FixedDeposit/MainFDbg.js";
import MFFaqSection from "./mfcomponent5";

const FDmain = () => {
  return (
    <>
      <MutualFundsComponent />
      <MutualFundsInfo/>
      <MutualFundAdvantages/>
      <MainFDbg/>
      <MFFaqSection />
    </>
  );
};
export default FDmain;
