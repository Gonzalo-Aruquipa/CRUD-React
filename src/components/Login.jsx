import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CRMContext } from "../context/CRMContext";

export const Login = () => {
  const URL = "http://localhost:3000";

  const [input, setInputs] = useState({
    email: "",
    password: "",
  });

  const [auth, setAuth] = useContext(CRMContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${URL}/login`, input);
      const  token  = response.data;
      localStorage.setItem("token", token);
      setAuth({
        token,
        auth: true
      })
      Swal.fire("OK", "Bienvenido", "success");
      navigate("/clientes")
    } catch (error) {
      console.log(error);
      Swal.fire("Hubo un error", error.response.data, "error");
    }
  };

  const handleChange = (e) => {
    setInputs({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login">
        <h2>Iniciar Sesión</h2>
        <div className="contenedor-formulario">
          <form onSubmit={handleSubmit}>
            <div className="campo">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="campo">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              value={"Iniciar Sesión"}
              className="btn btn-verde btn-block"
            />
          </form>
        </div>
      </div>
    </>
  );
};
