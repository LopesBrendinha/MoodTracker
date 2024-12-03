import React from "react";
import olho from "../../assets/imgs/olho.svg"
import "./index.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <p className="subtitle">Acessar sua conta</p>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            className="input-field"
          />
          <div className="password-container">
            <input
              type="password"
              placeholder="Senha"
              className="input-field"
            />
            <button type="button" className="toggle-password">
                <img src={olho} alt="Olho" style={{ width: '20px', height: '20px',}} />
            </button>
          </div>
          <Link to ='/esqueceSenha' className="forgot-password">
            Esqueci minha senha
          </Link>
          <Link to ='/cadastro' className="forgot-password">
            Criar nova Conta
          </Link>
          <Link to = '/home'>
            <button type="submit" className="login-button">
              Acessar
            </button>
          </Link>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
