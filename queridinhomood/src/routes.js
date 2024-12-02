import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Cadastro from "./pages/cadastro/index";
import EsqueceSenha from "./pages/esqueceSenha";
import Perfil from "./pages/perfil";
import Emocao from "./pages/emoção";
import Home from "./pages/inicial";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/emocao" element={<Emocao/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueceSenha" element={<EsqueceSenha />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;