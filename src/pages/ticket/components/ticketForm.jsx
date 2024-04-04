import React, { useState } from "react";
import Input from "./inputs/input";
import Button from "../../../components/button/button";
import "./ticketForm.css";

const TicketForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    select: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.select) {
      console.log("Formulario enviado:", formData);
      setError("");
      onFormSubmit(formData); // Pasa formData como argumento
    } else {
      setError("Todos los campos deben ser llenados");
    }
  };

  return (
    <form className="ticketForm" onSubmit={handleSubmit}>
      <div className="form-field">
        <Input
          text={"Nombre"}
          type={"text"}
          name={"name"}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <Input
          text={"E-mail"}
          type={"email"}
          name={"email"}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-field">
        <select
          name="select"
          id="formSelect"
          className="custom-select"
          value={formData.select}
          onChange={handleInputChange}
        >
          <option value="">Acompañantes</option>
          <option value="Sin acompañantes">Sin acompañantes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      {error && <div className="error">{error}</div>}
      <Button text={"Generar mi entrada"} type="submit" />
    </form>
  );
};

export default TicketForm;
