import React from "react";
import "./reset.css"
import Home from "./pages/Home";
import Page404 from "./pages/page404/page404";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import InfoDev from "./components/footer/icons-socials/infoDEV/infoDEV";
import PageTicket from "./pages/ticket/pageTicket";
import ValidatePassPage from "./pages/validatePass/validatePass";
import HeaderMobile from "./components/headerMobile/headerMobile";

function App({qrData}) {
  return (
    <Router>
      <Header/>
      <HeaderMobile/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Error" element={<Page404/>}/>
        <Route path="/PageTicket" element={<PageTicket/>}/>
        <Route path="/ValidatePass" element={<ValidatePassPage data={qrData}/>}/>
      </Routes>
      <Footer/>
      <InfoDev/>
    </Router>
  )
}

export default App;
