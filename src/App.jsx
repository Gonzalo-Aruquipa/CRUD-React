import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigate } from "./components/Navigate";
import { Client } from "./components/Client";
import { NewClient } from "./components/NewClient";
import { UpdateClient } from "./components/UpdateClient";
import { Product } from "./components/Product";
import { NewProduct } from "./components/NewProduct";
import { UpdateProduct } from "./components/UpdateProduct";
import { Pedido } from "./components/Pedido";
import { NewPedido } from "./components/NewPedido";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="grid contenedor contenido-principal">
          <Navigate />
          <main className="caja-contenido col-9">
            <Routes>
              <Route exact path="/" element={<Client />} />
              <Route exact path="/clientes" element={<Client />} />
              <Route exact path="/create-client" element={<NewClient />} />
              <Route
                exact
                path="/update-client/:id"
                element={<UpdateClient />}
              />
              <Route exact path="/productos" element={<Product />} />
              <Route exact path="/create-product" element={<NewProduct />} />
              <Route
                exact
                path="/update-product/:id"
                element={<UpdateProduct />}
              />
              <Route exact path="/pedidos" element={<Pedido />} />
              <Route exact path="/create-pedido/:id" element={<NewPedido />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}
export default App;
