import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import About from '../About/AboutOHS'
import Work from '../how-it-works/WorksOHS'
import './ServicesHome.css';



class ServicesHome extends Component {
    
    state = {
        job: ''
    }

    onChange = (e) => {
        // e.preventDefault()
        let data = e.target.value;
        this.setState({job: data})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        this.props.history.push({
            // pathname: '/searchlistings',
            pathname: '/services/postjob',
            state: {
                job: this.state.job
            }
        })
    }

    render() {

        let navItems = {'About': '/about', 'How it works': '/how-it-works', 'Login': '/login', 'Signup': '/signup'}

        return(
            <div>
                <Navbar navItems={ navItems }/>

                <div className="services-homepage">
                    <h1>Easiest way to hire tradies online</h1>
                    <h3>Free bids from accredited tradies in 1 minute</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="What are you looking for?" onChange={this.onChange}/>
                        <input type="submit" value="Get Free Quotes" />
                    </form>  
                    <br />
                    <div>
                        <label>For Tradies</label>
                        <button><Link to="/">Set up my business</Link></button>
                    </div> 
                </div>


                <About />
                <Work />
            </div>
        )
    }

}

export default ServicesHome