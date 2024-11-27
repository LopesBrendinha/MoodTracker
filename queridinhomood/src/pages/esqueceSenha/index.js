import React from "react";
import { Link } from "react-router-dom"; // Importando o Link
import "./index.css";

function esqueceSenha() {
  return (
    <div className="esqueceSenha-container">
      <div className="esqueceSenha-box">
        <p className="subtitle">Redefinir Senha</p>
        <h1>Informe o e-mail para qual deseja redefinir a senha</h1>
        <form>
          <input
            type="email"
            placeholder="Insira o E-mail"
            className="input-field"
          />
          <Link to = '/login'>
            <button type="submit" className="esqueceSenha-button">
                Redefinir Senha
            </button>
          </Link>
          
          <Link to="/login" className="forgot-password"> 
            Voltar para Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default esqueceSenha;