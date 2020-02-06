import React from "react";
import ReactHtmlParser, {processNode,convertNodeToElement,htmlparser2} from "react-html-parser";
import {Link} from "react-router-dom";

function getAllSlashes(dateToCheck){
    let counter = 0;
    for(let i = 0 ; i < dateToCheck.length; i++){
        if(dateToCheck.charAt(i) == "/"){
            counter++;
        }
    }
    return counter;
}
function getTodaysDate(format){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let anwser = yyyy+format+mm+format+dd;
    return anwser;
}

export default class DailyPicture extends React.Component{
    state = {
        nasaData: {}
    };
    constructor(props){
        super(props);
        this.loadBasicData = this.loadBasicData.bind(this);
        this.getNasaData = this.getNasaData.bind(this);
        
        this.base = require("../data/main.json");
        this.exists = 0;
        this.dayForSearch = "";
        this.dailyData = "";
        this.nasaData = [];
    }
    getNasaData(){
        /*let forGetNews = getTodaysDate("-");
        fetch("https://randomuser.me/api/?format=json&results=10")
        .then(res => res.json())
        .then(json => this.setState({ nasaData: json.results }));
        console.log(this.state.nasaData);*/
    }
    loadBasicData(){
        let thisDate = window.location.pathname;
        thisDate = thisDate.substring(14);
        if(thisDate.length < 10){
            thisDate = getTodaysDate("/");
            window.location.pathname = "/dailyPicture/"+thisDate;
        }
        else if(getAllSlashes(thisDate) != 2){
            thisDate = getTodaysDate("/");
        }
        else{
            if(this.base[thisDate]){
                this.dayForSearch = thisDate;
                this.exists = 1;
                this.dailyData = this.base[thisDate];
            }
        }
    }
    render(){
        this.loadBasicData();
        this.getNasaData();
        if(this.exists == 1){
            let base = this.dailyData;
            let imageComponent = "";
            for(let i = 0 ; i < base.credit.subjects.length; i++){
                if(i < base.credit.links.length){
                    imageComponent+="<a href = '"+base.credit.links[i]+"'>"+base.credit.subjects[i]+"</a>";
                }
                else{
                    imageComponent+=base.credit.subjects[i];
                }
                
                if(i != base.credit.subjects.length -1){
                    imageComponent+=", ";
                }
            }
            if(base.linkType == "iframe"){
                return(
                    <section className="dailyPicture-content main-content">
                        <header className="welcome-header">Astronomy Picture of the Day</header>
                        <div className="date-info"><Link to = "/">Discover the cosmos!</Link> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</div>
                        <section className="media-section">
                            <header className="day-header">{this.dayForSearch}</header>
                            <iframe src={base.link} width = "960px" height = "540px" className = "media-container iframe-container"></iframe>
                            <section className="name">
                                <header className="mediaName-header">{base.title}</header>
                                <div className="credits">Image credits: {ReactHtmlParser(imageComponent)}</div>
                            </section>
                        </section>
                        <section className="explanation-section">
                            {ReactHtmlParser(base.explanation)}
                        </section>
                        <section className="about">
                            <div className="madeBy">Authors & editors: <a href = "https://www.mtu.edu/physics/department/faculty/nemiroff/">Robert J. nemiroff</a> <a href = "https://www.mtu.edu/physics/">(MTU)</a> & <a href = "https://apod.nasa.gov/htmltest/jbonnell/www/bonnell.html">Jerry T. Bonnell</a> <a href = "http://www.astro.umd.edu/">(UMCP)</a></div>
                            <div className="webAuthor">Web designed by Simon G. Kupisz, 2020</div>
                            <div className="nasa-officialContainer">
                                <label className = "nasa-offBeginning">NASA Official: </label>
                                Phillip Newman <a href = "https://apod.nasa.gov/apod/lib/about_apod.html#srapply">Specific rights apply</a>.
                                <div className="web-privacy"><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">NASA Web Privacy Policy and Important Notices</a></div>
                                <div className="service-of">
                                    A service of: <a href = "https://science.gsfc.nasa.gov/astrophysics/">ASD</a> at <a href = "www.nasa.gov">NASA</a> / <a href = "https://www.nasa.gov/goddard">GSFC</a><br></br>& <a href = "https://www.mtu.edu/">Michigan Tech. U.</a>
                                    </div>
                            </div>
                        </section>
                    </section>
                );     
            }
            else{
                return(
                    <section className="dailyPicture-content main-content">
                    <header className="welcome-header">Astronomy Picture of the Day</header>
                    <div className="date-info"><Link to = "/">Discover the cosmos!</Link> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</div>
                    <section className="media-section">
                        <header className="day-header">{this.dayForSearch}</header>
                        {base.link ? <img src={base.link} className = "image-container"/> : "Loading..."}
                        <section className="name">
                            <header className="mediaName-header">{base.title}</header>
                            <div className="credits">Image credits: {ReactHtmlParser(imageComponent)}</div>
                        </section>
                    </section>
                    <section className="explanation-section">
                        {ReactHtmlParser(base.explanation)}
                    </section>
                    <section className="about">
                        <div className="madeBy">Authors & editors: <a href = "https://www.mtu.edu/physics/department/faculty/nemiroff/">Robert J. nemiroff</a> <a href = "https://www.mtu.edu/physics/">(MTU)</a> & <a href = "https://apod.nasa.gov/htmltest/jbonnell/www/bonnell.html">Jerry T. Bonnell</a> <a href = "http://www.astro.umd.edu/">(UMCP)</a></div>
                        <div className="webAuthor">Web designed by Simon G. Kupisz, 2020</div>
                        <div className="nasa-officialContainer">
                            <label className = "nasa-offBeginning">NASA Official: </label>
                            Phillip Newman <a href = "https://apod.nasa.gov/apod/lib/about_apod.html#srapply">Specific rights apply</a>.
                            <div className="web-privacy"><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">NASA Web Privacy Policy and Important Notices</a></div>
                            <div className="service-of">
                                A service of: <a href = "https://science.gsfc.nasa.gov/astrophysics/">ASD</a> at <a href = "www.nasa.gov">NASA</a> / <a href = "https://www.nasa.gov/goddard">GSFC</a><br></br>& <a href = "https://www.mtu.edu/">Michigan Tech. U.</a>
                                </div>
                        </div>
                    </section>
                </section>
                );
            }

        }
        else{
            return(
                <section className="dailyPicture-content main-content">
                    <header className="nodata-header">Sorry, this day is not recorded in our database</header>
                </section>
            );
        }

    }
}