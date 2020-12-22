import React from "react"

export default class Many extends React.Component{
    render(){
        return(
            <>
            <div className="logo">
                Memory Game
            </div>
                <div className="many">
                    How many player ?
                </div>
                <div className="separator"></div>
                <div className="button">
                <button className="input1" onClick={() => this.props.onClick1()}>
                    1
                </button>
                <button className="input1" onClick={() => this.props.onClick2()}>
                    2
                </button>
                </div>
            </>
        )
    }
}