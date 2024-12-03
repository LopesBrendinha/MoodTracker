import React from "react";
import "./index.css";
import Navigation from "../../components/navigation/navigation"; // Importa o componente de navegação
import avatar from "../../assets/imgs/avatar.svg"; 
import editIcon from "../../assets/imgs/lapis.svg"; 

function Perfil() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="edit-button">
          <img src={editIcon} alt="Editar" className="edit-icon" />
        </button>
      </div>

      <main className="profile-content">
        <div className="profile-info">
          <img src={avatar} alt="Avatar" className="profile-avatar" />
          <h2 className="profile-name">Lore Ipsum</h2>
        </div>
        <div className="profile-card">
        </div>
        <div className="navigation-footer">
          <Navigation />
        </div>
      </main>
    </div>
  );
}

export default Perfil;
