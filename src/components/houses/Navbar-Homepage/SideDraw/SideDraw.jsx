import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Link as Link1, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
   return ( 
   <nav className={drawerClasses}>
        {/* <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul> */}
        <ul>
            {
            Object.entries(props.navItems).map((k, v) => 
                // <li><Link to={`${k[1]}`}>{k[0]}</Link></li>
                <li><Link1 activeClass="active" offset={-100} className={`${k[1]}`} to={`${k[1]}`} spy={true} smooth={true} duration={500} >{k[0]}</Link1></li>
            )
            }
            {/* Link: uses the react-dom-router to link to a new page */}
            {/* PERMANENT NAV ITEMS. TAKEN FROM NAVBAR PROPS */}
            <li><Link className="active" to="/blog">Resources</Link></li>
            <li><Link1 activeClass="active" offset={-100} className={`home`} to={`/home`} spy={true} smooth={true} duration={500} >Join Waitlist</Link1></li>
        </ul>
    </nav>
   );
};

export default sideDrawer;