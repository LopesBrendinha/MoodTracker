import React from "react";
import "./index.css";

function HomeScreen() {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="greeting-info">
                    <h1 className="greeting-title">Bom dia,</h1>
                    <h1 className="greeting-title">Lucas!</h1>
                    <p className="greeting-subtitle">Pronto para explorar suas emoções?</p>
                </div>
            </header>
        </div>
    );
}

export default HomeScreen;