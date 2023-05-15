export const Product = () => {
  return (
    <>
      <h2>Productos</h2>

      <a href="nuevo-producto.html" className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Producto
      </a>

      <ul className="listado-productos">
        <li className="producto">
          <div className="info-producto">
            <p className="nombre">VueJS</p>
            <p className="precio">$25.00 </p>
            {/* <img src="img/1.jpg"> */}
          </div>
          <div className="acciones">
            <a href="#" className="btn btn-azul">
              <i className="fas fa-pen-alt"></i>
              Editar Producto
            </a>

            <button type="button" className="btn btn-rojo btn-eliminar">
              <i className="fas fa-times"></i>
              Eliminar Cliente
            </button>
          </div>
        </li>
        <li className="producto">
          <div className="info-producto">
            <p className="nombre">AngularJS</p>
            <p className="precio">$25.00 </p>
            {/* <img src="img/2.jpg"> */}
          </div>
          <div className="acciones">
            <a href="#" className="btn btn-azul">
              <i className="fas fa-pen-alt"></i>
              Editar Producto
            </a>

            <button type="button" className="btn btn-rojo btn-eliminar">
              <i className="fas fa-times"></i>
              Eliminar Producto
            </button>
          </div>
        </li>
        <li className="producto">
          <div className="info-producto">
            <p className="nombre">ReactJS</p>
            <p className="precio">$25.00 </p>
            {/* <img src="img/3.jpg"> */}
          </div>
          <div className="acciones">
            <a href="#" className="btn btn-azul">
              <i className="fas fa-pen-alt"></i>
              Editar Producto
            </a>

            <button type="button" className="btn btn-rojo btn-eliminar">
              <i className="fas fa-times"></i>
              Eliminar Producto
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
