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

                <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
                <Sidedrawer show={this.state.sideDrawerOpen}/>
                {backdrop}

            </div>
        )
    }
}

export default Navbar;