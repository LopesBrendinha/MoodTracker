// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes"; // Importa o componente de rotas

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);