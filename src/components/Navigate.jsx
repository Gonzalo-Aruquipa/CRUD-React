import { Link } from "react-router-dom";
export const Navigate = () => {
  return (
    <aside className="sidebar col-3">
      <h2>Administración</h2>

      <nav className="navegacion">
        <Link to="/clientes" className="clientes">
          Clientes
        </Link>
        <Link to="/productos" className="productos">
          Productos
        </Link>
        <Link to="/pedidos" className="pedidos">
          Pedidos
        </Link>
      </nav>
    </aside>
  );
};
