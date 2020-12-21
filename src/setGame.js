import React from "react"

export default class SetGame extends React.Component{
    render(){
        return(
            <div className="setgame">
                <div onClick={() => this.props.onClick()}>
                    Start game
                </div>
            </div>
        )
    }
}