import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './homepage.css'

class Home extends Component {

  render() {
    return(
      <div>
        <nav>
          <div className="nav-homepage">
            <div className="nav-left">
              <ul>
                <li>OwnHome Logo</li>
              </ul>
            </div>
            <div className="nav-right">
              <ul>
                <li>How it works</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li><Link to="/jobs">Jobs</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <h1>OwnHome</h1>
        <button className='home-btn'>Button</button>
        <p>testing</p>
      </div>
    )
  }
}

export default Home
