import React, { Component } from 'react';
import './works.css';

class Works extends Component {

    componentDidMount() {
        this.props.getHeight("hiw-colour")
    }

    render() {
        return(
            <div className="hiw-colour" id="hiw-colour">

            <div className="hiw-container">
                <h1>How OwnHome Works</h1>
                <h2>Turn your rent payments into a home</h2>
                <p className="hiw-ctn-text">OwnHome is offering an innovative solution to allow young people to own a home who would otherwise have to save for years to get a traditional mortgage.</p>
                {/* <h3>You choose a home</h3>
                <h3>We buy the home</h3>
                <h3>You rent the home off us</h3>
                <h3>We share the capital gains :)</h3>
                <h4>Find out more</h4> */}

                <div className="how-it-works-ctn">

                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/real-estate (1).svg"} />
                        <p className="hiw-step">Step 1</p>
                        <p className="hiw-title">You choose your home</p>
                        <p className="hiw-card-description-text">Find your perfect home just like you would if you were buying</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/sale-report.svg"} />
                        <p className="hiw-step">Step 2</p>
                        <p className="hiw-title">We handle the purchase</p>
                        <p className="hiw-card-description-text">We take the hassle out of buying. We'll handle all processes with buying. You just need to move in.</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/residential.svg"} />
                        <p className="hiw-step">Step 3</p>
                        <p className="hiw-title">You move into your home</p>
                        <p className="hiw-card-description-text">Move in right away. It's your home now. Make the changes you want. Free to leave anytime.</p>
                    </div>
                    <div className="how-it-works-item">
                        <img className="hiw-card-img" src={"./images/Frontpage/chart.svg"} />
                        <p className="hiw-step">Step 4</p>
                        <p className="hiw-title">We share the gains. 50-50.</p>
                        <p className="hiw-card-description-text">If the value of the property goes up, we split this. 50-50.</p>
                    </div>

                </div>

            </div>
            </div>

        )
    }
}

export default Works

