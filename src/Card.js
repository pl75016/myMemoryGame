import React from "react";
import "./Card.css";
import images from "./image.js";



export default class Card extends React.Component{
	render(){
		let content
		if(this.props.state){
			content = <img src={this.props.content} alt="" id={this.props.id}></img>
		}else{
			content = <img src={images("arriere")} alt=""></img>
		}
		return(
		<div onClick={() => this.props.onClick()} className={`Card ${this.props.state ? 'face-up': ''}`}>
			{content}
		</div>
		)
	};
}