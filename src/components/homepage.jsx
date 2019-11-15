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
import Mailchimp from './houses/Mailchimp/mailchimp'



class Homepage extends Component {

    state = {
        whatHeight: null,
        featuresHeight: null,
        betterHeight: null,
        workHeight: null,
        faqHeight: null
    }

    // TODO: REFACTOR 
    // Gets the current height of the top of each component. 
    // Is then use to change background color of each
    // State then passed into Navbar component
    getWhatHeightTop = (id) => {
        var stickyContainer = document.getElementById(id);
        let componentHeight =  stickyContainer.offsetTop 
        this.setState({whatHeight: componentHeight})
    }
    getFeaturesHeightTop = (id) => {
        var stickyContainer = document.getElementById(id);
        let componentHeight =  stickyContainer.offsetTop 
        this.setState({featuresHeight: componentHeight})
    }
    getBetterHeightTop = (id) => {
        var stickyContainer = document.getElementById(id);
        let componentHeight =  stickyContainer.offsetTop 
        this.setState({betterHeight: componentHeight})
    }
    getWorkHeightTop = (id) => {
        var stickyContainer = document.getElementById(id);
        let componentHeight =  stickyContainer.offsetTop 
        this.setState({workHeight: componentHeight})
    }
    getFaqHeightTop = (id) => {
        var stickyContainer = document.getElementById(id);
        let componentHeight =  stickyContainer.offsetTop 
        this.setState({faqHeight: componentHeight})
    }

    render() {
    // initializeReactGA()

        // let navItems = {'Features': '/features', 'How it works': '/how-it-works', 'FAQs': '/faq', 'Join Waitlist': '/signup'}
        let navItems = {'Features': '/features', 'How it works': '/how-it-works', 'FAQs': '/faq', 'Join Waitlist': '/home'}

        return(
            <div>
                {/* <Nav /> */}
            <Navbar navItems={ navItems } 
                whatHeight={this.state.whatHeight} 
                featuresHeight={this.state.featuresHeight}
                betterHeight={this.state.betterHeight}
                workHeight={this.state.workHeight}
                faqHeight={this.state.faqHeight}
            />


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
                        <h3 className="home-subheading">A better, affordable path to home ownership launching soon</h3>

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

                    <Element name="/signup" className="element">
                        {/* Old Signup Form depreciated */}
                        {/* <div className='home-signup'>
                            <form className='signup-form' >
                                <input type='text'  className='signup-input' placeholder='Enter email address' />
                                <button className='signup-btn'>Join Waitlist</button>
                            </form>

                        </div> */}
                        <Mailchimp />
                    </Element>



                </div>

                    <What getHeight={this.getWhatHeightTop}/>

                    <Element name="/features" className="element">
                        <Features getHeight={this.getFeaturesHeightTop}/>
                    </Element>

                    <Better getHeight={this.getBetterHeightTop} /> 

                    <Element name="/how-it-works" className="element">
                        <Works getHeight={this.getWorkHeightTop}/>
                    </Element> 

                    <Element name="/faq" className="element">
                        <Faq getHeight={this.getFaqHeightTop} />
                    </Element>

                    <FinalSignup />

            </div>
        )
    }
}

export default Homepage

