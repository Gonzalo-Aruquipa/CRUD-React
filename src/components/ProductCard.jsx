import { Link } from "react-router-dom";

export const ProductCard = (product) => {

  const {id, image, name, price}= product;


  return (
    <>
      <ul className="listado-productos">
        <li className="producto">
          <div className="info-producto">
            <p className="nombre">{name}</p>
            <p className="precio">${price}</p>
            <img src={image}/>
          </div>
          <div className="acciones">
            <Link to={`/update-product/${id}`} className="btn btn-azul">
              <i className="fas fa-pen-alt"></i>
              Editar Producto
            </Link>

            <button type="button" className="btn btn-rojo btn-eliminar">
              <i className="fas fa-times"></i>
              Eliminar Cliente
            </button>
          </div>
        </li>
      </ul>
    </>
  );
};
