import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { SearchProduct } from "./SearchProduct";
import { CountProduct } from "./CountProduct";
import Swal from "sweetalert2";

export const NewPedido = () => {
  const URL = "http://localhost:3000";
  const [client, setClient] = useState({});
  const [products, setProducts] = useState([]);
  // const [buscar, setBuscar] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const getCliente = async () => {
    const client = await axios.get(`${URL}/clientes/${id}`);
    setClient(client.data);
  };
  const getProductos = async () => {
    const response = await axios.get(`${URL}/products`);
    setProducts(response.data);
  };

  useEffect(() => {
    getCliente();
    getProductos();
    sumaTotal();
  }, [pedidos]);

  const handleSelect = async (e) => {
    e.preventDefault();

    const verifica = pedidos.filter(
      (product) => product.producto === e.target.value
    );

    if (verifica.length === 0) {
      const response = await axios.get(`${URL}/products/${e.target.value}`);
      const newpedido = {
        ...response.data,
        producto: e.target.value,
        cantidad: 0,
        priceintro: 0,
        subtotal: 0,
      };

      setPedidos([...pedidos, newpedido]);
    } else {
      return pedidos;
    }
  };

  // const buscaProducto = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.get(`${URL}/search?name=${buscar}`);

  //   if (response.data[0]) {
  //     const pedido = {
  //       ...response.data[0],
  //       producto: response.data[0]._id,
  //       priceintro: 0,
  //       subtotal: 0,
  //       cantidad: 0,
  //     };

  //     setPedidos([...pedidos, pedido]);
  //   } else {
  //     Swal.fire("No se encontraron resultados", "Vuelva a Intentarlo", "error");
  //   }
  // };

  // const leerBus = (e) => {
  //   setBuscar(e.target.value);
  // };

  const sumaTotal = () => {
    if (pedidos.length === 0) {
      setTotal(0);
      return;
    }
    let nuevoTotal = 0;
    pedidos.map((pedido) => (nuevoTotal += pedido.subtotal));
    setTotal(nuevoTotal);
  };

  const quitarProducto = (id) => {
    const response = pedidos.filter((pedido) => pedido._id !== id);
    setPedidos(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPedido = {
      cliente: id,
      pedido: pedidos,
      total: total,
    };

    try {
      await axios.post(`${URL}/pedidos`, newPedido);
      Swal.fire("OK", "El pedido se agregó correctamente", "success");
      navigate("/pedidos");
    } catch (error) {
      console.log(error);
      Swal.fire("Hubo un error", "Vuelva a Intentarlo", "error");
      navigate("/pedidos");
    }
  };

  return (
    <>
      <h2>Nuevo Pedido</h2>

      <div className="ficha-cliente">
        <h3>Datos de Cliente</h3>
        <p>
          {client.name} {client.lastname}
        </p>
      </div>

      {/* <SearchProduct buscaProducto={buscaProducto} leerBus={leerBus} /> */}
      <legend className="legend">
        Busca un Producto y agrega una cantidad
      </legend>

      <div className="campo">
        <label className="label">Productos:</label>
        <select
          className="selectp"
          onChange={handleSelect}
          defaultValue={"DEFAULT"}
        >
          <option value={"DEFAULT"} disabled>
            --Seleccione Producto--
          </option>
          {products.length !== 0
            ? products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))
            : null}
        </select>
      </div>

      <ul className="resumen">
        {pedidos.length !== 0
          ? pedidos.map((product) => (
              <CountProduct
                key={product._id}
                product={product}
                pedidos={pedidos}
                setPedidos={setPedidos}
                quitarProducto={quitarProducto}
              />
            ))
          : null}
      </ul>
      <p className="total">
        Total a Pagar: <span>$ {total}</span>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="enviar">
          <input
            type="submit"
            className="btn btn-verde btn-block"
            value="Crear Pedido"
            disabled={total > 0 ? false : true}
          />
        </div>
      </form>
    </>
  );
};
