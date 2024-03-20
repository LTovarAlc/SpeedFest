import React from "react";
import "./Home.css"
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import MiniGalery from "../components/minigalery/minigalery";
import Button from "../components/button/button";
import Presentation from "../components/presentation/presentation";
import Sponsors from "../components/sponsors/sponsors";

const Home = () => {
    return(
        <section className="Home">
            <Header/>
            <Banner/>
            <MiniGalery/>
            <Presentation/>
            <Sponsors/>
            <div className="resto"></div>
        </section>
    )
}

export default Home