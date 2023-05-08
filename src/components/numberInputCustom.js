import React from 'react';
import "../assets/css/numberInputCustom.css"
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function NumberInputCustom({value, setValue}) {
    function valid(e){
        setValue(Number(e.target.value));
        e.target.value = value
    }

    return (
        <div className="number-input">
            <input className="inp"
                   type="number"
                   onChange={e => valid(e)}
                   value={value.toString()}
            />

            <div className="btns-wrap">
                <button onClick={()=>setValue(value + 100)}><FontAwesomeIcon icon={faAngleUp} height="5px" width="10px" color="gray"/></button>
                <button onClick={()=>setValue(value > 0 ? value - 100 : value)}><FontAwesomeIcon icon={faAngleDown}  height="5px" width="10px" color="gray"/></button>
            </div>
        </div>
    );
}

export default NumberInputCustom;