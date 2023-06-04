import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const Product = () => {

  const [products, setProducts] = useState([])

  const URL = "http://localhost:3000";


  const getProducts = async ()=>{
    const response = await axios.get(`${URL}/products`);
    setProducts(response.data)
  }

  useEffect(() => {
    return () => {
      getProducts();
    };
  }, [])
  return (
    <>
      <h2>Productos</h2>

      <Link to={"/create-product"} className="btn btn-verde nvo-cliente">
        {" "}
        <i className="fas fa-plus-circle"></i>
        Nuevo Producto
      </Link>

      {
        products.map(product => (

          <ProductCard key={product._id}  id={product._id} image={product.image} name={product.name} price={product.price}/>

        ))
      }

      
    </>
  );
};
