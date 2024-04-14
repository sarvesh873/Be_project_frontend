import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { Helmet } from "react-helmet";
// Screens
import Home from "./screens/Landing.jsx";
import Login from "./components/Sections/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import AllSchemes from "./components/Sections/AllSchemes.jsx";
import MutualFunds from "./components/SchemeDetails/MutualFunds.jsx";
import Mfmain from "./Templates/mfmain.js";
import Main from "./components/MutualFund/Main.js";
export default function App() {
  return (
    <BrowserRouter>
    {/* <Helmet> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all-schemes" element={<AllSchemes /> }/>
          <Route path="/mutual-funds" element={<Mfmain />} />
          <Route path="/all-mutual-funds" element={<Main />} />
        </Routes>

      </BrowserRouter>
  );
}