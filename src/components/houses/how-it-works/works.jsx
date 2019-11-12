import React, { Component } from 'react';
import './works.css';

class Works extends Component {

    render() {
        return(
            <div>
                <h1>How OwnHome Works</h1>
                <h2>Turn your rent payments into a home</h2>
                <p>OwnHome is offering an innovative solution to allow young people to own a home who would otherwise have to save for years to get a traditional mortgage.</p>
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
                        <p>Find your perfect home just like you would if you were buying</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 2</p>
                        <p>We handle the purchase</p>
                        <p>We take the hassle out of buying. We'll handle all processes with buying. You just need to move in.</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 3</p>
                        <p>You move into your home</p>
                        <p>Move in right away. It's your home now. Make the changes you want. Free to leave anytime.</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/hand.svg"} />
                        <p>Step 4</p>
                        <p>We share the gains. 50-50.</p>
                        <p>If the value of the property goes up, we split this. 50-50.</p>
                    </div>

                </div>

            </div>
        )
    }
}

export default Works

