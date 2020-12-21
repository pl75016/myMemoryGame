import React from "react";
import Card from "./Card.js";
import images from "./image.js";
import "./board.css"
import Reset from "./reset"
import Victoire from "./victoire.js"



export default class Board extends React.Component{
    constructor(props){
        super(props)
        const imageName =[
            "clubs_2",
            "clubs_3",
            "clubs_4",
            "clubs_5",
            "clubs_6",
            "clubs_8",
            "clubs_9",
            "clubs_10",
            "clubs_A",
            "clubs_J",
            "clubs_Q",
            "clubs_K"
        ]
        const imgtemp = imageName.slice(0,this.props.difficulty*4)
        const imgRandom = imgtemp
            .concat(imageName.slice(0,this.props.difficulty*4))
            .sort(() => Math.random() - 0.5)
            .map(f => {
                return{
                    content:f,
                    faceUp:false,
                    fixed:false
                }
            })
        console.log(this.props.name2)
        this.state= {
            deck:imgRandom,
            firstCard:null,
            same:false,
            dispo:true,
            win:false,
            player1:{
                score:0,
                name:this.props.name1
            },
            player2:{
                score:0,
                name:this.props.name2
            },
            joueur:false,
        }
    }

    retourneDeux(index){
        this.setState({dispo:false})
        setTimeout(() =>{
            this.setState({
                deck: this.state.deck.map((f,i) => {
                    if(i === index){
                        return{
                            content: f.content,
                            faceUp: !f.faceUp,
                            fixed: f.fixed,
                        }
                    }else{
                        return f;
                    }
                })
            })
        },1)
        this.setState({dispo:true})
    }

    flipCardTo(index,faceUp,fixed){
        this.setState({
            deck: this.state.deck.map((f,i) => {
                if(i === index){
                    return{
                        content: f.content,
                        faceUp: faceUp,
                        fixed: fixed,
                    }
                }else{
                    return f;
                }
            })
        })
    }

    testWin(){
        const machin = (currentValue) => currentValue.faceUp === true;
        if(this.state.deck.every(machin)){
            this.setState({win:true})
        }
    }

    addPoint(player){
        if(player === "player1"){
            const dict1 = this.state.player1
            this.setState({player1:{score:dict1.score+3,name:dict1.name}})
        }else{
            const dict2 = this.state.player2
            this.setState({player2:{score:dict2.score+3,name:dict2.name}})
        }
    }
    takeOfPoint(player){
        if(player === "player1"){
            const dict1 = this.state.player1
            this.setState({player1:{score:dict1.score-1,name:dict1.name}})
        }else{
            const dict2 = this.state.player2
            this.setState({player2:{score:dict2.score-1,name:dict2.name}})
        }
    }

    handleClick(index){
        if(this.state.joueur){
            if(this.state.dispo){
                if(this.state.firstCard === null){
                    this.setState({firstCard:index})
                    this.flipCardTo(index, true,false)
                }else{
                    if(index !== this.state.firstCard){
                        this.flipCardTo(index, true,false)
                        const firstCardContent = this.state.deck[this.state.firstCard].content
                        const secondCardContent = this.state.deck[index].content
                        if(firstCardContent === secondCardContent){
                            setTimeout(() => {
                                this.flipCardTo(index, true,true)
                                this.flipCardTo(this.state.firstCard, true,true)
                                this.setState({firstCard:null});
                                this.testWin();
                                this.addPoint("player1")
                            },10)
                        }else{
                            this.setState({dispo:false})
                            this.takeOfPoint("player1")
                            setTimeout(() => {
                                this.retourneDeux(this.state.firstCard);
                                this.retourneDeux(index);
                                this.setState({firstCard:null});
                                this.setState({joueur:!this.state.joueur})
                            },1000)
                            setTimeout(() => {
                                this.setState({dispo:true})
                            },1005)
                        }
                    }
                }
            }
        }else{
            if(this.state.dispo){
                if(this.state.firstCard === null){
                    this.setState({firstCard:index})
                    this.flipCardTo(index, true,false)
                }else{
                    if(index !== this.state.firstCard){
                        this.flipCardTo(index, true,false)
                        const firstCardContent = this.state.deck[this.state.firstCard].content
                        const secondCardContent = this.state.deck[index].content
                        if(firstCardContent === secondCardContent){
                            setTimeout(() => {
                                this.flipCardTo(index, true,true)
                                this.flipCardTo(this.state.firstCard, true,true)
                                this.setState({firstCard:null});
                                this.testWin();
                                this.addPoint("player2")
                            },10)
                        }else{
                            this.setState({dispo:false})
                            this.takeOfPoint("player2")
                            setTimeout(() => {
                                this.retourneDeux(this.state.firstCard);
                                this.retourneDeux(index);
                                this.setState({firstCard:null});
                                this.setState({joueur:!this.state.joueur})
                            },1000)
                            setTimeout(() => {
                                this.setState({dispo:true})
                            },1005)
                        }
                    }
                }
            }

        }
    };
    randomImages(){
        if(this.state.win){
            return(
                <Victoire 
                    score1={this.state.player1.score} 
                    score2={this.state.player2.score}
                    name1={this.state.player1.name}
                    name2={this.state.player2.name}
                />
            )
        }
        return (<><div className="turn">
                    It's {this.state.joueur ? this.state.player1.name : this.state.player2.name}'s turn to play
                </div>
                <div className="CardGrid">{
                this.state.deck.map((f,index) => {
                return (
                    <div className="Cards">
                        <Card 
                            content={images(f.content)} 
                            onClick={() => this.handleClick(index)}
                            state={f.faceUp}
                            id={index}
                        />
                    </div>
                    )
                })
            }</div>
            <div className="outer-div">
                <div className="score">{this.state.player1.name}'s score : {this.state.player1.score}</div>
                <div className="score">{this.state.player2.name}'s score : {this.state.player2.score}</div>
                <Reset/>
            </div>
        </>
        )
    }
    render(){
        return(
            this.randomImages(this.state.name)
        )
    }
}