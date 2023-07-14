import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const ProductCard = (product) => {
  const { id, image, name} = product;

  const URL = import.meta.env.VITE_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "El Producto se eliminará!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire("Eliminado!", "El Producto ha sido eliminado.", "success");
      }
    });
  };

  return (
    <>
      <ul className="listado-productos">
        <li className="producto">
          <div className="info-producto">
            <p className="nombre">{name}</p>
            {image ? <img src={`${URL}/${image}`} /> : null}
          </div>
          <div className="acciones">
            <Link to={`/update-product/${id}`} className="btn btn-azul">
              <i className="fas fa-pen-alt"></i>
              Editar Producto
            </Link>

            <button
              type="button"
              className="btn btn-rojo btn-eliminar"
              onClick={() => handleDelete(id)}
            >
              <i className="fas fa-times"></i>
              Eliminar Producto
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
