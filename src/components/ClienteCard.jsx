import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const ClienteCard = (cliente) => {
  const { id, name, lastname, telefono, email, empresa } = cliente;

  const URL = import.meta.env.VITE_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "El Cliente se eliminará!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/clientes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire("Eliminado!", "El Cliente ha sido eliminado.", "success");
      }
    });
  };

  return (
    <>
      <li className="cliente" key={id}>
        <div className="info-cliente">
          <p className="nombre">
            {name} {lastname}
          </p>
          <p className="empresa">{empresa}</p>
          <p>{email}</p>
          <p>Tel: {telefono}</p>
        </div>
        <div className="acciones">
          <Link to={`/update-client/${id}`} className="btn btn-azul">
            <i className="fas fa-pen-alt"></i>
            Editar Cliente
          </Link>

          <Link to={`/create-pedido/${id}`} className="btn btn-amarillo">
            <i className="fas fa-plus"></i>
            Nuevo Pedido
          </Link>
          <button
            type="button"
            className="btn btn-rojo btn-eliminar"
            onClick={() => handleDelete(id)}
          >
            <i className="fas fa-times"></i>
            Eliminar Cliente
          </button>
        </div>
      </li>
    </>
  );
};
