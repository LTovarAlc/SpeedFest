import React, { useState } from "react";
import "./pageTicket.css";
import TicketForm from "./components/ticketForm";
import Loader from "./components/loader/loader";

const PageTicket = () => {
  const [formVisible, setFormVisible] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormVisible(false);
    setFormSubmitted(true);
  };

  return (
    <section className="pageTicket">
      <div className="pageTicket__content">
        <h1>¡SpeedFest te está esperando!</h1>
        <div className="form__container">
          <h2>Genera tu entrada</h2>
          {formVisible && <TicketForm onFormSubmit={handleFormSubmit} />}
          {formSubmitted && <Loader />}
        </div>
      </div>
    </section>
  );
};

export default PageTicket;
