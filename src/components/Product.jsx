import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Loading } from "./Loading";

export const Product = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const URL = "http://localhost:3000";
  const token = localStorage.getItem("token");

  const getProducts = async () => {
    try {
      const response = await axios.get(`${URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      if (error.response.status == 500) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    return () => {
      if (token !== "") {
        getProducts();
      } else {
        navigate("/login");
      }
    };
  }, []);

  if (!token) {
    navigate("/login");
  }

  if (!products.length) return <Loading />;
  return (
    <>
      <h2>Productos</h2>

      <Link to={"/create-product"} className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Producto
      </Link>

      {products.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          image={product.image}
          name={product.name}
        />
      ))}
    </>
  );
};
