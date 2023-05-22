import React from 'react';
import "../assets/css/filters.css"
import {Select} from '@mantine/core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {IconChevronDown} from '@tabler/icons-react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../asyncActions/fetchVacanciesList";
import {
    selectLower,
    selectUpper,
    setLower,
    setUpper,
    setCatalogues, reset, selectCataloguesToSearch, selectListCatalogues,
} from "../state/filtersSlice";
import NumberInputStyled from "./numberInputStyled";

function Filters(props) {
    const dispatch = useDispatch()
    const setVacancies = e => dispatch(fetchData(e))
    const lower = useSelector(selectLower)
    const upper = useSelector(selectUpper)

    const catalogues = useSelector(selectListCatalogues)
    const chosenCatalogue = useSelector(selectCataloguesToSearch)

    const resetOnClick = () => dispatch(reset())
    const lowerOnClick = e => dispatch(setLower(e))
    const upperOnClick = e => dispatch(setUpper(e));
    const cataloguesOnClick = e => dispatch(setCatalogues(e))

    return (
        <div>
            <div className="filters">
                <div className="filters-header">
                    <p>Фильтры</p>
                    <div className="left" onClick={e => {
                        resetOnClick(e);
                        setVacancies()
                    }}>
                        <h2>Сбросить всё</h2>
                        <FontAwesomeIcon icon={faXmark} color="#ACADB9"/>
                    </div>
                </div>
                <div className="filters-main">
                    <Select className="catalogues"
                            label="Отрасль"
                            size="md"
                            placeholder="Выберите отрасль"
                            data={catalogues}
                            searchable
                            rightSection={<IconChevronDown size="1.4rem" color="#ACADB9"/>}
                            styles={{rightSection: {pointerEvents: 'none'}}}
                            onChange={cataloguesOnClick}
                            value={chosenCatalogue}
                            radius="8px"
                    />
                    <div className="salary-inp">
                        <label htmlFor="numb-inp">Оклад</label>
                        <div className="numb-inp-1">
                            <NumberInputStyled value={lower} onChange={lowerOnClick}/>
                        </div>
                        <NumberInputStyled value={upper} onChange={upperOnClick}/>
                    </div>
                    <button className="filters-btn" onClick={(e) => setVacancies(e)}>Применить</button>

                </div>
            </div>
        </div>
    );
}

export default Filters;
