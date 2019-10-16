import React, { Component } from 'react'
import './signup.css'
// import 'antd/dist/antd.css';
import Navbar from './../Navbar/Navbar'
import axios from 'axios'
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import UserSignup from './UserSignup/userSignup'
import BusinessSignup from './BusinessSignup/businessSignup'



class Signup extends Component {

    state = {
        current: 0
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
          return <UserSignup />
      case 1:
          return <BusinessSignup />
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
export default Signup
// export default Form.create()(Signup)