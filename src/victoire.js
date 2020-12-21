import React from "react"

export default class Victoire extends React.Component{
    render(){
        return(
            <div className="victoire">
                <div>
                    C'est {this.props.score1>this.props.score2 ? this.props.name1 : ""} qui gagne avec un score de {this.props.score1>this.props.score2 ? this.props.score1 : this.props.score2} <br/> {this.props.score1<this.props.score2 ? this.props.name1 : this.props.name2} avait un score de {this.props.score1<this.props.score2 ? this.props.score1 : this.props.score2}
                </div>
                <button className="Button" type="button" onClick={() => window.location.reload()}> Rejouer </button>
            </div>
        )
    }
}