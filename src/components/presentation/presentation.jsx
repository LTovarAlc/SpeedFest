import Button from "../button/button";
import "./presentation.css";
import GreenPorche from "./presentationIMG/greenPorche.png";
import Audi from "./presentationIMG/audi.png"
import Timer from "./timer/timer";

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
          SpeedFest es traído al continente americano por Pirelli en conjunto
          con el equipo más veloz de todo el continente, "Los Perros de Plata",
          para que conozcas lo que significa velocidad. Con nuestra gran
          exhibición de coches deportivos y lujosos, además de nuestro equipo de
          drifting que te dejará impresionado, todos son bienvenidos a conocer
          nuestro festival que se llevará a cabo el 29 de noviembre.
        </p>
        <Timer/>
        <div className="buttons__container">
            <a href="#information"><Button text={"SABER MÁS"}/></a>
            <Button text={"ASISTIRÉ"}/>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
