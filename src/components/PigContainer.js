import React, { Component } from 'react'
import PigCard from './PigCard'

export default class PigContainer extends Component {

    renderPigCards = () => {

        return(
            this.props.hogs.map(pig =>{
                return (<PigCard
                key={pig.id}
                pig={pig}
            />)}
            )
        )
    }

    render() {
        return (
            <div className="ui grid container">
                {this.renderPigCards()}
            </div>
        )
    }
}
