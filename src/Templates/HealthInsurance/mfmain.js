import React from "react";
import HIInfo from "./mfcomponent2";
import HIComponent from "./mfcomponent1";
import HIAdvantages from "./mfcomponent3";
import Table from "./MainHI.js";
import HIFaqSection from "./mfcomponent5";

const HImain = () => {
  return (
    <>
      <HIComponent />
      <HIInfo/>
      <HIAdvantages/>
      <Table/> 
      <HIFaqSection />
    </>
  );
};
export default HImain;
