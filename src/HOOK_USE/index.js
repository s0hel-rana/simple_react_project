import React, { Component } from 'react';

class HOOK_USE extends Component {
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
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={this.handleIncrement}>click</button>
            </div>
        );
    }
}

export default HOOK_USE;