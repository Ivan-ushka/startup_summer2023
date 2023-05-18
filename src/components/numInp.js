import React from 'react';
import "../assets/css/numberInputCustom.css"
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function NumInp({value, setValue}) {
    const valid = e => {
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
                <button onClick={()=>setValue(value + 1000)}><FontAwesomeIcon icon={faAngleUp} height="5px" width="10px" color="gray"/></button>
                <button onClick={()=>setValue(value > 0 ? value - 1000 : value)}><FontAwesomeIcon icon={faAngleDown}  height="5px" width="10px" color="gray"/></button>
            </div>
        </div>
    );
}

export default NumInp;