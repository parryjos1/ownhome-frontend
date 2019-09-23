import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.css'

class Nav extends Component {

  render() {
    return(
    <div>

    <nav>
        <div className="nav-homepage">
            <ul className="nav-left">
            <li>OwnHome Logo</li>
            </ul>
            <ul className="nav-right">
            <li>FAQs</li>
            <li>Blog</li>
            <li><Link to="/jobs">Jobs</Link></li>
            </ul>
        </div>
    </nav>

    </div>
    )
  }
}

export default Nav
