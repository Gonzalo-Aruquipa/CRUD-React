import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const NewProduct = () => {
  const URL = import.meta.env.VITE_APP_BACKEND_URL;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [product, setProduct] = useState(
    {
        name: "",
      }
  );

  const [error, setError] = useState({});
  const [archivo, setArchivo] = useState("");

  let handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    setError(validate({ ...product, [e.target.name]: e.target.value }));
  };

  let handleImage = (e) => {
    setArchivo(e.target.files[0])
  }
  const postProduct = async () => {

    const formData = new FormData();
    formData.append("name", product.name)
    formData.append("image", archivo);
    try {
      await axios.post(`${URL}/products`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire("OK", "El producto se agregó correctamente", "success");
        navigate("/productos")
    } catch (error) {
        console.log(error)
      Swal.fire("Hubo un error", "Vuelva a Intentarlo", "error");
        navigate("/productos")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct();

    setProduct({
      name: "",
      price: "",
    });
  };

  function validate(product) {
    const error = {};
    if (!product.name) {
      error.name = "El Nombre no puede ir vacío";
    } 
     
    return error;
  }

  return (
    <>
      <h2>Nuevo Producto</h2>

      <form onSubmit={handleSubmit}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Producto"
            name="name"
            onChange={handleChange}
          />
          {error.name && <p className="danger-p">{error.name}</p>}
        </div>

        <div className="campo">
          <label>Imagen:</label>
          <input 
          type="file" 
          name="image"
          onChange={handleImage}
           />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Producto"
            disabled={error.name 
              ? true
              : false}
          />
        </div>
      </form>
    </>
  );
};
