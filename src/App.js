import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet";
// Screens
import Home from "./screens/Landing.jsx";
import Login from "./components/Sections/Login.jsx";
import Signup from "./components/Sections/Signup.jsx";
import ForgotPass from  "./components/Sections/ForgetPass.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Footer from "./components/Sections/Footer.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AllSchemes from "./components/Sections/AllSchemes.jsx";
import Mfmain from "./Templates/MutualFund/mfmain.js";
import Main from "./components/MutualFund/Main.js";
import MainGold from "./components/Gold/Main.js";
import FDmain from  './Templates/FixedDeposit/mfmain.js';
import NPSmain from "./Templates/NPS/mfmain.js";
import HImain from "./Templates/HealthInsurance/mfmain.js";
import Goldmain from "./Templates/Gold/mfmain.js";
import PPFmain from "./Templates/PPF/mfmain.js";
import MainFD from "./components/FixedDeposit/MainFD.js";
import TImain from "./Templates/TermInsurance/mfmain.js";
import SSYmain from "./Templates/SSY/mfmain.js";

import MainNPS from  "./components/NPS/MainNPS.js" ;
import { AuthProvider } from './context/AuthContext';
import PApp from "./components/newprofile/PApp.js"

export default function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
     <Navbar />
    {/* <Helmet> */}
        <Routes>  
        <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpass" element={<ForgotPass />}/>
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile" element={<PApp />} />
          <Route path="/all-schemes" element={<AllSchemes /> }/>
          <Route path="/mutual-funds" element={<Mfmain />} />
          <Route path="/fixed-deposit" element={<FDmain />} />
          <Route path="/nps" element={<NPSmain />} />
          <Route path="/gold-investment" element={<Goldmain />} />
          <Route path="/health-insurance" element={<HImain />} />
          <Route path="/ppf" element={<PPFmain/>} />
          <Route path="/ssy" element={<SSYmain/>} />
          <Route path="/term-insurance" element={<TImain/>} />

          <Route path="/all-mutual-funds" element={<Main />} />
          <Route path="/all-fixed-deposit" element={<MainFD />} />
          <Route path="/all-nps" element={<MainNPS />} />
          <Route path="/all-gold" element={<MainGold />} />
        </Routes>
        <Footer />
        </AuthProvider>
      </BrowserRouter>
  );
}