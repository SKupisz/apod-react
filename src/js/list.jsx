import React from "react";
import JsxParser from "react-jsx-parser";

import apod from "../img/apod.png";

import Row from "./subcomponents/row.jsx";
import MainNav from "./subcomponents/mainNav.jsx";

export default class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.base = require("../data/main.json");
        this.loadAllDays = this.loadAllDays.bind(this);
        this.datesList = [];
    }
    loadAllDays(){
        let keyTable = [];
        for(let k in this.base){
            keyTable.push(k);
        }
        this.datesList = keyTable.map((key)=>
            <Row date = {key} linkTo = {"/dailyPicture/"+key} linkContent = {this.base[key].title}/>
        );
    }
    render(){
        this.loadAllDays();
        return(
        <section className="main-content">
        <header className="welcome-header">
            <img src = {apod} className = "nasa-logo"/>
            Astronomy Picture of the Day Archive
        </header>
            <MainNav/>
            <div className="date-info">
                This archive list links to previous daily APOD pages from the current date through January 1, 2015.
            An archive of all existing APOD pages (current date through June 16, 1995) can be found here: APOD Full Archive.
            </div>
            <section className="dates-info">
                {this.datesList}
            </section>
        </section>);
    }
}