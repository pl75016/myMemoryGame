import { replaceStringTransformer } from "common-tags"
import thisStringValue from "es-abstract/2015/thisStringValue"
import React from "react"

export default class History extends React.Component{
    constructor(props){
        super(props)
        this.state={
            history:[null]
        }
    }

    add(){
        const historique = this.state.history;
        const actu = [this.props.deck];
        this.setState({history:historique.concat(actu)})
    }

    render(){
        return(
            <div>{this.state.history}</div>
        )
    }
}