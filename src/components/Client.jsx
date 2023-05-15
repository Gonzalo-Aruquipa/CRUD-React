import axios from "axios";
import { useState, useEffect } from "react";
export const Client = () => {
  const [clientes, setClientes] = useState([]);

  const URL = "http://localhost:3000/clientes";

  useEffect(() => {
    return async () => {
      const response = await axios(URL);
      setClientes(response.data);
    };
  }, []);

  return (
    <>
      <h2>Clientes</h2>

      <a href="nuevo-cliente.html" className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Cliente
      </a>

      <ul className="listado-clientes">
        {clientes.map((cliente) => (
          <li className="cliente" key={cliente.id}>
            <div className="info-cliente">
              <p className="nombre">
                {cliente.name} {cliente.lastname}
              </p>
              <p className="empresa">{cliente.empresa}</p>
              <p>{cliente.email}</p>
              <p>Tel: {cliente.telefono}</p>
            </div>
            <div className="acciones">
              <a href="#" className="btn btn-azul">
                <i className="fas fa-pen-alt"></i>
                Editar Cliente
              </a>
              <button type="button" className="btn btn-rojo btn-eliminar">
                <i className="fas fa-times"></i>
                Eliminar Cliente
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
