import React from "react";
import NPSInfo from "./mfcomponent2";
import NPSComponent from "./mfcomponent1";
import NPSAdvantages from "./mfcomponent3";
import MainNPSbg from "../../components/NPS/MainNPSbg.js";
import NPSFaqSection from "./mfcomponent5";

const NPSmain = () => {
  return (
    <>
      <NPSComponent />
      <NPSInfo/>
      <MainNPSbg/>
      <NPSAdvantages/>
      <NPSFaqSection />
    </>
  );
};
export default NPSmain;
