import React from "react";
import {Link} from "react-router-dom";

export default class MainNav extends React.Component{
    constructor(props){
        super(props);
        this.compileIt = this.compileIt.bind(this);
    }
    compileIt(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        let anwser = "/dailyPicture/"+yyyy+"/"+mm+"/"+dd;
        return anwser;
    }
    render(){
        return(
            <nav className="navigation">
                <Link to = "/"><div className="nav-item">Index</div></Link>
                <Link to = "/"><div className="nav-item">Search</div></Link>
                <Link to = {this.compileIt()}><div className="nav-item">Today's picture</div></Link>
            </nav>
        );
    }
}