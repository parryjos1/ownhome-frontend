import React, { Component } from 'react';
import './finalSignup.css';
import Mailchimp from '../Mailchimp/mailchimp'

class FinalSignup extends Component {


    render() {

        return(
            <div className="final-colour">

            <div className="final-signup-ctn">
                <div className="final-signup-item">
                    <h1>Be the first to know when we launch!</h1>

                    {/* <div className='final-signup'>
                        <form className='final-signup-form' >
                            <input type='text'  className='final-signup-input' placeholder='Enter email address' />
                            <button className='final-signup-btn'>Join Waitlist</button>
                        </form>
                    </div> */}

                    <Mailchimp />

                </div>

                <div className="final-signup-item">
                    <img className="final-signup-img" src={"./images/Frontpage/hand.svg"} />

                </div>


            </div>
            </div>

        )
    }
}

export default FinalSignup