import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot
import Routes from "./routes"; // Importa o seu componente de rotas

const container = document.getElementById("root"); // Seleciona o elemento root
const root = createRoot(container); // Cria a raiz

root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);