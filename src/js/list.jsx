import React from "react";

import apod from "../img/apod.png";

import Row from "./subcomponents/row.jsx";
import MainNav from "./subcomponents/mainNav.jsx";

export default class MainContent extends React.Component{
    render(){
        return(
        <section className="main-content">
        <header className="welcome-header">
            <img src = {apod} class = "nasa-logo"/>
            Astronomy Picture of the Day Archive
        </header>
            <MainNav/>
            <div className="date-info">
                This archive list links to previous daily APOD pages from the current date through January 1, 2015.
            An archive of all existing APOD pages (current date through June 16, 1995) can be found here: APOD Full Archive.
            </div>
            <section className="dates-info">
                <Row date = {"2020 February 03"} linkTo = {"/dailyPicture/2020/02/03"} linkContent = {"Solar Granules at Record High Resolution"}/>
                <Row date = {"2020 February 02"} linkTo = {"/dailyPicture/2020/02/02"} linkContent = {"Zeta Oph: Runaway Star"}/>
            </section>
        </section>);
    }
}