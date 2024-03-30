import React from "react";
import "./reset.css"
import Home from "./pages/Home";
import Page404 from "./pages/page404/page404";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import InfoDev from "./components/footer/icons-socials/infoDEV/infoDEV";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/error" element={<Page404/>}/>
      </Routes>
      <Footer/>
      <InfoDev/>
    </Router>
  )
}

export default App;
