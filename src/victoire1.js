import React from "react"

export default class Victoire1 extends React.Component{
    render(){
        return(
            <div className="victoire">
                <div>
                    Vous avez Gagnez avec un score de {this.props.score1}
                </div>
                <button className="Button" type="button" onClick={() => this.props.rejouer()}> Rejouer </button>
                <div className="tableau">
                <div class="divTable">
                <div class="divTableBody">
                <div class="divTableRow">
                    <div class="divTableCell">&nbsp;</div>
                    <div class="divTableCell">&nbsp;{this.props.name1}</div>
                </div>
                {this.props.scoreTotal.map((content,index) => {
                        return(
                            <div class="divTableRow">
                                <div class="divTableCell">&nbsp;{index}</div>
                                <div class="divTableCell">&nbsp;{content.player1}</div>
                            </div>
                        )
                    })}
                </div>
                </div>
                </div>
            </div>
        )
    }
}