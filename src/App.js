import React from "react";
import Board from "./Board.js";
import SetGame from "./setGame.js"


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            difficulty:null,
            name1:null,
            name2:null,
        }
    }
    difficulty(){
        
        this.setState({name1:window.prompt("Enter The Name of The Fist Player")})
        this.setState({name2:window.prompt("Enter The Name of The Second Player")})
        const diff = window.prompt("Enter your difficulty between 1 and 3");
        console.log(diff)
        if(diff === "1" || diff === "2" || diff === "3"){
            this.setState({difficulty:diff})
        }
        return(diff)
    }
    render(){
        //const userName = window.prompt("Enter your Name");
        if(this.state.difficulty === null){
            return(
            <div>
                <SetGame onClick={() => this.difficulty()}/>
            </div>)
        }else{
        return(
            <div className ="App">
                <header className="App-header">
                    {this.state.name1} VS {this.state.name2}
                    
                </header>
                <div>
                    <Board 
                        difficulty={this.state.difficulty}
                        name1={this.state.name1}
                        name2={this.state.name2}
                    />
                </div>
            </div>
            )
        };
    }
}
