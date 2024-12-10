import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/login/index";
import Cadastro from "./pages/cadastro/index";
import EsqueceSenha from "./pages/esqueceSenha";
import Perfil from "./pages/perfil";
import Emocao from "./pages/emoção";
import Home from "./pages/inicial";
import Calendario from "./pages/calendario"; 
import Estatistica from "./pages/estatisticas";


function RoutesApp() {
    const location = useLocation();

    return (


                <Routes location={location}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/emocao" element={<Emocao />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/esqueceSenha" element={<EsqueceSenha />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/estatisticas" element={<Estatistica />} />
                </Routes>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <RoutesApp />
        </BrowserRouter>
    );
}