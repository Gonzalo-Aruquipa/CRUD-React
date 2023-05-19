import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const NewClient = () => {
  const URL = "http://localhost:3000";

  const [cliente, setCliente] = useState({
    name: "",
    lastname: "",
    empresa: "",
    email: "",
    telefono: "",
  });

  let handleInputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
    // setErrors(validate({ ...form, [e.target.name]: e.target.value }));
  };
  const getClientes = async () => {
    await axios.post(`${URL}/clientes`, cliente);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getClientes();
    Swal.fire("OK", "El cliente se agregó correctamente", "success");

    setCliente({
      name: "",
      lastname: "",
      empresa: "",
      email: "",
      telefono: "",
    });
  };
  return (
    <>
      <h2>Nuevo Cliente</h2>

      <form id="form" onSubmit={handleSubmit}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Cliente"
            name="name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="lastname"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="text"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Cliente"
          />
        </div>
      </form>
    </>
  );
};
