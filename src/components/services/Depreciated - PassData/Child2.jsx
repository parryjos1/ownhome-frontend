import React, { Component } from 'react'

class Child2 extends Component {

    state = {
        count3: 3
    }

    render() {
        return(
            <div>
                <h3>Child 3</h3>
                <button>Pass Up</button>
                <br />
                {this.state.count3}

            </div>
        )
    }
}

export default Child2