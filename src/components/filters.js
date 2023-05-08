import React from 'react';
import "../assets/css/filters.css"
import {NumberInput, MultiSelect} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {IconChevronDown} from '@tabler/icons-react';
import NumberInputCustom from "./numberInputCustom";
import {useDispatch, useSelector} from "react-redux";
import {selectListCatalogues, updateData} from "../state/outSlice";
import {fetchData} from "../asyncActions/data";
import {selectNameJob} from "../state/inpNameJobSlice";
import {selectLower, selectSector, selectUpper, setLower, setSector, setUpper} from "../state/filtersSlice";


function Filters(props) {
    const listCatalogues = useSelector(selectListCatalogues)
    const dispatch = useDispatch()
    const search1 = e => dispatch(fetchData(e))


    const sector = useSelector(selectSector)
    const lower = useSelector(selectLower)
    const upper = useSelector(selectUpper)

    const loc = e => dispatch(setLower(e))
    const uoc = e => dispatch(setUpper(e));
    const soc = e => dispatch(setSector(e))

    return (
        <div className="wrap">
            <div className="filters">
                <div className="container">
                    <div className="filters-header">
                        <p>Фильтры</p>
                        <div className="left" onClick={props.roc}>
                            <h2>Сбросить всё</h2>
                            <FontAwesomeIcon icon={faXmark} color="#ACADB9"/>
                        </div>
                    </div>
                    <div className="filters-main">
                        <MultiSelect className="sector"
                                     label="Отрасль"
                                     size="md"
                                     placeholder="Выберите отрасль"
                                     data={ ['title']}
                                     searchable
                                     nothingFound="Nothing found"
                                     rightSection={<IconChevronDown size="1rem" color="gray"/>}
                                     styles={{rightSection: {pointerEvents: 'none'}}}
                        />

                        <NumberInputCustom className="numb-input" value={lower} setValue={loc}/>
                        <NumberInputCustom className="numb-input" value={upper} setValue={uoc}/>


                        <button className="filters-btn" onClick={(e) => search1(e)}>Применить</button>
                </div>
            </div>
        </div>
</div>
)
    ;
}

export default Filters;