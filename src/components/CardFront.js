import React, { Component } from 'react';

class CardFront extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name } = this.props.pig
        let pigImageName = name.split(" ").join("_").toLowerCase()
        let pigImage = require(`../hog-imgs/${pigImageName}.jpg`)
        return ( 
            <div>
                <h3>{name}</h3>
                <img src={pigImage} alt="Pig" />
            </div>
         );
    }
}
 
export default CardFront;