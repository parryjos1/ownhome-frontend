import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import DrawerToggleButton from '../SideDraw/DrawerToggleButton'

const nav = props => (
    <header className="nav">
        <nav className="navbar_navigation">
            {/* <div className="nav-logo"><a href="/">THE LOGO</a></div> */}
            <div className="nav-logo"><Link to="/">THE LOGO</Link></div>
            {/* spacer takes all the available space */}
            <div className="spacer"></div>
            <div className="nav-items">
                <ul>
                {
                Object.entries(props.navItems).map((k, v) => 
                    <li><Link to={`${k[1]}`}>{k[0]}</Link></li>
                )
                }
                </ul>
            </div>
            <div className="nav-toggle-btn">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
);

export default nav;

