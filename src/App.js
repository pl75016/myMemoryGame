import React from "react";
import Board from "./Board.js";
import Board1 from "./board1.js";
import Many from "./many.js";
import SetGame from "./setGame.js"
import SetGame1 from "./setgame1.js"

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            payerNumber:null,
            difficulty:null,
            name1:null,
            name2:null,
        }
    }
    playerNum1(){
        this.setState({
            payerNumber:1
        })
    }
    playerNum2(){
        this.setState({
            payerNumber:2
        })
    }
    difficulty1(){
        if(document.getElementById("payer1").value !== null){
            this.setState({name1:document.getElementById("payer1").value})
        }else{
            this.alert("Please enter a name")
        }
        if(document.getElementById("difficulty").value !== null){
            this.setState({difficulty:document.getElementById("difficulty").value})
        }else{
            this.alert("Please choose a difficulty")
        }
    }
    difficulty2(){
        if(document.getElementById("payer1").value !== null){
            this.setState({name1:document.getElementById("payer1").value})
        }else{
            this.alert("Please enter a name")
        }
        if(document.getElementById("payer2").value !== null){
            this.setState({name2:document.getElementById("payer2").value})
        }else{
            this.alert("Please enter a name")
        }
        if(document.getElementById("difficulty").value !== null){
            this.setState({difficulty:document.getElementById("difficulty").value})
        }else{
            this.alert("Please choose a difficulty")
        }
        console.log(this.state.difficulty)
    }
    render(){
        if(this.state.payerNumber === null){
            return(
            <div>
                <Many 
                    onClick1={() => this.playerNum1()}
                    onClick2={() => this.playerNum2()}

                />
            </div>
            )
        }else if(this.state.payerNumber === 1){
            if(this.state.difficulty){
                return(
                    <div className ="App">
                        <header className="App-header">
                            It's {this.state.name1} Game
                            
                        </header>
                        <div>
                            <Board1
                                board1Difficulty={this.state.difficulty}
                                board1Name1={this.state.name1}
                            />
                        </div>
                    </div>
                )
            }else{
                return(
                    <SetGame1 onClick={() => this.difficulty1()}/>
                )
            }
        }else if(this.state.payerNumber === 2){
            if(this.state.difficulty){
                return(
                    <div className ="App">
                        <header className="App-header">
    
                            {this.state.name1} VS {this.state.name2}
                            
                        </header>
                        <div>
                            <Board
                                boardDifficulty={this.state.difficulty}
                                boardName1={this.state.name1}
                                boardName2={this.state.name2}
                            />
                        </div>
                    </div>
                )
            }else{
                return(
                    <SetGame onClick={() => this.difficulty2()}/>
                )
            }
        }
    }
}
