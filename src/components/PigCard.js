import React, { Component } from 'react'

export default class PigCard extends Component {



    displayDetails = () => {
        const { specialty, greased, weight, 'highest medal achieved':medal } = this.props.pig
        console.log(greased)
    }


    render() {
        const { name } = this.props.pig
        let pigImageName = name.split(" ").join("_").toLowerCase()
        let pigImage = require(`../hog-imgs/${pigImageName}.jpg`)
        return (
            <div className="ui seven wide column pigTile" onClick={this.displayDetails}>
            <h3>{name}</h3>
            <img src={pigImage} />
            </div>
        )
    }
}
