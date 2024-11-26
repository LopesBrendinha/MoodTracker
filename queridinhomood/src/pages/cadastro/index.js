import React from "react";
import olho from "../../assets/imgs/olho.svg"
import "./index.css";

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
          <button type="submit" className="cadastrar-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
