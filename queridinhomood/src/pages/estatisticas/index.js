import React from "react";
import "./index.css";
import Navigation from "../../components/navigation/navigation"; 
import myImage from "../../assets/imgs/stats.svg"; 

function EstatisticaScreen() {
    return (
        <div className="stats">
            <header className="stats-header">
                <h2 className="header-name">Estatisticas</h2>
            </header>

            <main>
                <div className="stats-container">
                    <h2 className="subtitle">Este mês</h2>
                    <img src={myImage} alt="Descrição da imagem" className="stats-image" />
                </div>
                <div className="navigation-footer">
                    <Navigation />
                </div>
            </main>
        </div>
    );
}

export default EstatisticaScreen;