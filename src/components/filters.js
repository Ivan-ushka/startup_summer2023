import React from 'react';
import "../assets/css/filters.css"
import {Select} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {IconChevronDown} from '@tabler/icons-react';
import NumInp from "./numInp";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../asyncActions/data";
import {
    selectLower,
    selectUpper,
    setLower,
    setUpper,
    setCatalogues, reset, selectCataloguesToSearch, selectListCatalogues,
} from "../state/filtersSlice";

function Filters(props) {
    const dispatch = useDispatch()
    const getJob= e => dispatch(fetchData(e))
    const lower = useSelector(selectLower)
    const upper = useSelector(selectUpper)

    const catalogues = useSelector(selectListCatalogues)
    const chosenCatalogue = useSelector(selectCataloguesToSearch)

    const resetOnClick = () => dispatch(reset())
    const lowerOnClick = e => dispatch(setLower(e))
    const upperOnClick = e => dispatch(setUpper(e));
    const cataloguesOnClick = e => dispatch(setCatalogues(e))

    return (
        <div className="wrap">
            <div className="filters">
                <div className="container">
                    <div className="filters-header">
                        <p>Фильтры</p>
                        <div className="left" onClick={e=>{resetOnClick(e);getJob()}}>
                            <h2>Сбросить всё</h2>
                            <FontAwesomeIcon icon={faXmark} color="#ACADB9"/>
                        </div>
                    </div>
                    <div className="filters-main">
                        <Select className="sector"
                                label="Отрасль"
                                size="md"
                                placeholder="Выберите отрасль"
                                data={catalogues}
                                searchable
                                rightSection={<IconChevronDown size="1rem" color="gray"/>}
                                styles={{rightSection: {pointerEvents: 'none'}}}
                                onChange={cataloguesOnClick}
                                value={chosenCatalogue}
                        />
                        <label className="numb-inp-label" htmlFor="numb-inp">Оклад</label>
                        <NumInp id="numb-inp" className="numb-input" value={lower} setValue={lowerOnClick}/>
                        <NumInp className="numb-input" value={upper} setValue={upperOnClick}/>
                        <button className="filters-btn" onClick={(e) => getJob(e)}>Применить</button>

                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Filters;
