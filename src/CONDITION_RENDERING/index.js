import React, { Component } from 'react';
import HomePage from './HomePage';
import LogInPage from './LogInPage';

class CONDITION_RENDERING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn : true
      }
    }

    render() {
        const {isLogIn} = this.state
        // let element
        
        // element = isLogIn ? <HomePage /> : <LogInPage />
        return (
            <div>{isLogIn ? <HomePage /> : <LogInPage />}</div>
        )
    }
}

export default CONDITION_RENDERING;