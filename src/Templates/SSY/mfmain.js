import React from "react";
import SSYInfo from "./mfcomponent2";
import SSYComponent from "./mfcomponent1";
import SSYAdvantages from "./mfcomponent3";
import MainSSY from "../../components/PPF/MainSSY.js";
import SSYFaqSection from "./mfcomponent5";

const SSYmain = () => {
  return (
    <>
      <SSYComponent />
      <SSYInfo/>
      <SSYAdvantages/>
       <MainSSY/>
      <SSYFaqSection />
    </>
  );
};
export default SSYmain;
