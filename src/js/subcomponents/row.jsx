import React from "react";

export default class Row extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <label className="date">{this.props.date}: </label>
                <a href = {this.props.linkTo}>{this.props.linkContent}</a>
            </div>
        );
    }
}