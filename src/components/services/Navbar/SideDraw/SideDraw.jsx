import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css'

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
                <li><Link to={`${k[1]}`}>{k[0]}</Link></li>
            )
            }
        </ul>
    </nav>
   );
};

export default sideDrawer;