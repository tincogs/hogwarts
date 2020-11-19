import React, { Component } from 'react';

class CardBack extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { name, specialty, greased, weight, 'highest medal achieved':medal } = this.props.pig
        return ( 
            <div>
                <h3>{name}</h3>
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased}</p>
                <p>Weight: {weight}</p>
                <p>Highest Medal Achieved: {medal}</p>
            </div>
         );
    }
}
 
export default CardBack;