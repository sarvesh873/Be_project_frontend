import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => { }]);

export default props => {
  const [state, setState] = useState({
    user: {
      username: "",
      gender: "",
      birthdate: new Date().toISOString().slice(0, 10),
      location: "",
      salary: "",
      profession: "",
      acceptTerms: false,
      newsletter: false,
      goalAmount: "",
      goalDuration: "",
      insuranceAmount:"",
      loanAmount:"",
      hasLoan:false,
      laondura:"",
      hasInsurance:false,
      depMem: "", // New field for number of dependent members
      child: "",
    },
    errors: {},
    // depDetails: [] 
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};
