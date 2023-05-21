import React, {useEffect} from 'react';
import "../assets/css/searchVacancy.css"
import VacancyCard from "./vacancyCard";

import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../asyncActions/data";
import {selectNameJob, setNameJob} from "../state/inpNameJobSlice";
import {selectIsEmpty, selectListVacancies, selectPage, selectTotal, setPage} from "../state/listVacanciesSlice";

import {Pagination} from '@mantine/core';
import {Loader} from "@mantine/core";
import {ActionIcon} from "@mantine/core";
import {IconSearch} from '@tabler/icons-react';
import {Redirect, useNavigate} from "react-router-dom";


function SearchVacancy() {
    const dispatch = useDispatch()

    const searchJob = e => dispatch(setNameJob(e))
    const setActivePage = e =>dispatch(setPage(e))
    const getStartJob = e => dispatch(fetchData(e))
    const getSearchName = e => dispatch(setNameJob(e))

    const search = useSelector(selectNameJob)
    const total = useSelector(selectTotal)
    const data = useSelector(selectListVacancies)

    const activePage  = useSelector(selectPage)
    const result = useSelector(selectIsEmpty)


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/emptypage`;
        navigate(path);
    }

    useEffect(()=>{
        getSearchName('')
        if(!result) routeChange()
    },[result])


    return (
        <div className="search-vacancy">
            <div className="input-folder">
                <ActionIcon variant="transparent"><IconSearch size="1rem"/></ActionIcon>
                <input type="text"
                       placeholder="Введите название вакансии"
                       value={search.toString()}
                       onChange={e => searchJob(e.target.value)}
                />
                <button className="inp-search-btn" onClick={() => dispatch(fetchData())}>Поиск</button>
            </div>
            {(!!data) ?
                <>
                    {
                        data.map((v, i) => <VacancyCard className="card" val={v} key={i}/>)
                    }
                    <div className="pag-wrap">
                        <Pagination value={Number(activePage)}
                                    onChange={e=>{setActivePage(e); getStartJob()}}
                                    total={Math.min(Math.ceil(total / 4), 125)}
                        />
                    </div>
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