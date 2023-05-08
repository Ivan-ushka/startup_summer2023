import React, {useEffect} from 'react';
import Filters from "../components/filters";
import TopBar from "../layouts/topBar";
import "../assets/css/searchJob.css"
import SearchVacancy from "../components/searchVacancy";
import { useSelector, useDispatch } from 'react-redux'
import {
    setSector,
    setUpper,
    setLower,
    selectUpper,
    selectLower,
    selectSector,
    reset,
} from '../state/filtersSlice'

import {
    setNameJob,
    selectNameJob,
} from '../state/inpNameJobSlice'
import {fetchData} from "../asyncActions/data";
import {updateData} from "../state/outSlice";


function SearchJob(props) {
    const dispatch = useDispatch()
    const search1 = e => dispatch(fetchData(e))

    useEffect( ()=>{
       search1()
        },[]
    )


    const search = useSelector(selectNameJob)
    const roc = () => dispatch(reset())
    const searchJob = x => dispatch(setNameJob(x))

    return (
        <div className="search-job">
            <TopBar />
            <main className="search-job-main">
                <Filters  roc={roc} />
                <SearchVacancy searchJob={searchJob} search={search}/>
            </main>
        </div>
    );
}
//pull
export default SearchJob;