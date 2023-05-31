import axios from "axios";
import { useState, useEffect } from "react";
import { ClienteCard } from "./ClienteCard";
import { Link } from "react-router-dom";
export const Client = () => {
  const [clientes, setClientes] = useState([]);

  const URL = "http://localhost:3000";

  const getClientes = async () => {
    const response = await axios.get(`${URL}/clientes`);
    setClientes(response.data);
  };

  useEffect(() => {
    getClientes();
  }, [clientes]);

  return (
    <>
      <h2>Clientes</h2>

      <Link to={"/create-client"} className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Cliente
      </Link>

      <ul className="listado-clientes">
        {clientes.map((cliente) => (
          <ClienteCard key={cliente._id} id={cliente._id} name={cliente.name} lastname={cliente.lastname} telefono={cliente.telefono} empresa={cliente.empresa} email={cliente.email}/>
        ))}
      </ul>
    </>
  );
};
