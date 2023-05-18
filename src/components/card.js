import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/card.css"

import locImg from "../assets/images/loc.svg"

import starImg from "../assets/images/star.svg"
import starImgHover from "../assets/images/starHover.svg"
import starImgOnClick from "../assets/images/starImgOnClick.svg"
import {useNavigate} from "react-router-dom";

function Card({val}) {
    const {profession, payment_to, payment_from, currency, type_of_work, town} = val

    function payment() {
        if (payment_to === payment_from) return 'Зп не указана'
        else if (payment_to !== 0 && payment_from === 0) return `3/п до ${payment_to} ${currency}`
        else if (payment_to === 0 && payment_from !== 0) return `3/п от ${payment_from} ${currency}`
        else return `3/п от ${payment_from} ${currency} до ${payment_to} ${currency}`
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/vacancy`;
        navigate(path, {state: val});
    }

    const [favouriteItems, setFavouriteItems] = useState([]);


    useEffect(() => {
        if (favouriteItems.length !== 0) {
            const items = JSON.parse(localStorage.getItem('favourites'));
            if (items === null) {
                localStorage.setItem('favourites', JSON.stringify(favouriteItems));
            } else {

                if (items.some(item => JSON.stringify(item) === JSON.stringify(favouriteItems[0]))) {
                    const index = items.findIndex(e => e.id === favouriteItems[0].id);
                    if (index !== -1) {
                        items.splice(index, 1);
                    }
                    console.log(1)
                    setFavouriteItems([])
                    localStorage.setItem('favourites', JSON.stringify(items));

                } else {
                    items.push(favouriteItems[0])
                    localStorage.setItem('favourites', JSON.stringify(items));
                }
            }
        }
    }, [favouriteItems]);

    const handlingFavourites = (e) => {
        let arr = [val]
        setFavouriteItems(arr)
    }



    const currentImage = (e) => {
        let a = starImg
        let b = starImgOnClick
        if (isFavourite()) {
            return b
        } else {
            return a
        }
    }

    const isFavourite = () => {
        const items = JSON.parse(localStorage.getItem('favourites'));
        if (items === null) {
            return false
        } else {
            return items.some(item => JSON.stringify(item) === JSON.stringify(val))
        }
    }

    function k(e){
        return e.target.src = starImgOnClick
    }

    const [flag, setFlag] = useState(true);

    const handleClick = () => {
        setFlag(!flag);
    };

    return (
        <div className="card">
            <div className="favourites-star">
                <img
                    src={flag ? starImgOnClick : starImg}
                    alt="star"
                    onMouseOut={e => (e.currentTarget.src === starImg ? e.currentTarget.src = starImgHover:e.currentTarget.src = starImg  )}
                    onMouseOver={e => (e.currentTarget.src === starImg ? e.currentTarget.src = starImgHover :e.currentTarget.src = starImg  )}
                    onClick={e => {handlingFavourites(); handleClick()}}
                />
            </div>
            <h1 className="profession" onClick={() => routeChange()}>{profession}</h1>
            <p className="salary">
                <span>{payment()}</span>
                <span className="dot">
                    <FontAwesomeIcon icon={faCircle} color="gray" width="5px" height="5px"/>
                </span>
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

export default Card;