import React from "react";
import "./index.css";
import calendarIcon from "../../assets/imgs/calendario.svg";
import happyIcon from "../../assets/imgs/feliz.svg";
import moodIcons from "../../assets/imgs/grupo.svg";

function MoodScreen() {
    return (
        <div className="mood-container">
            <header className="mood-header">
                <div className="header-info">
                    <h2 className="header-date">Outubro, 06</h2>
                    <p className="header-day">Domingo</p>
                </div>
                <button className="calendar-button">
                    <img src={calendarIcon} alt="Calendário" className="calendar-icon" />
                </button>
            </header>

            <main className="mood-content">
                <h3 className="mood-question">Como você está </h3>
                <h3 className="mood-question">se sentindo?</h3>
                <div className="mood-selection">
                    <img src={happyIcon} alt="Humor central" className="main-mood" />
                </div>
                <div className="mood-options">
                    <img src={moodIcons} alt="Humores" className="mood-icons" />
                </div>
                <textarea
                    className="mood-comment"

                    placeholder="Comente aqui como você se sente!"
                ></textarea>
                <button className="confirm-button">Confirmar</button>
            </main>
        </div>
    );
}

export default MoodScreen;
