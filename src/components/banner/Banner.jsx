import React from "react";
import "animate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Velocidad de transición en milisegundos
    slidesToShow: 1, // Cantidad de imágenes a mostrar a la vez
    slidesToScroll: 1, // Cantidad de imágenes a desplazar en cada cambio
    autoplay: true, // Reproducción automática
    autoplaySpeed: 10000, // Intervalo de cambio en milisegundos (10 segundos)
    arrows: false,
  };

  return (
    <section className="banner">
      <Slider {...settings}>
        <div>
          <img
            src="../../../img/logoRace.png"
            className="speedFest__logo animate__animated animate__fadeInUp animate__delay-2s"
            alt="speedFestLogo"
          />
          <h1 className="slogan animate__animated animate__fadeInUp animate__delay-2s">
            El festival de carros deportivos mas inmenso del continente
          </h1>
          <img
            src="../../../img/banner1Speed.jpg"
            alt="Banner1"
            className="banner__img"
          />
        </div>
        <div>
          <h1 className="presentation">Presentado por:</h1>
          <img src="../../../img/LogoPirelli.png" className="pirelli" alt="Pirelli" />
          <h1 className="slogan animate__animated animate__fadeInUp animate__delay-2s">
            Con una gran exposición de autos deportivos y show de drifting
          </h1>
          <img
            src="../../../img/banner2.jpg"
            alt="Banner2"
            className="banner__img"
          />
        </div>
        <div>
            <h1 className="perrosdeplata__text">Perros de plata</h1>
            <img src="../../../img/perrosDePlata.png" className="perrosdeplata" alt="perros de plata" /> 
            <h1 className="slogan animate__animated animate__fadeInUp animate__delay-2s">
            En conjunto con el crew mas veloz de toda ámerica
            </h1>
            
          <img
            src="../../../img/banner3.jpg"
            alt="Banner3"
            className="banner__img"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
