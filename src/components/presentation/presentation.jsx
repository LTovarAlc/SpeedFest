import Button from "../button/button";
import "./presentation.css";
import GreenPorche from "./presentationIMG/greenPorche.png";
import Audi from "./presentationIMG/audi.png";
import Timer from "./timer/timer";
import { Link } from "react-router-dom";

const Presentation = () => {
  return (
    <section className="presentation__event">
      <div className="presentation__imgs-container">
        <img src={GreenPorche} alt="Porche" className="presentation__img" />
        <img src={Audi} alt="Audi" className="presentation__img" />
      </div>
      <div className="presentation__text">
        <h2 className="presentation__slogan">
          Una manera de recorrer las pistas y experimentar la adrenalina a otro
          nivel
        </h2>
        <h1 className="presentation__title">
          SpeedFest Pirelli X Perros de Plata{" "}
          <span className="presentation__year">2024</span>
        </h1>
        <p>
          SpeedFest, traido por Pirelli y "Los Perros de Plata", te muestra la
          esencia de la velocidad con coches deportivos, lujo y drifting. ¡Te
          esperamos el 29 de noviembre!
        </p>
        <Timer />
        <div className="buttons__container">
          <a href="#information">
            <Button text={"SABER MÁS"} />
          </a>
          <Link to={"/PageTicket"}>
            <Button text={"ASISTIRÉ"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
