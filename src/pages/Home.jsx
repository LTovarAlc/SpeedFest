import React from "react";
import "./Home.css"
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";

const Home = () => {
    return(
        <section className="Home">
            <Header/>
            <Banner/>
            <div className="resto"></div>
        </section>
    )
}

export default Home