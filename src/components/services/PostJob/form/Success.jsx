import React, { Component } from 'react';
import Loading from "../Loading";
import axios from 'axios';

import { Result, Button } from 'antd';

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from 'react-loading';
import * as legoData from "../legoloading.json";
import * as doneData from "../doneloading.json";

// Created with https://levelup.gitconnected.com/react-loading-screen-tactics-improving-user-experience-9d115ef92d6b
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 }
 
 const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };

class Success extends Component {

    state = {
        service: 'empty',
        loading: '',
        done: ''
    }

    componentDidMount() {

        this.handleParentState()

// BUG: No action taken if there is an error with the server. Not safe code

// Make the Axios post from the parent using the parent's state
// Update the loading state to determine which needs to be loaded
        setTimeout(() => {
            let body = {
                title: this.state.title,
                service: this.state.service,
                address: this.state.address,
                description: this.state.description,
            }

            axios.post("http://localhost:4000/jobs/new", body, {
                // headers: { Authorization: "Bearer " + authToken }
            })
            .then( res => {
                console.log('New Item submitted', res);
                this.setState({ loading: true });
                setTimeout(() => {
                    this.setState({ done: true });
                }, 1000);
            })
            .catch(err => console.warn('SELL USER AJAX ERROR!', err) );
        }, 1200);

    }

    handleParentState = () => {
        this.setState({title: this.props.details.title})
        this.setState({service: this.props.details.service})
        this.setState({address: this.props.details.address})
        this.setState({description: this.props.details.description})
    }

    render() {
        return(
            <div>

                {!this.state.done ? (
                    <FadeIn>
                        <div class="d-flex justify-content-center align-items-center">
                        <h1>Building your job</h1>
                        {!this.state.loading ? (
                            <Lottie options={defaultOptions} height={120} width={120} />
                        ) : (
                            <Lottie options={defaultOptions2} height={120} width={120} />
                        )}
                        </div>
                    </FadeIn>
                    ) : (

                    <Result
                        status="success"
                        title="Successfully Purchased Cloud Server ECS!"
                        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                        extra={[
                        <Button type="primary" key="console">
                            Go Console
                        </Button>,
                        <Button key="buy">Buy Again</Button>
                        ]}

                        
                    />
                )}

            </div>
        )
    }
}

export default Success