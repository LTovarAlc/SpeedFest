import React from "react";
import "./reset.css"
import Home from "./pages/Home";
import Page404 from "./pages/page404/page404";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import InfoDev from "./components/footer/icons-socials/infoDEV/infoDEV";
import PageTicket from "./pages/ticket/pageTicket";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Error" element={<Page404/>}/>
        <Route path="/PageTicket" element={<PageTicket/>}/>
      </Routes>
      <Footer/>
      <InfoDev/>
    </Router>
  )
}

export default App;
