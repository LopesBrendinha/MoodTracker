import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import Calendar from "react-calendar"; // Importa o componente de calendário
import "./index.css";
import Navigation from "../../components/navigation/navigation"; // Importa o componente de navegação

function CalendarioScreen() {
    const [date, setDate] = useState(new Date()); // Estado para armazenar a data selecionada
    const navigate = useNavigate(); // Inicializa o hook useNavigate

    const handleDateChange = (newDate) => {
        setDate(newDate); // Atualiza a data selecionada
    };

    const handleConfirm = () => {
        navigate("/emocao"); // Redireciona para a página de emoção
    };

    // Função para formatar os dias da semana
    const formatShortWeekday = (locale, date) => {
        const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']; // Abreviações desejadas
        return weekdays[date.getDay()]; // Retorna a abreviação correspondente ao dia
    };

    return (
        <div className="calendar-container">
            <header className="calendar-header">
                <h2 className="header-name">Calendário</h2>
            </header>

            <main>
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateChange} // Função chamada ao selecionar uma data
                        value={date} // Valor do calendário
                        className="custom-calendar" // Classe personalizada para estilização
                        locale="pt-BR" // Define o idioma e semana começando no domingo
                        formatShortWeekday={formatShortWeekday} // Adiciona a função de formatação dos dias da semana 
                        next2Label={null} // Remove a seta de navegação para o ano seguinte
                        prev2Label={null} // Define o símbolo para o botão de mês anterior
                        view="month" // Força a visualização mensal
                    />
                    <button className="confirm-button" onClick={handleConfirm}>
                        Confirmar
                    </button>
                </div>
                <div className="navigation-footer">
                    <Navigation />
                </div>
            </main>
        </div>
    );
}

export default CalendarioScreen;