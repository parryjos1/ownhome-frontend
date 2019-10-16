import React, { Component } from 'react'
import Child1 from './Child1'


// Component to simulate data moving around in react

class Parent extends Component {

    state = {
        count: 1
    }

    render() {
        return(
            <div>
                <h1>Hello from the parent div</h1>
                <br />
                {this.state.count}
                <br />
                <button>Pass Down</button>
                <br />

                <Child1 />



            </div>
        )
    }
}

export default Parent