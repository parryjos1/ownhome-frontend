import React, { Component } from 'react'
import Child2 from './Child2'

class Child1 extends Component {

    state = {
        count2: 2
    }

    render() {
        return(
            <div>
                <h2>Child 1</h2>
                <br />
                <br />
                <button>Pass Up</button>
                <button>Pass Down</button>
                <br />
                {this.state.count2}

                <Child2 />

            </div>
        )
    }
}

export default Child1