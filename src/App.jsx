// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigate } from "./components/Navigate";
import { Client } from "./components/Client";
import { NewClient } from "./components/NewClient";
import { Product } from "./components/Product";
import { Pedido } from "./components/Pedido";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="grid contenedor contenido-principal">
          <Navigate />
          <main className="caja-contenido col-9">
            <Routes>
              <Route exact path="/clientes" element={<Client />} />
              <Route exact path="/create-client" element={<NewClient />} />
              <Route exact path="/productos" element={<Product />} />
              <Route exact path="/pedidos" element={<Pedido />} />
              <Route exact path="/pedidos" element={<Pedido />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}
export default App;
