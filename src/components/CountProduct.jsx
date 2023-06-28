import { useState } from "react";

export const CountProduct = (props) => {
  const { product, pedidos, setPedidos, quitarProducto } = props;

  const [subtotal, setSubtotal] = useState(0);
  const [precio2, setPrecio2] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);

  const updatePrice = (productId, newPrice) => {
    setPrecio2(newPrice);
    const pedidoArray = pedidos.map((pedido) => {
      if (pedido._id === productId) {
        return {
          ...pedido,
          priceintro: newPrice,
          subtotal: newPrice * cantidad2,
        };
      } else {
        return pedido;
      }
    });
    setSubtotal(newPrice * cantidad2);
    setPedidos(pedidoArray);
  };

  const updateCantidad = (productId, newCantidad) => {
    setCantidad2(newCantidad);
    const pedidoArray = pedidos.map((pedido) => {
      if (pedido._id === productId) {
        return {
          ...pedido,
          cantidad: newCantidad,
          subtotal: precio2 * newCantidad,
        };
      } else {
        return pedido;
      }
    });

    setSubtotal(precio2 * newCantidad);
    setPedidos(pedidoArray);
  };
  return (
    <>
      <li>
        <div className="texto-producto">
          <p className="nombre">{product.name}</p>
          <p className="precio"> $ {product.price}</p>
        </div>
        <div className="acciones">
          <div className="contenedor-cantidad-in">
            <input
              className="lg-3"
              type="number"
              name="priceintro"
              placeholder="precio"
              onChange={(e) => updatePrice(product._id, e.target.value)}
            />
            <input
              className="lg-3"
              type="number"
              name="cantidad"
              placeholder="cantidad"
              onChange={(e) => updateCantidad(product._id, e.target.value)}
            />
            <input
              className="lg-3"
              type="number"
              name="subtotal"
              placeholder="subtotal"
              value={subtotal}
              disabled
            />
            <button 
            type="button" 
            className=" btn-eli btn-rojo"
            onClick={()=>quitarProducto(product._id)}
            >
              <i className="fas fa-minus-circle"></i>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
