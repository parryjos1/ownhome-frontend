import React, { Component } from 'react'
import JobType from './JobInfo'
import Description from './Description'
import Address from './Address'
import Confirmation from './Confirmation'

let testVar;

// NOTE: THis not used anymore

class MasterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            step: 1
            // step: this.props.stateChange
        }
    }

    // handleChange = input => event => {
    //     this.setState({ [input] : event.target.value })
    // }

    // nextStep = () => {
    //     const { step } = this.state
    //     this.setState({
    //         step : step + 1
    //     })
    // }

    // prevStep = () => {
    //     const { step } = this.state
    //     this.setState({
    //         step : step - 1
    //     })
    // }


    //   static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.stateChange!==prevState.stateChange){
    //         console.log('get derrived')
    //         console.log(`${prevState.stateChange}`)
    //         console.log(`${nextProps.stateChange}`)
    //       return { step: nextProps.stateChange};
    //    }
    //    else return null;
    //  }

    render() {

        // should probs use a promise here
        const {step} = this.state
        // const {step} = this.props.stateChange
        console.log(`the step ids: ${step}`)

        switch (step) {
            case 1:
                return <JobType />
            case 2:
                return <Description />
            case 3:
                return <Address />
            case 4:
                return <Confirmation />
            default:
                return <p>Loading...</p>
        }

    }

}

export default MasterForm;