import axios from "axios";
import { useEffect, useState } from "react";
import { PedidoCard } from "./PedidoCard";

export const Pedido = () => {

  const [pedidos, setPedidos] = useState([]);

  const URL = import.meta.env.VITE_APP_BACKEND_URL;
  const token = localStorage.getItem("token");


  const getPedidos = async ()=>{
    const response = await axios.get(`${URL}/pedidos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPedidos(response.data)
  }

  useEffect(() => {
    return () => {
      getPedidos();
    };
  }, [])
  return (
    <>
      <h2>Pedidos</h2>
      

      <ul className="listado-pedidos">
        {
          pedidos.map(pedido => (
            <PedidoCard  key={pedido._id} _id={pedido._id} total={pedido.total} cliente={pedido.cliente} productos={pedido.pedido}/>

          ))
        }
        
      </ul>
    </>
  );
};
