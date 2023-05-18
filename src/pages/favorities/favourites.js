import React, {useEffect, useRef, useState} from 'react';
import TopBar from "../../layouts/topBar";
import "./favourites.css"
import Card from "../../components/card";
import {Pagination} from "@mantine/core";

function Favourites(props) {

    // const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')));
    //
    // useEffect(() => {
    //     console.log('a')
    //     const items = JSON.parse(localStorage.getItem('favourites'))
    //     console.log("items: ", JSON.parse(localStorage.getItem('favourites')))
    //     if (favourites.length !== items.length ) {
    //         if(items.length !== 0)
    //            setFavourites(items)
    //     }
    //
    // },[favourites]);
    const [activePage, setActivePage] = useState(1)
    const numberCards = [0,1,2,3]

    const [favourites, setFavourites] = useState(() => {
        const localData = localStorage.getItem('favourites');
        return localData !== null ? JSON.parse(localData) : false;
    });

    function handleData() {
        setTimeout(() => {
            const localData = localStorage.getItem('favourites');
            const newIsLoggedIn = localData !== null ? JSON.parse(localData) : false;

            if (newIsLoggedIn !== favourites) {
                console.log('a')
                console.log(newIsLoggedIn)
                setFavourites(newIsLoggedIn);
            }
        }, 100);
    }

    return (
        <div className="favourites">
            {/*<div onClick={()=>console.log(favourites)}>f</div>*/}
            <TopBar/>
            <main className="favourites-main" onClick={()=>handleData()}>
                {
                    favourites.map((v, i) =>{
                        return i < activePage * 4 && i >= (activePage-1)*4 &&
                            <Card className="card" val={v} key={i}/>

                    })
                }
                <div className="pag-wrap">
                    <Pagination value={Number(activePage)}
                                onChange={e=>{setActivePage(e );}}
                                total={Math.ceil(favourites.length / 4)}
                    />
                </div>
            </main>
        </div>
    );
}

export default Favourites;