import React from "react";

export default class Reset extends React.Component{
    render(){
        return(
        <button className="Button" type="button" onClick={() => this.props.ResetOnClick()}> Reset </button>
        )
    }
}