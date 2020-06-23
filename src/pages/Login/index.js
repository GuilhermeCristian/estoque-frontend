import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Background } from "./styles";
import api from "../../services/api";
import logo from "../../assets/logo-site.png";

function Login({ isLoggedIn }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (isLoggedIn) return <Redirect to="/" />;

  async function login() {
    try {
      const response = await api.post("/login", { user, password });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      window.location.reload();
    } catch (err) {
      console.log(err.response);
      setErrors([err.response.data.message]);
    }
  }

  return (
    <Background>
      <div class="box">
        <div class="box-content">
          <img src={logo} alt="Logo" />
          <h3>PRODUTOS</h3>
          <label>Login:</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors &&
            errors.map((error, idx) => (
              <div className="error-msg" key={idx}>
                <p>{error}</p>
              </div>
            ))}
          <button onClick={login}>Entrar</button>
        </div>
      </div>
    </Background>
  );
}

export default Login;
