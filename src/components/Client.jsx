import axios from "axios";
import { useState, useEffect } from "react";
import { ClienteCard } from "./ClienteCard";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const Client = () => {
  const [clientes, setClientes] = useState([]);

  const navigate = useNavigate();
  const URL = import.meta.env.VITE_APP_BACKEND_URL;

  const token = localStorage.getItem("token");

  const getClientes = async () => {
    try {
      const response = await axios.get(`${URL}/clientes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClientes(response.data);
    } catch (error) {
      if (error.response.status == 500) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (token !== "") {
      getClientes();
    } else {
      navigate("/login");
    }
  }, []);

  if (!token) {
    navigate("/login");
  }

  if (!clientes.length) return <Loading />;

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
          <ClienteCard
            key={cliente._id}
            id={cliente._id}
            name={cliente.name}
            lastname={cliente.lastname}
            telefono={cliente.telefono}
            empresa={cliente.empresa}
            email={cliente.email}
          />
        ))}
      </ul>
    </>
  );
};
