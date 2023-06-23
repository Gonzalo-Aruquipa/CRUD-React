import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchProduct } from "./SearchProduct";
import Swal from "sweetalert2";

export const NewPedido = () => {
  const URL = "http://localhost:3000";
  const [client, setClient] = useState({});
  const [buscar, setBuscar] = useState("");
  const [products, setProducts]= useState({});

  console.log("el prouct buscaddo", products)

  const { id } = useParams();

  const getCliente = async () => {
    const client = await axios.get(`${URL}/clientes/${id}`);
    setClient(client.data);
  };

  useEffect(() => {
    getCliente();
  }, []);

  const buscaProducto = async(e) => {
    e.preventDefault();
    const response = await axios.get(`${URL}/search?name=${buscar}`)


    if(response.data[0]){
      setProducts(response.data)
    }else{
      Swal.fire("No se encontraron resultados", "Vuelva a Intentarlo", "error");
    }

  }

  const leerBus = (e) => {
    setBuscar(e.target.value)

  }
  return (
    <>
      <h2>Nuevo Pedido</h2>

      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>
          {client.name} {client.lastname}
        </p>
      </div>

      <SearchProduct 
      buscaProducto={buscaProducto}
      leerBus={leerBus}
      />

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
        <input type="submit" className="btn btn-azul" value="Agregar Pedido" />
      </div>
    </>
  );
};
