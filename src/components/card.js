import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faCircle} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/card.css"
import {selectOutData} from "../state/outSlice";
import {useSelector} from "react-redux";

function Card(props) {
    const data = useSelector(selectOutData)
    return (
        <div className="card">
            <h1 className="name">{data[props.numb].profession}</h1>
            <p className="salary">3/п от {data[props.numb].payment_from} rub<span className="dot"><FontAwesomeIcon icon={faCircle} color="gray" width="5px" height="5px"/></span>{data[props.numb].type_of_work.title} </p>
            <p className="location"><span className='loc'><FontAwesomeIcon icon={faLocationDot} color="gray"/></span>{data[props.numb].town.title} </p>
        </div>
    );
}

export default Card;