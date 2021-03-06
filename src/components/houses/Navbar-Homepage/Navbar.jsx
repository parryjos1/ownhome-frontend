import React, { Component } from 'react';
import './Navbar.css';
import Nav from './Nav/nav';
import Sidedrawer from './SideDraw/SideDraw';
import Backdrop from './BackDrop/BackDrop';

class Navbar extends Component {

    state = {
        sideDrawerOpen: false
      }


  drawerToggleClickHandler = () => {
    
    // Not best practice.
    // this.setState({sideDrawerOpen: !this.state.sideDrawerOpen})
    // Use function form instead
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

    render() {


    let backdrop;

    if (this.state.sideDrawerOpen) {
        // sideDrawer = <SideDrawer />
        backdrop = <Backdrop click={this.backdropClickHandler} />
    }

        return (
            <div className='navbar'>

                <Nav drawerClickHandler={this.drawerToggleClickHandler} navItems={this.props.navItems} 
                  navHeights={this.props.componentTops} 
                  whatHeight={this.props.whatHeight} 
                  featuresHeight={this.props.featuresHeight}
                  betterHeight={this.props.betterHeight}
                  workHeight={this.props.workHeight}
                  faqHeight={this.props.faqHeight}
                />
                <Sidedrawer show={this.state.sideDrawerOpen} navItems={this.props.navItems} />
                {backdrop}

            </div>
        )
    }
}

export default Navbar;


