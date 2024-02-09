import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
     handleIncrement = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }

    handleDecrement = () =>{
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>Count : {count}</h2>
                <Button onClick={this.handleIncrement} disabled={count === 10 ? true : false}><FaPlus /></Button>{' '}
                <Button onClick={this.handleDecrement} disabled={count === 0 ? true : false}><FaMinus /></Button>{' '}
            </div>
        );
    }
}

export default State;