import React from "react";
import { Link } from "react-router-dom"; // Importando o Link
import "./index.css";
import Lapis from "../../assets/imgs/lapis.svg";

function perfil() {
  return (
    <div className="perfil-container">
        <div className="header"> 
            <Link to="/edit-profile"> 
                <button className="edit-button">
                    <img src= {Lapis}  />  
                </button> 
            </Link> 
        </div>
        <div className="perfil-box">
            
        </div>
    </div>
  );
}

export default perfil;