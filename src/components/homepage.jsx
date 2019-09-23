import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './homepage.css'
import  Nav from './nav/nav.jsx'

class Home extends Component {

  render() {
    return(
      <div>

        < Nav />

        <div className='home-container'>

          <div className='signup-container'>
            <div className='signup-container-1'>
            <h1>OwnHome</h1>
            <h2>Aussie house prices are F#%$ed. We've got a fix.</h2>
            {/* <h2>Actually have a chance to own a home Australia</h2> */}
            {/* <h2>House Prices are F#%$ed. We're solving this.</h2> */}
            {/* <p>Housing Affordability Crisis calls for revolution.  */}
            {/* A new affordable way to own your dream home launching</p> */}
            {/* <p>Owning a house in australia has become impossible. We're flipping the model to give everyone a chance </p> */}
            <p>Flipping home ownership on its head to give everyone the chance to afford to own a home. Launching soon</p>

              <form className='signup-form' >
                <input type='text'  className='signup-input' placeholder='Enter email address' />
                <button className='signup-btn'>Join Waitlist</button>
              </form>
            {/* <button className='home-btn'>Button</button>           */}

            </div>
            <div className='signup-container-2'>
              <h1>Video goes here</h1>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Home
