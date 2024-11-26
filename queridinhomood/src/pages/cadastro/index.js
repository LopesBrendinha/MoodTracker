import React from "react";
import olho from "../../assets/imgs/olho.svg"
import "./index.css";

function Cadastro() {
  return (
    <div className="cadastrar-container">
      <div className="cadastrar-box">
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
          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>
          <button type="submit" className="cadastrar-button">
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
