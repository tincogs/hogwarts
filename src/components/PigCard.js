import React, { Component } from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'

export default class PigCard extends Component {

    constructor() {
        super()
        
        this.state = {
             cardFlip: true
        }
    }    

    cardFlip = () => {
            this.setState({
                cardFlip: !this.state.cardFlip
            })
    }

    // hidePig = (e) => {
    //     e.target.parentElement.classList = "hidden"
    //     // let children = e.target.parentElement.childNodes
    //     // children.forEach(child => child.className += 'hidden')
    //     // e.target.previousElementSibling.className += "hidden"
    // }


    render() {
        return (
            <div className="ui seven wide column pigTile" onClick={this.cardFlip}>
            {this.state.cardFlip ? <CardFront pig={this.props.pig}/> : <CardBack pig={this.props.pig}/>}
            <button onClick={() => this.props.hideHog(this.props.pig.name)}>Hide This Pig</button>
            </div>
        )
    }
}
