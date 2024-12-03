import React from "react";
import Navigation from "../../components/navigation/navigation"; // Importa o componente de navegação
import "./index.css"; // Caso precise de estilos específicos para a tela inicial

function HomeScreen() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="greeting-info">
          <h1 className="greeting-title">Bom dia,</h1>
          <h1 className="greeting-title">Lucas!</h1>
          <p className="greeting-subtitle">Pronto para explorar suas emoções?</p>
        </div>
      </header>
      <div className="navigation-footer">
        <Navigation />
      </div>
    </div>
  );
}

export default HomeScreen;