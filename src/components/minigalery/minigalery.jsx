import "./minigalery.css";
import lamboIMG from "./minigaleryIMG/lambo.jpg";
import mercedesIMG from "./minigaleryIMG/mercedes.jpg";
import nascarIMG from "./minigaleryIMG/nascar.jpg";

const MiniGalery = () => {
  return (
    <section className="minigalery">
      <div className="minigalery__containers">
        <span className="minigalery__slogan">Los mejores autos</span>
        <img src={lamboIMG} className="minigalery__img" />
      </div>
      <div className="minigalery__containers">
        <span className="minigalery__slogan">Los mas deseados</span>
        <img src={mercedesIMG} className="minigalery__img" />
      </div>
      <div className="minigalery__containers">
        <span className="minigalery__slogan">Los mas rapidos</span>
        <img src={nascarIMG} className="minigalery__img" />
      </div>
    </section>
  );
};

export default MiniGalery;
