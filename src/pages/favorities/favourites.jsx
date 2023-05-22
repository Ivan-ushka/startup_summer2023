import React, {useEffect, useState} from 'react';
import TopBar from "../../layouts/topBar";
import "./favourites.css"
import VacancyCard from "../../components/vacancyCard";
import {Pagination} from "@mantine/core";
import {useNavigate} from "react-router-dom";


function Favourites(props) {
    const [activePage, setActivePage] = useState(1)

    const [favourites, setFavourites] = useState(() => {
        const localData = localStorage.getItem('favourites');
        return localData !== null ? JSON.parse(localData) : false;
    });

    function handleData() {
        const localData = localStorage.getItem('favourites');
        const newData = localData !== null ? JSON.parse(localData) : false;

        if (newData.toString() !== favourites.toString()) setFavourites(newData);
    }

    useEffect(() => {
        if ((activePage - 1) * 4 === favourites.length) setActivePage(activePage - 1)
    }, [activePage, favourites])

    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/emptypage`;
        navigate(path);
    }

    useEffect(()=>{
        if(!favourites.length) routeChange();
    },[favourites])

    return (
        <div className="favourites" >
            <TopBar/>
            <main className="favourites-main" onClick={() => {handleData(); console.log(activePage)}}>
                {
                 !!favourites && favourites.map((v, i) => {
                        return (i < activePage * 4 && i >= (activePage - 1) * 4) &&
                            <VacancyCard className="card" val={v} key={v.id}/>
                    })
                }
                <div className="pag-wrap">
                    <Pagination value={Number(activePage)}
                                onChange={e => {setActivePage(e);}}
                                total={Math.ceil(favourites.length / 4)}
                    />
                </div>
            </main>
        </div>
    );
}

export default Favourites;