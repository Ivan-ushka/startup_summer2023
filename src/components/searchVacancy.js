import React from 'react';
import "../assets/css/searchVacancy.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../asyncActions/data";
import Card from "./card";
import {Pagination} from '@mantine/core';
import {selectOutData, selectPage, selectTotal, setPage} from "../state/outSlice";
import {Loader} from "@mantine/core";
import {selectNameJob, setNameJob} from "../state/inpNameJobSlice";
import {ActionIcon} from "@mantine/core";
import {IconSearch} from '@tabler/icons-react';


function SearchVacancy() {
    const dispatch = useDispatch()
    const search = useSelector(selectNameJob)
    const total = useSelector(selectTotal)
    const searchJob = e => dispatch(setNameJob(e))
    const setActivePage = e =>dispatch(setPage(e))
    const getStartJob = e => dispatch(fetchData(e))
    const data = useSelector(selectOutData)
    const activePage  = useSelector(selectPage)

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
                        data.map((v, i) => <Card className="card" val={v} key={i}/>)
                    }
                    <div className="pag-wrap">
                        <Pagination value={Number(activePage)}
                                    onChange={e=>{setActivePage(e); getStartJob()}}
                                    total={Math.min(Math.ceil(total / 4), 250)}
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