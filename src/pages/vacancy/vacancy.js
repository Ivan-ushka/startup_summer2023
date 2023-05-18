import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from "../../components/card";
import TopBar from "../../layouts/topBar";
import "./vacancy.css"

function Vacancy(props) {
    const location = useLocation();
    return (
        <div className="vacancy" onClick={() => console.log(location.state)}>
            <TopBar/>
            <main className="main">
                 <Card className="card" val={location.state} key={location.state.id}/>
                 <div className="description-wrap">
                     <div dangerouslySetInnerHTML={{__html: location.state.vacancyRichText}} className="description"/>
                 </div>
            </main>
        </div>
    );
}

export default Vacancy;