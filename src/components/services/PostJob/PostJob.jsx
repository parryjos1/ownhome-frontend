import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MasterForm from './form/MasterForm';
import Navbar from '../Navbar/Navbar'
import './PostJob.css';
import 'typeface-roboto';
import Stepper from './form/Stepper';

//Multi-form elements
import JobInfo from './form/JobInfo'
import Description from './form/Description'
import Address from './form/Address'
import Confirmation from './form/Confirmation';
import Success from './form/Success'

// Ant design stepper
import { Steps, Button } from 'antd';
import 'antd/dist/antd.css';


const { Step } = Steps;

class PostJob extends Component {

  constructor(props){
    super(props);
    this.state = {
      service: '',
      title: '',
      description: '',
      address: '',
      current: 0
    }

  } // end of constructor

  componentDidMount() {

    this.handleParentState();

  }

// Updates State of the Service
  handleParentState = () => {
    this.setState({service: this.props.location.state.job})
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  // Updates parent state if child inputs change
  handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    let name = e.target.name
    this.setState({[name]: e.target.value})
  }

// Button to advance to success page
  onConfirmClick = (e) => {
    e.preventDefault()
    const current = this.state.current + 1;
    this.setState({ current });
  }

// Switch statement to determine which page of multi-step form is rendered
  renderSwitch(param) {
    switch(param) {
      case 0:
          return <JobInfo change={this.handleInputChange} description={this.state.description} title={this.state.title} job={this.props.location.state.job} />
      case 1:
          return <Address change={this.handleInputChange} />
      case 2:
          return <Confirmation details={this.state} />
      case 3:
          return <Success serverPost={this.postJob} details={this.state} />
      default:
          return <p>Loading...</p>
    }
  }


  render(){

    const { current } = this.state;
    let navItems = {'About': '/about', 'How it works': '/how-it-works', 'Signup': '/signup'}

    return(
      <div className="post-job">
        <Navbar navItems={ navItems }/>

        <div className="new-job-form">

          <Steps current={this.state.current} size="small">
            <Step title="Info"  />
            <Step title="Details" />
            <Step title="Done"  />
          </Steps>

          <div className="new-job-form-ctn">


            </div>
              {this.renderSwitch(this.state.current)}
            <div>


          </div>

<div className="steps-action">
          {current < 2 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === 2 && (
            <Button type="primary" onClick={this.onConfirmClick}>
              Confirm
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>

        </div>

      </div>
    )
  }
}

export default PostJob
