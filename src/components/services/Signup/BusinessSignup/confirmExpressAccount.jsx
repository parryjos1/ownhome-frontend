import React, { Component } from 'react'
// import 'antd/dist/antd.css';
// import Navbar from '../../Navbar/Navbar'
import axios from 'axios'
import { Route, Link } from 'react-router-dom';
const queryString = require('query-string');



class ConfirmExpressAccount extends Component {

    constructor(props) {
        super(props)
    }
            componentDidMount() {
      
              this.createExpressAccount()
      
            }

      createExpressAccount = () => {
          // 1) Authorise on the platform
          // 2) Then save to the database
          // 3) Redirect to jobs page

          // access the url code and express 
        let parsed = queryString.parse(this.props.location.search);
        let { code, state } = parsed 



    // 2) Make another Axios call 
        const authToken = localStorage.getItem('token');
        axios({
            method: 'post',
            url: 'http://localhost:4000/payment/stripe/account/completeexpressaccount',
            headers: { Authorization: "Bearer " + authToken },
            data: {
                stripeCode: code
            }
        })
        .then(res => {
            console.log(res.data)

        })
        .catch(error => {
            console.log(error)
        })

      }

    render() {


        return (
            <div>
                <h1>Please wait while we finalise your account</h1>

               

            
            </div>

        )
    }
}
export default ConfirmExpressAccount


