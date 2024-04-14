import React from "react";
import MutualFundsInfo from "./mfcomponenet2";
import MutualFundsComponent from "./mfcomponent1";
import MutualFundAdvantages from "./mfcomponent3";
import Main from "../components/MutualFund/Main.js";
import MFFaqSection from "./mfcomponent5";

const Mfmain = () => {
  return (
    <>
      <MutualFundsComponent />
      <MutualFundsInfo/>
      <MutualFundAdvantages/>
      <Main/>
      <MFFaqSection />
    </>
  );
};
export default Mfmain;
