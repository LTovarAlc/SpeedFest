import React from "react";
import "./Home.css"
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import MiniGalery from "../components/minigalery/minigalery";

const Home = () => {
    return(
        <section className="Home">
            <Header/>
            <Banner/>
            <MiniGalery/>
            <div className="resto"></div>
        </section>
    )
}

export default Home