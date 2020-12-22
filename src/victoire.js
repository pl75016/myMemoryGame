import React from "react"

export default class Victoire extends React.Component{
    render(){
        return(
            <div className="victoire">
                <div>
                    C'est {this.props.score1>this.props.score2 ? this.props.name1 : this.props.name2} qui gagne avec un score de {this.props.score1>this.props.score2 ? this.props.score1 : this.props.score2} <br/> {this.props.score1<this.props.score2 ? this.props.name1 : this.props.name2} avait un score de {this.props.score1<this.props.score2 ? this.props.score1 : this.props.score2} 
                </div>
                <div className="tableau">
                <div className="divTable">
                <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell">&nbsp;</div>
                    <div className="divTableCell">&nbsp;{this.props.name1}</div>
                    <div className="divTableCell">&nbsp;{this.props.name2}</div>
                </div>
                {this.props.scoreTotal.map((content,index) => {
                        return(
                            <div className="divTableRow">
                                <div className="divTableCell">&nbsp;{index}</div>
                                <div className="divTableCell">&nbsp;{content.player1}</div>
                                <div className="divTableCell">&nbsp;{content.player2}</div>
                            </div>
                        )
                    })}
                </div>
                </div>
                </div>
                <button className="Button" type="button" onClick={() => this.props.rejouer()}> Rejouer </button>
            </div>
        )
    }
}