import React from "react";
import TIInfo from "./mfcomponent2";
import TIComponent from "./mfcomponent1";
import TIAdvantages from "./mfcomponent3";
import Table from "./MainTI.js";
import TIFaqSection from "./mfcomponent5";

const TImain = () => {
  return (
    <>
      <TIComponent />
      <TIInfo/>
      <TIAdvantages/>
       <Table/> 
      <TIFaqSection />
    </>
  );
};
export default TImain;
