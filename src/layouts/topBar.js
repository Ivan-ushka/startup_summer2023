import React from 'react';
import "../assets/css/topBar.css"
function TopBar(props) {
    return (
        <div className="header">
            <div className="logo">
                <a href="/"><img src={require("../assets/images/union.png")} alt="logo"/></a>
                <a href="/">Jobored</a>
            </div>
            <div className="navigation">
                <a href="/" className="search-page__link">Поиск вакансий</a>
                <a href="/" className="search-page__favorites">Избранное</a>
            </div>
            {}
        </div>
    );
}

export default TopBar;