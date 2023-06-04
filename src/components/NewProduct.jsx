import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export const NewProduct = () => {
  const URL = "http://localhost:3000";
  const [product, setProduct] = useState(
    {
        name: "",
        price: "",
        image: "",
      }
  );

  let handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // setProduct(validate({ ...cliente, [e.target.name]: e.target.value }));
  };
  const postProduct = async () => {
    try {
      await axios.post(`${URL}/products`, product);
      Swal.fire("OK", "El producto se agregó correctamente", "success");
      //   navigate("/clientes")
    } catch (error) {
        console.log(error)
      Swal.fire("Hubo un error", "El usuario ya está registrado", "error");
      //   navigate("/clientes")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct();

    setProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <>
      <h2>Nuevo Producto</h2>

      <form action="/productos" onSubmit={handleSubmit}>
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre Producto"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            min="0.00"
            step="0.01"
            placeholder="Precio"
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label>Imagen:</label>
          <input 
          type="file" 
          name="image"
          onChange={handleChange}
           />
        </div>

        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Producto"
          />
        </div>
      </form>
    </>
  );
};
