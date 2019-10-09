import React, { Component } from 'react'
import JobType from './JobType'
import Description from './Description'
import Address from './Address'
import Confirmation from './Confirmation'

class MasterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }


    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    render() {

        const {step} = this.state
        switch (step) {
            case 1:
                return <JobType />
            case 2:
                return <Description />
            case 3:
                return <Address />
            case 4:
                return <Confirmation />

        }
        // return(
        //     <div>
        //     <h1>hello</h1>
        //     </div>
        // )
    }


}

export default MasterForm;