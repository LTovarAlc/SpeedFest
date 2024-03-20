import "./sponsors.css";
import Ayala from "./sponsorsLOGOS/AYALAwebLOGO-226x100.png"
import BashRacing from "./sponsorsLOGOS/BASHextremeRACINGwebLOGO-226x100.png"
import BashStudio from "./sponsorsLOGOS/BASHextremeSTUDIOcancunWEBLOGO-226x100.png"
import CarMotion from "./sponsorsLOGOS/car-motion.png"
import Effekten from "./sponsorsLOGOS/effekten.png"
import ExtremeToys from "./sponsorsLOGOS/extreme-toys-1.png"
import Ford from "./sponsorsLOGOS/ford-1.png"
import GuasForza from "./sponsorsLOGOS/Guas-forza.png"
import MilImperios from "./sponsorsLOGOS/Mil-Imperios-226x100.png"
import Mothers from "./sponsorsLOGOS/Mothers-1-1.png"
import NaimCar from "./sponsorsLOGOS/NAIMcar-226x100.png"
import SemiNuevos from "./sponsorsLOGOS/seminuevos_m.png"

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2>SpeedFest es presentado por:</h2>
      <div className="creators__container">
        <img
          src="../../../img/logoPirelli.png"
          alt="Pirelli"
          className="logoPirelli"
        />
        <img
          src="../../../img/perrosDePlata.png"
          alt="PerrosDePlata"
          className="perrosdeplata-sponsors"
        />
      </div>
      <h2>Patrocinadores</h2>
      <div className="sponsors__brands-container">
        <img src={Ayala} alt="" className="sponsors__logos"/>
        <img src={BashRacing} alt="" className="sponsors__logos"/>
        <img src={BashStudio} alt="" className="sponsors__logos"/>
        <img src={CarMotion} alt="" className="sponsors__logos"/>
        <img src={Effekten} alt="" className="sponsors__logos"/>
        <img src={ExtremeToys} alt="" className="sponsors__logos"/>
        <img src={Ford} alt="" className="sponsors__logos"/>
        <img src={GuasForza} alt="" className="sponsors__logos"/>
        <img src={MilImperios} alt="" className="sponsors__logos"/>
        <img src={Mothers} alt="" className="sponsors__logos"/>
        <img src={NaimCar} alt="" className="sponsors__logos"/>
        <img src={SemiNuevos} alt="" className="sponsors__logos"/>
      </div>
    </section>
  );
};

export default Sponsors;
