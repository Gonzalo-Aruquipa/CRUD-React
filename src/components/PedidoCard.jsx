export const PedidoCard = (pedido) => {

  const {_id, total, cliente, productos}= pedido;

  return (
    <>
      <li className="pedido">
        <div className="info-pedido">
          <p className="id">ID: {_id}</p>
          <p className="nombre">Cliente: {cliente.name} {cliente.lastname}</p>

          <div className="articulos-pedido">
            <p className="productos">Artículos Pedido: </p>
            <ul>

              {productos.map(producto=> (

              <li key={producto._id}>
                <p>{producto.producto.name}</p>
                <p>Precio: $ {producto.priceintro}</p>
                <p>Cantidad: {producto.cantidad}</p>
              </li>

              ))}
              
            </ul>
          </div>
          <p className="total">Total: $ {total} </p>
        </div>
        <div className="acciones">
          <a href="#" className="btn btn-azul">
            <i className="fas fa-pen-alt"></i>
            Editar Pedido
          </a>

          <button type="button" className="btn btn-rojo btn-eliminar">
            <i className="fas fa-times"></i>
            Eliminar Pedido
          </button>
        </div>
      </li>
    </>
  );
};
