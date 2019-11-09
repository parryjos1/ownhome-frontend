import React, { Component } from 'react';
import axios from 'axios';
import { is } from '@babel/types';

class Payments extends Component {

    state = {
        setupBegan: false,
        isLoadingFieldsNeeded: true,
        error: null
    }

    componentWillMount(){
        this.fetchFieldsNeeded()
    }

    onClickBeginSetup = () => {
        console.log('Begin setup clicked');
    }

    fetchFieldsNeeded = () => {
        const authToken = localStorage.getItem('token');
        axios({
            method: 'post',
            url: 'http://localhost:4000/payment/stripe/account/get',
            headers: { Authorization: "Bearer " + authToken }
            // data: {
            // firstName: 'Finn',
            // lastName: 'Williams'
            // }
        })
        .then(response => {

            const { success, message, setupBegan } = response.data;

                if (success) {
                    this.setState({
                        setupBegan,
                        isLoadingFieldsNeeded: false
                    })
                } else {
                    // Failed
                    this.setState({
                        error: message,
                        isLoadingFieldsNeeded: false
                    })
                }
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){

        const {
            isLoadingFieldsNeeded, setupBegan, error
        } = this.state;

        if ( isLoadingFieldsNeeded ) {
            return(
                <p>Loading...</p>
            );
        }

        if ( !setupBegan ) {

            return (
                <div>
                    {
                        (error) ? (
                            <p>{error}</p>
                        ) : (null)
                    }
                    <button onClick={this.onClickBeginSetup} >Begin Setup</button>
                    <p>By clicking setup you agree to the terms of service for stripe and us</p>
                </div>
            )

        }

        return(
            <div>
                {
                    (error) ? (
                        <p>{error}</p>
                    ) : (null)
                }                
                <p>Start adding stripe elements</p>
            </div>

        )
    }
}

export default Payments;