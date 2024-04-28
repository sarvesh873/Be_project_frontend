import React from "react";
import PPFInfo from "./mfcomponent2";
import PPFComponent from "./mfcomponent1";
import PPFAdvantages from "./mfcomponent3";
import MainPPF from "../../components/PPF/MainPPF.js";
import PPFFaqSection from "./mfcomponent5";

const PPFmain = () => {
  return (
    <>
      <PPFComponent />
      <PPFInfo/>
      <PPFAdvantages/>
       <MainPPF/> 
      <PPFFaqSection />
    </>
  );
};
export default PPFmain;
