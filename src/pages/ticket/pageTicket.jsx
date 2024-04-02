import React from "react";
import "./pageTicket.css";
import TicketForm from "./components/ticketForm";
import Button from "../../components/button/button";

const PageTicket = () => {
  return (
    <section className="pageTicket">
      <div className="pageTicket__content">
        <h1>¡SpeedFest te esta esperando!</h1>
        <div className="form__container">
          <h2>Genera tu entrada</h2>
          <TicketForm />
          <Button text={"Generar mi entrada"} />
        </div>
      </div>
    </section>
  );
};

export default PageTicket;
