import React, {useEffect, useState} from 'react';
import Filters from "../../components/filters";
import TopBar from "../../layouts/topBar";
import "./searchVacancies.css"
import SearchVacancy from "../../components/searchVacancy";
import {useDispatch} from 'react-redux'
import {fetchData} from "../../asyncActions/fetchVacanciesList";
import {fetchCatalogues} from "../../asyncActions/fetchCataloguesList";
import {fetchAuthorization} from "../../asyncActions/fetchAuthorization";

function SearchVacancies(props) {
    const dispatch = useDispatch()
    const getStartJob = e => dispatch(fetchData(e))
    const getListCatalogues = e => dispatch(fetchCatalogues(e))


    useEffect(() => {
        const fetchData = async () => {
            await fetchAuthorization();
            await getListCatalogues();
            await getStartJob();
        };
        localStorage.setItem('favourites', '[]')
        fetchData();
    }, []);


    return (
        <div className="search-job">
            <TopBar/>
            <main className="search-job-main">
                <Filters/>
                <SearchVacancy/>
            </main>
        </div>
    );
}

export default SearchVacancies;