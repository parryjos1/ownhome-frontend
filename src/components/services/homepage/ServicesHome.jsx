import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
// import Nav from '../../nav/nav.jsx';
import About from '../About/AboutOHS'
import Work from '../how-it-works/WorksOHS'

class ServicesHome extends Component {

    render() {
        return(
            <div>
                {/* <Nav /> */}
                <Navbar />
                <h1>Filler underneath the nav</h1>   
                <h2>Welcome to the other page</h2> 
                <h2>Hire professional/accredited tradies</h2>
                <p>Post a job, get free quotes, no commitment</p>
                <div className='book-service'>
                    <button><Link to="/services/postjob">Post a job</Link></button>
                </div>

                <About />
                <Work />
            </div>
        )
    }

}

export default ServicesHome