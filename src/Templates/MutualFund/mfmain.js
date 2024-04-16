import React from "react";
import MutualFundsInfo from "./mfcomponenet2";
import MutualFundsComponent from "./mfcomponent1";
import MutualFundAdvantages from "./mfcomponent3";
import Mainbg from "../../components/MutualFund/Mainbg.js";
import MFFaqSection from "./mfcomponent5";

const Mfmain = () => {
  return (
    <>
      <MutualFundsComponent />
      <MutualFundsInfo/>
      <MutualFundAdvantages/>
      <Mainbg/>
      <MFFaqSection />
    </>
  );
};
export default Mfmain;
