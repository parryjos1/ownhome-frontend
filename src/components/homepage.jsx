import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './homepage.css'
import  Nav from './nav/nav.jsx'
import Faq from './houses/faq.jsx'

class Homepage extends Component {


    render() {

        return(
            <div>
                <Nav />

                <div className='home-container'>

                    <div className='home-title'>
                    {/* <h1>OwnHome</h1> */}
                    {/* <h2>Aussie house prices are F#%$ed. We've got a fix.</h2> */}
                    {/* <h2>House prices are F#%$ed. We've got a fix.</h2> */}
                        <h1>House Prices are cooked</h1>
                        <h3>OwnHome is getting people on the housing ladder with our innovative solution</h3>

                            {/* <h2>Actually have a chance to own a home Australia</h2> */}
                            {/* <h2>House Prices are F#%$ed. We're solving this.</h2> */}
                            {/* <p>Housing Affordability Crisis calls for revolution.  */}
                            {/* A new affordable way to own your dream home launching</p> */}
                            {/* <p>Owning a house in australia has become impossible. We're flipping the model to give everyone a chance </p> */}
                            {/* <p>Flipping home ownership on its head to give everyone the chance to afford to own a home. Launching soon</p> */}
                            {/* <p>revolutionary new way to afford a home</p> */}
                    </div>

                    <div className='home-video'>
                        <iframe className='landing-page-explainer-video'
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>

                    <div className='home-signup'>
                        <form className='signup-form' >
                            <input type='text'  className='signup-input' placeholder='Enter email address' />
                            <button className='signup-btn'>Join Waitlist</button>
                        </form>

                    </div>




                </div>
            </div>
        )
    }
}

export default Homepage

// <div>
// <h1>Centering with CSS</h1>

// <h3>Text-Align Method</h3>
// <div class="blue-square-container">
// <div class="blue-square"></div>
// </div>

// <h3>Margin Auto Method</h3>
// <div class="yellow-square"></div>

// <h3>Absolute Positioning Method</h3>
// <div class="green-square"></div>
// </div>