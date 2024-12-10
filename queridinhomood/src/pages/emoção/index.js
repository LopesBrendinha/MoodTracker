import React from "react";
import "./index.css";
import { Link} from "react-router-dom";
import Navigation from "../../components/navigation/navigation";

import calendarIcon from "../../assets/imgs/calendario.svg";
import happyIcon from "../../assets/imgs/feliz.svg";
import moodIcons from "../../assets/imgs/grupo.svg";

function MoodScreen() {
    return (
        <div className="mood-container">
            <header className="mood-header">
                <div className="header-info">
                    <h2 className="header-date">Outubro, 06</h2>
                </div>
                <Link to='/calendario'>
                    <button className="calendar-button">
                        <img src={calendarIcon} alt="Calendário" className="calendar-icon" />
                    </button>
                </Link>
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
                <Link to='/home'>
                    <button className="confirm-button">Confirmar</button>
                </Link>
                <div className="navigation-footer">
                    <Navigation />
                </div>
            </main>
        </div>
    );
}

export default MoodScreen;
