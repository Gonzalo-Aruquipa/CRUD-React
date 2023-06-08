import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const NewClient = () => {
  const URL = "http://localhost:3000";

  const [cliente, setCliente] = useState({
    name: "",
    lastname: "",
    empresa: "",
    email: "",
    telefono: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  let handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
    setError(validate({ ...cliente, [e.target.name]: e.target.value }));
  };
  const postClientes = async () => {
    try {
      await axios.post(`${URL}/clientes`, cliente);
      Swal.fire("OK", "El cliente se agregó correctamente", "success");
      navigate("/clientes");
    } catch (error) {
      Swal.fire("Hubo un error", "El usuario ya está registrado", "error");
      navigate("/clientes");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postClientes();

    setCliente({
      name: "",
      lastname: "",
      empresa: "",
      email: "",
      telefono: "",
    });
  };

  function validate(cliente) {
    const error = {};
    if (!cliente.name) {
      error.name = "El Nombre no puede ir vacío";
    }
    if (!cliente.lastname) {
      error.lastname = "El apellido no puede ir vacío";
    }
    if (!cliente.empresa) {
      error.empresa = "La empresa no puede ir vacío";
    }
    if (!cliente.email) {
      error.email = "E-mail no puede ir vacío";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(cliente.email)
    ) {
      error.email = "E-mail Invalido";
    }
    if (!cliente.telefono) {
      error.telefono = "El telefono no puede ir vacío";
    } else if (!/^[0-9.]/.test(cliente.telefono)) {
      error.telefono = "Solo se permiten números";
    }
    return error;
  }
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
            onChange={(e) => handleChange(e)}
          />
          {error.name && <p className="danger-p">{error.name}</p>}
        </div>

        <div className="campo">
          <label>Apellido:</label>
          <input
            type="text"
            placeholder="Apellido Cliente"
            name="lastname"
            onChange={(e) => handleChange(e)}
          />
          {error.lastname && <p className="danger-p">{error.lastname}</p>}
        </div>

        <div className="campo">
          <label>Empresa:</label>
          <input
            type="text"
            placeholder="Empresa Cliente"
            name="empresa"
            onChange={(e) => handleChange(e)}
          />
          {error.empresa && <p className="danger-p">{error.empresa}</p>}
        </div>

        <div className="campo">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email Cliente"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          {error.email && <p className="danger-p">{error.email}</p>}
        </div>

        <div className="campo">
          <label>Teléfono:</label>
          <input
            type="text"
            placeholder="Teléfono Cliente"
            name="telefono"
            onChange={(e) => handleChange(e)}
          />
          {error.telefono && <p className="danger-p">{error.telefono}</p>}
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Cliente"
            disabled={
              error.name ||
              error.lastname ||
              error.empresa ||
              error.email ||
              error.telefono
                ? true
                : false
            }
          />
        </div>
      </form>
    </>
  );
};
