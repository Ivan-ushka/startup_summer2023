import React from 'react';
import "../assets/css/vacancyCard.css"

import locImg from "../assets/images/loc.svg"

import starImg from "../assets/images/star.svg"
import starImgOnClick from "../assets/images/starImgOnClick.svg"
import {Link} from "react-router-dom";

function VacancyCard({val}) {
    const {profession, payment_to, payment_from, currency, type_of_work, town} = val

    const formatPayment = () => {
        if (payment_to === payment_from) return 'Зп не указана'
        else if (payment_to !== 0 && payment_from === 0) return `3/п до ${payment_to} ${currency}`
        else if (payment_to === 0 && payment_from !== 0) return `3/п от ${payment_from} ${currency}`
        else return `3/п от ${payment_from} ${currency} до ${payment_to} ${currency}`
    }

    const deleteItemFromLocalstorage = (items) => {
        const index = items.findIndex(e => e.id === val.id);
        if (index !== -1) items.splice(index, 1);
        localStorage.setItem('favourites', JSON.stringify(items));
    }

    const addItemToLocalStorage = (items) => {
        items.push(val)
        localStorage.setItem('favourites', JSON.stringify(items));
    }

    const handleFavourites = (e) => {

        const items = JSON.parse(localStorage.getItem('favourites'));
        if (items.some(item => item.id === val.id)) deleteItemFromLocalstorage(items)
        else addItemToLocalStorage(items)
        isFavouriteOnClick(e)

    }

    const isFavourite = (e) => {
        const items = JSON.parse(localStorage.getItem('favourites'));
        if (items.some(item => item.id === val.id)) return starImgOnClick
        else return starImg
    }

    const isFavouriteOnClick = (e) => {
        const items = JSON.parse(localStorage.getItem('favourites'));
        if (items.some(item => item.id === val.id)) e.target.src = starImgOnClick
        else e.target.src = starImg
    }

    return (
        <div className="card" data-elem={"vacancy-" + val.id}>
            <div className="favourites-star">
                <img data-elem={"vacancy-"+ val.id + "-shortlist-button"} src={isFavourite()} alt="star" onClick={(e) => handleFavourites(e)}/>
            </div>
            <Link to="/vacancy/val.id" state={val} className="profession">{profession}</Link>
            <p className="salary">
                <span>{formatPayment()}</span>
                <span className="dot">•</span>
                {type_of_work.title}
            </p>
            <p className="location">
                <span className='loc'>
                    <img src={locImg} alt="location"/>
                </span>
                {town.title}
            </p>
        </div>
    );
}

export default VacancyCard;