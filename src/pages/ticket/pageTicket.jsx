import React from "react";
import "./pageTicket.css";
import TicketForm from "./components/ticketForm";

const PageTicket = () => {
  return (
    <section className="pageTicket">
      <div className="pageTicket__content">
        <h1>¡SpeedFest te está esperando!</h1>
        <div className="form__container">
          <h2>Genera tu entrada</h2>
          <TicketForm/>
        </div>
      </div>
    </section>
  );
};

export default PageTicket;
