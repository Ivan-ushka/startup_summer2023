import React from 'react';
import "../assets/css/searchVacancy.css"
import VacancyCard from "./vacancyCard";

import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../asyncActions/fetchVacanciesList";

import {selectListVacancies, selectPage, selectTotal, setPage} from "../state/listVacanciesSlice";

import {Pagination} from '@mantine/core';
import {Loader} from "@mantine/core";
import {ActionIcon} from "@mantine/core";
import {IconSearch} from '@tabler/icons-react';

import {selectNameVacancy, setNameVacancy} from "../state/nameVacancySlice";
import searchingPersonImg from "../assets/images/searchingPerson.svg";


function SearchVacancy() {
    const dispatch = useDispatch()

    const setNameVac = e => dispatch(setNameVacancy(e))
    const setActivePage = e => dispatch(setPage(e))
    const getStartJob = e => dispatch(fetchData(e))

    const search = useSelector(selectNameVacancy)
    const total = useSelector(selectTotal)
    const data = useSelector(selectListVacancies)

    const activePage = useSelector(selectPage)

    return (
        <div className="search-vacancy">
            <div className="input-folder">
                <ActionIcon variant="transparent"><IconSearch size="1rem"/></ActionIcon>
                <input data-elem="search-input"
                       type="text"
                       placeholder="Введите название вакансии"
                       value={search.toString()}
                       onChange={e => setNameVac(e.target.value)}
                />
                <button data-elem="search-button" className="inp-search-btn" onClick={() => dispatch(fetchData())}>Поиск</button>
            </div>
            {(!!data) ?
                <>
                    {(data.length !== 0) ?
                        <>
                            {
                                data.map((v, i) => <VacancyCard className="card" val={v} key={i}/>)
                            }
                            <div className="pag-wrap">
                                <Pagination value={Number(activePage)}
                                            onChange={e => {
                                                setActivePage(e);
                                                getStartJob()
                                            }}
                                            total={Math.min(Math.ceil(total / 4), 125)}
                                />
                            </div>
                        </>
                        :
                        <div className="empty-main">
                            <img src={searchingPersonImg} alt="searchingPersonImg"/>
                            <p>Упс, здесь еще ничего нет!</p>
                        </div>
                    }
                </>
                : (
                    <div className="loader">
                        <Loader size={30}/>
                    </div>)
            }
        </div>
    );
}

export default SearchVacancy;