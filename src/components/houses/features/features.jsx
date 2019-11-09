import React, { Component } from 'react';
import './features.css'

class Features extends Component {


    render() {

        return(
            <div>
                <h1>Key Features</h1>

                <div className='feature-container'>

                        <div>
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Feature Title</h1>
                            <p>explainer section on why the feature is so good</p>
                        </div>
                        <div>
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Feature Title</h1>
                            <p>explainer section on why the feature is so good</p>
                        </div>
                        <div>
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Feature Title</h1>
                            <p>explainer section on why the feature is so good</p>
                        </div>
                        <div>
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Feature Title</h1>
                            <p>explainer section on why the feature is so good</p>
                        </div>

                </div>

        
            </div>
        )
    }
}

export default Features