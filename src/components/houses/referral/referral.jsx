import React, { Component } from 'react';
import './referral.css';

class Referral extends Component {

    render(){
        return(
            <div className="referral-ctn">
                <h1 className="referral-header">Enter your email</h1>
                <form>
                    <input type="text" className="referral-input"/>
                </form>
            </div>
        )
    }
}

export default Referral;