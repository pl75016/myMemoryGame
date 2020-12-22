import React from "react"

export default class SetGame1 extends React.Component{
    render(){
        return(
            <>
                <div className="logo">
                    Memory Game
                </div>
            <div className="setgame">
                <div>
                    Payer Name :
                    <input className="input" id="payer1"/>
                    <div className="separator"/>
                <div className="sesparator"/>
                <select className="choose" id="difficulty">
                    <option value="">Please choose a difficulty</option>
                    <option value="1">level 1</option>
                    <option value="2">level 2</option>
                    <option value="3">level 3</option>
                </select>
                <div className="separator"/>
                <button className="startgame" onClick={() => this.props.onClick()}>
                    Start Game
                </button>
                </div>
            </div>
            </>
        )
    }
}