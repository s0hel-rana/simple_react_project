import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.address}</p>
            </div>
        )
    }
}

export default Card;
