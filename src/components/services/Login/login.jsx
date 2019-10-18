import React, { Component } from 'react'
import './login.css'
// import 'antd/dist/antd.css';
import Navbar from './../Navbar/Navbar'
import axios from 'axios'
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import LoginBusiness from './LoginBusiness/loginBusiness';
import LoginUser from './LoginUser/loginUser';

import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';



class Login extends Component {

    state = {
        current: 0
    }

    handleBusinessRoute = (e) => {
        this.props.history.push({
            pathname: '/services/businesses/dashboard'
            // state: {
            //     // job: this.state.job
            // }
        })
      }

    onUserClick = (e) => {
        e.preventDefault()
        this.setState({current: 0})
    }

    onBusinessClick = (e) => {
        e.preventDefault()
        this.setState({current: 1})
    }

    // Switch statement to determine which page of multi-step form is rendered
  renderSwitch(param) {
    switch(param) {
      case 0:
          return <LoginUser />
      case 1:
          return <LoginBusiness reroute={this.handleBusinessRoute} />
      default:
          return <p>Loading...</p>
    }
  }

    render() {

        let navItems = {'About': '/about', 'How it works': '/how-it-works', 'Signup': '/signup'}

        return (
            <div>
                <Navbar navItems={ navItems }/>

                <div className="signup-ctn">
                    <button onClick={this.onUserClick} >User</button>
                    <button onClick={this.onBusinessClick} >Business</button>

                    <div>
                        {this.renderSwitch(this.state.current)}
                    </div>

                </div>

            </div>
        )
    }
}
export default Login
// export default Form.create()(Signup)