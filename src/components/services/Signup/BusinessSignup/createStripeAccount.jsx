import React, { Component } from 'react'
import './businessSignup.css'
// import 'antd/dist/antd.css';
// import Navbar from '../../Navbar/Navbar'
import axios from 'axios'
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';
import { Route, Link } from 'react-router-dom';



class CreateStripeAccount extends Component {

    state = {

      };

      stripeButtonClick = () => {
        //1) Make a call to the backend 

        const authToken = localStorage.getItem('token');
        axios({
            method: 'post',
            url: 'http://localhost:4000/payment/stripe/account/expressinfo',
            headers: { Authorization: "Bearer " + authToken }
            // data: {
            // firstName: 'Finn',
            // lastName: 'Williams'
            // }
        })
        .then(response => {
            console.log(response.data)

            let { STATE_VALUE, client_id } = response.data
            const redirctURI = "http://localhost:3000/#/services/businesses/signup/stripe/confirm"

            //TODO: Need to save STATE_VALUE in the database somewhere --> Then verify when get back from Stripe 
            // Predefined URI's are already in but provides an extra level of security
            window.location.href = `https://connect.stripe.com/express/oauth/authorize?client_id=${client_id}&state=${STATE_VALUE}`;


        })
        .catch(error => {
            console.log(error)
        })

      }

    render() {


        return (
            <div>
                <h1>Welcome to the business signup form</h1>

               

                <img src={'./images/stripe/blue-on-light.png'} alt='Stripe button' onClick={this.stripeButtonClick} />
            
            </div>

        )
    }
}
export default CreateStripeAccount