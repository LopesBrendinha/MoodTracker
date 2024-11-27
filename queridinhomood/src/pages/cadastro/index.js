import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="cadastrar-container">
      <div className="cadastrar-box">
        <p className="subtitle">Cadastrar</p>
        <form>
          <input
            type="email"
            placeholder="Insira o E-mail"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Insira a senha"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            className="input-field"
          />
          
          <Link to="/login">
            <button type="button" className="cadastrar-button">
              Cadastrar
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
