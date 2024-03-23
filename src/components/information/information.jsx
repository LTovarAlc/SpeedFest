import "./information.css";
import Button from "../button/button";
import Mustang from "./informationGalery/mustang.jpg";
import Lambo1 from "./informationGalery/lambo-1.jpg";
import Lambo2 from "./informationGalery/lambo-2.jpg";

const Information = () => {
  return (
    <section className="information">
      <div className="information__container">
        <div className="information__titles">
          <h2>Acerca de <span>SpeedFest</span></h2>
        </div>
        <p className="info__description">
          Te presentamos el evento de autos deportivos más inmenso, presentado
          por Pirelli en conjunto con Perros de Plata, donde podrás apreciar
          muchos de los vehículos más rápidos del mundo entero, con espectáculos
          y mucha adrenalina.
        </p>
        <div className="information__content-container">
          <div className="information__content">
            <img src="../../../img/flag.png" alt="" className="info__icon" />
            <p>
              Mezclamos una manera elegante la pasión por los autos, las
              carreras y la adrenalina de la conducción. SpeedFest es un
              festival único para saciar tus sentidos
            </p>
          </div>
          <div className="information__content">
          <img src="../../../img/car.png" alt="" className="info__icon" />
            <p>
              Te invitamos a nuestra exposición de autos deportivos, donde
              podrás admirar una amplia variedad de modelos emblemáticos y
              disfrutar de emocionantes carreras y espectáculos de Drift.
            </p>
          </div>
          <div className="information__content">
          <img src="../../../img/volante.png" alt="" className="info__icon" />
            <p>
              SpeedFest de Pirelli y Perros de plata invita a los interesados a
              pasar una tarde llena de adrenalina, motores y humo. Un evento
              para toda la familia totalmente gratis, Te esperamos!
            </p>
          </div>
          <div className="information__content">
            <Button text={"Quiero asistir"}/>
          </div>
        </div>
      </div>
      {/* <div className="information__img-container">
        <div className="information__galery">
          <img src={Mustang} alt="" className="information__galery-img" />
          <img src={Lambo1} alt="" className="information__galery-img" />
          <img src={Lambo2} alt="" className="information__galery-img" />
        </div>
      </div> */}
    </section>
  );
};

export default Information;
