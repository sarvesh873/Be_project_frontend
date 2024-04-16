import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet";
// Screens
import Home from "./screens/Landing.jsx";
import LoginSignUp from "./components/Sections/LoginSignUp.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AllSchemes from "./components/Sections/AllSchemes.jsx";
import MutualFunds from "./components/SchemeDetails/MutualFunds.jsx";
import Mfmain from "./Templates/MutualFund/mfmain.js";
import Main from "./components/MutualFund/Main.js";
import FDmain from  './Templates/FixedDeposit/mfmain.js';
import MainFD from "./components/FixedDeposit/MainFD.js";
import MainNPS from  "./components/NPS/MainNPS.js" ;
import { AuthProvider } from './context/AuthContext'
export default function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
    {/* <Helmet> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all-schemes" element={<AllSchemes /> }/>
          <Route path="/mutual-funds" element={<Mfmain />} />
          <Route path="/fixed-deposit" element={<FDmain />} />
          <Route path="/all-mutual-funds" element={<Main />} />
          <Route path="/all-fixed-deposit" element={<MainFD />} />
          <Route path="/all-nps" element={<MainNPS />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}