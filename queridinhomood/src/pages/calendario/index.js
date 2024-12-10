import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./index.css";
import Navigation from "../../components/navigation/navigation";

function CalendarioScreen() {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const formatShortWeekday = (locale, date) => {
        const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        return weekdays[date.getDay()];
    };

    return (
        <div className="calendar-container">
            <header className="calendar-header">
                <h2 className="header-name">Calendário</h2>
            </header>

            <main>
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                        className="custom-calendar"
                        locale="pt-BR"
                        formatShortWeekday={formatShortWeekday}
                        next2Label={null}
                        prev2Label={null}
                        view="month"
                    />
                    <Link to='/emocao'>
                        <button className="confirm-button">
                            Confirmar
                        </button>
                    </Link>
                </div>
                <div className="navigation-footer">
                    <Navigation />
                </div>
            </main>
        </div>
    );
}

export default CalendarioScreen;