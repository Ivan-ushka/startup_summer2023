import React from 'react';
import "./topBar.css"
import logo from "../assets/images/Union.svg"
import {Link} from "react-router-dom";

function TopBar(props) {
    return (
        <div className="header">
            <div className="logo">
                <a href="/"><img src={logo} alt="logo"  width={30} height={30}/></a>
                <a href="/" className="logo-text">Jobored</a>
            </div>
            <div className="navigation">
                <a href="/" className="search-page__link">Поиск вакансий</a>
                <Link  className="search-page__favorites" to="/favourites">Избранное </Link>
            </div>
        </div>
    );
}

export default TopBar;