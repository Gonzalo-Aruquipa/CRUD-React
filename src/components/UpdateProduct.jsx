import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const UpdateProduct = () => {
  const URL = import.meta.env.VITE_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  const [product, setProduct] = useState({
    name: "",
    image: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();

  const getProduct = async () => {
    const product = await axios.get(`${URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setProduct(product.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [error, setError] = useState({});
  const [archivo, setArchivo] = useState("");

  let handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    setError(validate({ ...product, [e.target.name]: e.target.value }));
  };

  let handleImage = (e) => {
    setArchivo(e.target.files[0]);
  };

  const updateProduct = async () => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("image", archivo);
    try {
      await axios.put(`${URL}/products/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire("OK", "Cambios guardados correctamente", "success");
      navigate("/productos");
    } catch (error) {
      console.log(error);
      Swal.fire("Hubo un error", "Vuelva a Intentarlo", "error");
      navigate("/productos");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();

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
      <h2>Editar Producto</h2>

      <form onSubmit={handleSubmit}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Producto"
            name="name"
            defaultValue={product.name}
            onChange={handleChange}
          />
          {error.name && <p className="danger-p">{error.name}</p>}
        </div>

        <div className="campo">
          <label>Imagen:</label>
          {product.image ? (
            <img src={`${URL}/${product.image}`} width={"300"} />
          ) : null}
          <input type="file" name="image" onChange={handleImage} />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Guardar Cambios"
            disabled={error.name  ? true : false}
          />
        </div>
      </form>
    </>
  );
};
