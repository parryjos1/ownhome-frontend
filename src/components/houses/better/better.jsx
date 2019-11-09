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
                            <p>Lorem ipsem </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Lorem ipsem </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Lorem ipsem </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/checked.svg"} />
                            <p>Lorem ipsem </p>
                        </div>

                    </div>
                    <div className="better-Rent-Saving">
                        <p>Renting</p>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Lorem ipsem </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Lorem ipsem </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Lorem ipsem </p>
                        </div>
                        <div className="better-ctn-item">
                            <img className="better-card-img" src={"./images/Frontpage/error.svg"} />
                            <p>Lorem ipsem </p>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Better
