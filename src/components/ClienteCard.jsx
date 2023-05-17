export const ClienteCard = (cliente) => {
  const { _id, name, lastname, telefono, email, empresa } = cliente;
  return (
    <>
      <li className="cliente" key={_id}>
        <div className="info-cliente">
          <p className="nombre">
            {name} {lastname}
          </p>
          <p className="empresa">{empresa}</p>
          <p>{email}</p>
          <p>Tel: {telefono}</p>
        </div>
        <div className="acciones">
          <a href="#" className="btn btn-azul">
            <i className="fas fa-pen-alt"></i>
            Editar Cliente
          </a>
          <button type="button" className="btn btn-rojo btn-eliminar">
            <i className="fas fa-times"></i>
            Eliminar Cliente
          </button>
        </div>
      </li>
    </>
  );
};
