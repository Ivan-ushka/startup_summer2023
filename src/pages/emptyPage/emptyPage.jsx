import React from 'react';
import TopBar from "../../layouts/topBar";
import "./emptyPage.css"
import searchingPersonImg from "../../assets/images/searchingPerson.svg"
import {Link} from "react-router-dom";

function EmptyPage(props) {
    return (
        <div>
            <TopBar />
            <main className="empty-main">
                <img src={searchingPersonImg} alt="searchingPersonImg"/>
                <p>Упс, здесь еще ничего нет!</p>
                <Link className="link" to="/">Поиск Вакансий</Link>
            </main>
        </div>
    );
}

export default EmptyPage;