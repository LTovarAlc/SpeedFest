import React from "react";
import "./Home.css"
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import MiniGalery from "../components/minigalery/minigalery";
import Button from "../components/button/button";
import Presentation from "../components/presentation/presentation";
import Sponsors from "../components/sponsors/sponsors";
import Information from "../components/information/information";
import Footer from "../components/footer/footer";
import InfoDev from "../components/footer/icons-socials/infoDEV/infoDEV";

const Home = () => {
    return(
        <section className="Home">
            <Banner/>
            <MiniGalery/>
            <Presentation/>
            <Sponsors/>
            <Information/>
        </section>
    )
}

export default Home