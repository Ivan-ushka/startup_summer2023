import React, {useState} from 'react';
import "../assets/css/searchVacancy.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../asyncActions/data";
import Card from "./card";
import {Pagination} from '@mantine/core';
import {selectOutData} from "../state/outSlice";
import {Loader} from "@mantine/core";

function SearchVacancy(props) {
    const dispatch = useDispatch()
    const data = useSelector(selectOutData)
    const [activePage, setPage] = useState(1);
    const numbers = [0, 1, 2, 3];
    return (
        <div className="search-vacancy">
            <div className="">
                <div className="">
                    <button onClick={() => dispatch(fetchData())}>Search</button>
                </div>
            </div>
            <div className="input-folder">
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#ACADB9"/>
                <input type="text"
                       placeholder="Введите название вакансии"
                       value={props.search}
                       onChange={e => props.searchJob(e.target.value)}
                />
                <button>Поиск</button>
            </div>
            {!!data ?
                numbers.map(i =>
                    <Card numb={i + activePage - 1} key={i + activePage - 1}/>
                ) : (
                    <div className="loader">
                        <Loader size={100}/>
                    </div>)
            }
            <div className="pag-wrap">
                <Pagination
                            value={activePage}
                            onChange={setPage}

                />
            </div>
        </div>

    );
}

export default SearchVacancy;