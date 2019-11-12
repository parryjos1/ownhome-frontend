import React, { Component } from 'react';
import './features.css'

class Features extends Component {


    render() {

        return(
            <div>
                <h1 id="features-heading">Best key features</h1>

                <div className='feature-container'>

                        <div className="feature-ctn-item">
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>No Deposit.</h1>
                            {/* <h1>No Downpayment</h1> */}
                            <p>The average deposit now takes 10 years to save. Don't wait around paying dead money. Move into your home from day 1.</p>
                        </div>
                        <div className="feature-ctn-item">
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Choose your home.</h1>
                            <p>You choose the home you want to live in, we handly the purchase. We even split the costs!</p>
                        </div>
                        <div className="feature-ctn-item">
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Build up wealth.</h1>
                            <p>Start building up wealth from the first day you move in.</p>
                        </div>
                        <div className="feature-ctn-item">
                            <img className="feature-card-img" src={"./images/Frontpage/hand.svg"} />
                            <h1>Make it your own.</h1>
                            <p>You have the freedom to paint the walls, change the carpet or get a pet. It's your home!</p>
                        </div>

                </div>

        
            </div>
        )
    }
}

export default Features