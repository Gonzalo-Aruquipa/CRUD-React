import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UpdateProduct = () => {
  const URL = "http://localhost:3000";

  const [product, setProduct] = useState([]);

  console.log(product)

  const { id } = useParams();

  const getProduct = async () => {
    const product = await axios.get(`${URL}/products/${id}`);
    setProduct(product.data)
  };

  useEffect(() => {
    getProduct();
  }, [] );
  return (
    <>
      <h2>Editar Producto</h2>

      <form action="/productos" method="POST">
        <legend>Llena todos los campos</legend>

        <div className="campo">
          <label>Nombre:</label>
          <input type="text" placeholder="Nombre Producto" name="nombre" />
        </div>

        <div className="campo">
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            min="0.00"
            step="0.01"
            placeholder="Precio"
          />
        </div>

        <div className="campo">
          <label>Imagen:</label>
          <input type="file" name="imagen" />
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
