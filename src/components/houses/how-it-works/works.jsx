import React, { Component } from 'react';
import './works.css';

class Works extends Component {

    render() {
        return(
            <div>
                <h1>How OwnHome Works</h1>
                <h2>Turn your rent payments into a home</h2>
                {/* <h3>You choose a home</h3>
                <h3>We buy the home</h3>
                <h3>You rent the home off us</h3>
                <h3>We share the capital gains :)</h3>
                <h4>Find out more</h4> */}

                <div className="how-it-works-ctn">

                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 1</p>
                        <p>You choose your home</p>
                        <p>Select the house you want to live in now</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 2</p>
                        <p>You choose your home</p>
                        <p>Select the house you want to live in now</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 3</p>
                        <p>You choose your home</p>
                        <p>Select the house you want to live in now</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 4</p>
                        <p>You choose your home</p>
                        <p>Select the house you want to live in now</p>
                    </div>

                </div>

            </div>
        )
    }
}

export default Works

