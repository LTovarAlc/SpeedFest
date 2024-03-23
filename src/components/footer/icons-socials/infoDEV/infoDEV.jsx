import "./infoDEV.css";
import Twiiter from "../twitter.png"
import Linkedin from "../linkedin.png"
import IG from "../ig.png"

const InfoDev = () => {
  return (
    <section className="infoDev">
      <div className="developer__info">
        <h4>
          Desarrollado por: <span>Luis Tovar</span>
        </h4>
        <div className="social__icons-container">
          <img src={Linkedin} alt="" className="social__icons" />
          <img src={Twiiter} alt="" className="social__icons" />
          <img src={IG} alt="" className="social__icons" />
        </div>
      </div>
    </section>
  );
};

export default InfoDev;
