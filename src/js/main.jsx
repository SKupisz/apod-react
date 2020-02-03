import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Particles} from "react-particles-js";

import MainContent from "./list.jsx";
import DailyPicture from "./dailyPicture.jsx";

import "../css/main.scss";

export default class Main extends React.Component{
    state = {
        date: new Date()
    }
    
    onChange = date=>this.setState({date});

    render(){
        return(
            <Router>
                <Route exact path = "/" component = {MainContent}/>
                <Route path = "/dailyPicture" component = {DailyPicture}/>
                <Particles params = {{ 
                    particles: {
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                              enable: false,
                              speed: 100,
                              size_min: 0.1,
                              size_max: 1,
                              sync: false
                            }
                          },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 600
                            }
                        },
                        line_linked: {
                            color: "#16161d"
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape:{
                            type: "circle",
                            polygon: {
                                nb_sides: 3
                            }
                        }
                    }
                }}/>
            </Router>
        );
    }
}
//<DatePicker value = {this.state.date} onChange = {this.onChange}/>