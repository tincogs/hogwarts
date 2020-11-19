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


    render() {
        return (
            <div className="ui seven wide column pigTile" onClick={this.cardFlip}>
            {this.state.cardFlip ? <CardFront pig={this.props.pig}/> : <CardBack pig={this.props.pig}/>}
            </div>
        )
    }
}
