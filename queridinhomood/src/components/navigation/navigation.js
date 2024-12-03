import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg"; 
import calendarIcon from "../../assets/icons/calendario.svg";
import smileIcon from "../../assets/icons/smile.svg";
import chartIcon from "../../assets/icons/estatisticas.svg";
import userIcon from "../../assets/icons/perfil.svg";
import "./navigation.css"; 

function ListItem({ icon, text, onClick, isSelected }) {
  return (
    <li
      className={`list ${isSelected ? "active" : ""}`} // Usando a classe 'active' se o item estiver selecionado
      data-list-item={text}
      onClick={onClick}
    >
      <a href="#">
        <span className="icon">
          <img src={icon} alt={text} />
        </span>
      </a>
    </li>
  );
}

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path); // Navega para a rota especificada
  };

  // Mapeia as rotas para os ícones e textos
  const routes = [
    { path: "/home", icon: homeIcon, text: "Home" },
    { path: "/calendario", icon: calendarIcon, text: "Calendário" },
    { path: "/emocao", icon: smileIcon, text: "Emoji" },
    { path: "/estatisticas", icon: chartIcon, text: "Estatísticas" },
    { path: "/perfil", icon: userIcon, text: "Perfil" },
  ];

  return (
    <div className="navigation">
      <ul>
        {routes.map(({ path, icon, text }) => (
          <ListItem
            key={text}
            icon={icon}
            text={text}
            onClick={() => handleClick(path)} // Passa a rota para o handleClick
            isSelected={location.pathname === path} // Verifica se a rota atual é a mesma do item
          />
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}