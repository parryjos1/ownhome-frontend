import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './homepage.css';
import Navbar from './houses/Navbar-Homepage/Navbar';
import Features from './houses/features/features';
import Better from './houses/better/better';
import Works from './houses/how-it-works/works';
import Faq from './houses/faq/faq';
import What from './houses/what/what'
import FinalSignup from './houses/final-signup/finalSignup';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Homepage extends Component {


    render() {

        let navItems = {'Features': '/features', 'How it works': '/how-it-works', 'FAQs': '/faq', 'Join Waitlist': '/signup'}

        return(
            <div>
                {/* <Nav /> */}
            <Navbar navItems={ navItems }/>


                <div className='home-container'>
                    

                    <div className='home-title'>
                    {/* <h1>OwnHome</h1> */}
                    {/* <h2>Aussie house prices are F#%$ed. We've got a fix.</h2> */}
                    {/* <h2>House prices are F#%$ed. We've got a fix.</h2> */}
                        {/* <h1>House Prices are cooked</h1> */}
                        {/* <h1>House Prices are F#$%ed. We've got a fix.</h1> */}
                        <Element name="/home" className="element">
                            {/* <h1>House Prices are F#$%ed.</h1> */}
                            {/* <h1>Reviving the home ownership dream</h1> */}
                            <h1>Home ownership within reach</h1>
                        </Element>
                        {/* <h1>Home ownership feeling out of reach</h1> */}
                        {/* Image of someone reaching for a ladder */}
                        {/* <h3>OwnHome is getting people on the housing ladder with our innovative solution</h3> */}
                        {/* <h3>Pioneering a new, better path to home ownership</h3> */}
                        <h3>A better, affordable path to home ownership launching soon</h3>

                        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

                            <img className='home-Image' src={'./images/Frontpage/house.svg'} alt='house-image'  />


                            {/* <h2>Actually have a chance to own a home Australia</h2> */}
                            {/* <h2>House Prices are F#%$ed. We're solving this.</h2> */}
                            {/* <p>Housing Affordability Crisis calls for revolution.  */}
                            {/* A new affordable way to own your dream home launching</p> */}
                            {/* <p>Owning a house in australia has become impossible. We're flipping the model to give everyone a chance </p> */}
                            {/* <p>Flipping home ownership on its head to give everyone the chance to afford to own a home. Launching soon</p> */}
                            {/* <p>revolutionary new way to afford a home</p> */}
                    </div>

                    {/* <div className='home-video'>
                        <iframe className='landing-page-explainer-video'
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div> */}

                    <div className='home-signup'>
                        <form className='signup-form' >
                            <input type='text'  className='signup-input' placeholder='Enter email address' />
                            <button className='signup-btn'>Join Waitlist</button>
                        </form>

                    </div>


                </div>


                    <What />

                    <Element name="/features" className="element">
                        <Features />
                    </Element>

                    <Better /> 

                    <Element name="/how-it-works" className="element">
                        <Works />
                    </Element>

                    <Element name="/faq" className="element">
                        <Faq />
                    </Element>

                    <FinalSignup />




            </div>
        )
    }
}

export default Homepage

