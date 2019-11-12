import React, { Component } from 'react';
import './better.css'


class Better extends Component {


    render() {

        return(
            <div>

                <h1>Why we're better than renting</h1>

                <div className="better-containter">

                    <div className="better-OwnHome">
                        <p>OwnHome</p>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>On the housing ladder now</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Skip huge deposit</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Stay long as you like</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Buy the property anytime</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Leave anytime</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>It's your home. Upgrade as you wish</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Aligned incentives</p>
                        </div>

                    </div>
                    <div className="better-Rent-Saving">
                        <p>Renting & Saving</p>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Average 10 years saving</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Large 20% deposit required</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Short term leases with landlord </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Compete against other buyers and investors</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Costly breaking of tennat agreement</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>At mercy of landlords requirements</p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Landlord gain your loss</p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Better
