import axios from "axios";
import { useEffect, useState } from "react";
import { PedidoCard } from "./PedidoCard";

export const Pedido = () => {

  const [pedidos, setPedidos] = useState([]);

  const URL = "http://localhost:3000";


  const getPedidos = async ()=>{
    const response = await axios.get(`${URL}/pedidos`);
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
