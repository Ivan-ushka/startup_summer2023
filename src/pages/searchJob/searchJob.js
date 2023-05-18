import React, {useEffect} from 'react';
import Filters from "../../components/filters";
import TopBar from "../../layouts/topBar";
import "./searchJob.css"
import SearchVacancy from "../../components/searchVacancy";
import { useDispatch } from 'react-redux'
import {fetchCatalogues, fetchData} from "../../asyncActions/data";


function SearchJob(props) {
    const dispatch = useDispatch()
    const getStartJob = e => dispatch(fetchData(e))
    const getListCatalogues = e => dispatch(fetchCatalogues(e))

    useEffect(()=>{
        getStartJob();
        getListCatalogues();
    })

    return (
        <div className="search-job">
            <TopBar />
            <main className="search-job-main">
                <Filters />
                <SearchVacancy />
            </main>
        </div>
    );
}

export default SearchJob;