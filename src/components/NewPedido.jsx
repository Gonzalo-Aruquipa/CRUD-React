import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NewPedido = () => {

  const URL = "http://localhost:3000";
  const [client, setClient] = useState({});

  const { id } = useParams();

  const getCliente = async () => {
    const client = await axios.get(`${URL}/clientes/${id}`);
    setClient(client.data)
  };

  useEffect(() => {
    getCliente();
  }, [] );
  return (
    <>
      <h2>Nuevo Pedido</h2>

      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>{client.name} {client.lastname}</p>
      </div>

      <form  >
        <legend>Busca un Producto y agrega una cantidad</legend>

        <div className="campo">
          <label>Productos:</label>
          <input type="text" placeholder="Nombre Productos" name="productos" />
        </div>

        <ul className="resumen">
          <li>
            <div className="texto-producto">
              <p className="nombre">Macbook Pro</p>
              <p className="precio">$250</p>
            </div>
            <div className="acciones">
              <div className="contenedor-cantidad">
                <i className="fas fa-minus"></i>
                <input type="text" name="cantidad" />
                <i className="fas fa-plus"></i>
              </div>
              <button type="button" className="btn btn-rojo">
                <i className="fas fa-minus-circle"></i>
                Eliminar Producto
              </button>
            </div>
          </li>
          <li>
            <div className="texto-producto">
              <p className="nombre">Macbook Pro</p>
              <p className="precio">$250</p>
            </div>
            <div className="acciones">
              <div className="contenedor-cantidad">
                <i className="fas fa-minus"></i>
                <input type="text" name="cantidad" />
                <i className="fas fa-plus"></i>
              </div>
              <button type="button" className="btn btn-rojo">
                <i className="fas fa-minus-circle"></i>
                Eliminar Producto
              </button>
            </div>
          </li>
          <li>
            <div className="texto-producto">
              <p className="nombre">Macbook Pro</p>
              <p className="precio">$250</p>
            </div>
            <div className="acciones">
              <div className="contenedor-cantidad">
                <i className="fas fa-minus"></i>
                <input type="text" name="cantidad" />
                <i className="fas fa-plus"></i>
              </div>
              <button type="button" className="btn btn-rojo">
                <i className="fas fa-minus-circle"></i>
                Eliminar Producto
              </button>
            </div>
          </li>
        </ul>
        <div className="campo">
          <label>Total:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            readOnly="readonly"
          />
        </div>
        <div className="enviar">
          <input
            type="submit"
            className="btn btn-azul"
            value="Agregar Pedido"
          />
        </div>
      </form>
    </>
  );
};
