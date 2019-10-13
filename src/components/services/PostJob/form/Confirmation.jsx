import React, { Component } from 'react'

class Confirmation extends Component {

    render() {
        return(
            <div>
                <h1>Confirmation</h1>
                <p>{this.props.details.service}</p>
                <p>{this.props.details.title}</p>
                <p>{this.props.details.address}</p>
                <p>{this.props.details.description}</p>

            </div>
        )
    }
}

export default Confirmation