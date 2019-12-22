import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav-homepage.css';
import DrawerToggleButton from '../SideDraw/DrawerToggleButton'
import { Link as Link1, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Nav extends Component {

    state = {
        color: "#a8eef4"
    }

    listenScrollEvent = e => {

        // this is disgusting... switch statement?
        // TODO: Safety --> Check if props exist
        if (window.scrollY > this.props.whatHeight) {
          this.setState({color: 'white'})
            if (window.scrollY > this.props.featuresHeight) {
                this.setState({color: '#bff0d6'})
            }
                if (window.scrollY > this.props.betterHeight) {
                    this.setState({color: 'white'})
                }
                    if (window.scrollY > this.props.workHeight) {
                        this.setState({color: '#f3e99d'})
                    }
                        if (window.scrollY > this.props.faqHeight) {
                            this.setState({color: 'white'})
                        }
        } else {
          this.setState({color: '#a8eef4'})
        } 

      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        console.log(window.screen.height)
            console.log(window.screen.width)
        console.log(window.innerHeight)
            console.log(window.innerWidth)
            console.log("The scroll top is ")
            console.log(window.screenTop)
      }

    render() {
        return(

            <header className="nav-homepage" style={{backgroundColor: this.state.color}}>
            <nav className="navbar_navigation">

            {/* Link1:  uses the react-scroll library to navigate to section on page */}
            <div className="nav-logo"><Link1 activeClass="active" offset={-100} className={'home'} to={'/home'} spy={true} smooth={true} duration={500} >OwnHome</Link1></div>
            <div className="spacer"></div>

            {/* Loops over props passed to NavBar in homepage.jsx  */}
             <div className="nav-items">
                 <ul>
                    {
                    Object.entries(this.props.navItems).map((k, v) => 
                        // <li><Link activeClass="active" offset={-100} className={`${k[1]}`} to={`${k[1]}`} spy={true} smooth={true} duration={500} >{k[0]}</Link></li>
                        <li><Link1 activeClass="active" offset={-100} className={`${k[1]}`} to={`${k[1]}`} spy={true} smooth={true} duration={500} >{k[0]}</Link1></li>
                    )
                    }
                    {/* Link: uses the react-dom-router to link to a new page */}
                    {/* PERMANENT NAV ITEMS. TAKEN FROM NAVBAR PROPS */}
                    <li><Link className="nav-logo" to="/blog">Resources</Link></li>
                    <li><Link1 activeClass="active" offset={-100} className={`home`} to={`/home`} spy={true} smooth={true} duration={500} >Join Waitlist</Link1></li>
                </ul>
            </div>

            <div className="nav-toggle-btn">
                <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
        </nav>
    </header>
        )
    }
}

// const nav = props => (
//     <header className="nav-homepage">
//         <nav className="navbar_navigation">
//             {/* <div className="nav-logo"><a href="/">THE LOGO</a></div> */}
//             {/* <div className="nav-logo"><Link to="/">OwnHome</Link></div> */}
//             <div className="nav-logo"><Link activeClass="active" offset={-100} className={'home'} to={'/home'} spy={true} smooth={true} duration={500} >OwnHome</Link></div>
//             {/* spacer takes all the available space */}
//             <div className="spacer"></div>
//             <div className="nav-items">
//                 <ul>
//                 {
//                 Object.entries(props.navItems).map((k, v) => 
//                     // <li><Link to={`${k[1]}`}>{k[0]}</Link></li>
//                     <li><Link activeClass="active" offset={-100} className={`${k[1]}`} to={`${k[1]}`} spy={true} smooth={true} duration={500} >{k[0]}</Link></li>

                    
//                 )
//                 }
//                 </ul>
//             </div>
//             <div className="nav-toggle-btn">
//                 <DrawerToggleButton click={props.drawerClickHandler} />
//             </div>
//         </nav>
//     </header>
// );

export default Nav;

