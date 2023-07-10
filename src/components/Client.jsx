import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ClienteCard } from "./ClienteCard";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import { CRMContext } from "../context/CRMContext";
export const Client = () => {
  const [clientes, setClientes] = useState([]);


  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();
  const URL = "http://localhost:3000";

  const getClientes = async () => {
    try {
      const response = await axios.get(`${URL}/clientes`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
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
    if (auth.token !== 0) {
      getClientes();
    } else {
      navigate("login");
    }
  }, []);

  if (!auth.auth) {
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
