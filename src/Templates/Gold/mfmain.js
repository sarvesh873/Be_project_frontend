import React from "react";
import GoldInfo from "./mfcomponent2";
import GoldComponent from "./mfcomponent1";
import GoldAdvantages from "./mfcomponent3";
import Mainbg from "../../components/Gold/Mainbg.js";
import GoldFaqSection from "./mfcomponent5";

const Goldmain = () => {
  return (
    <>
      <GoldComponent />
      <GoldInfo/>
      <GoldAdvantages/>
      <Mainbg/> 
      <GoldFaqSection />
    </>
  );
};
export default Goldmain;
