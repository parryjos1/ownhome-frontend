import React, { Component } from 'react';
import './what.css'

class What extends Component {


    render() {

        return(
            <div className="what-container">
                <div className="what-ctn-contents">

                {/* <h1>Reviving the Australian Dream</h1> */}
                <h1>Making home ownership achievable</h1>

                <div className="what-ctn-item">
                    <div>
                        <img className="what-card-img" src={"./images/Frontpage/hand.svg"} />
                    </div>
                    <div className="what-card-text">
                        <h2>Affordability Crisis.</h2>
                        {/* <p>Housing affordability is at historic lows. It's never been tougher for first home buyers</p> */}
                        <p>Housing prices are at historic highs and set to stay there. It's never been tougher for first home buyers</p>
                    </div>
                </div>

                <div className="what-ctn-item">
                    <div className="what-card-text">
                        <h2>Our solution.</h2>
                        {/* <p>Letting renters build wealth by giving them access to the capital gains of the property. until they're ready to buy</p>
                        <p>Split the capital gains with our renters until they're ready to buy. Move in </p> */}
                        <p>Flipping the housing model to be more equitable/fair. We give renters a 50/50 cut of the gains of the property. Build wealth when the house goes up until you're ready to buy or leave anytime with no consequences.</p>
                    </div>
                    <div>
                        <img className="what-card-img" src={"./images/Frontpage/hand.svg"} />
                    </div>
                </div>





                {/* <h3>Ownhome gives renters access to capital gains. Move in today. Zero Deposit</h3>
                <h3>Ownhome gives renters access to capital gains in their property so everyone can start building wealth from their home</h3>
                <h3>We're pioneering a new form of / property relationship where the costs are split and the gains are shared. More equitable.</h3>
                <h3>Turning your rent into your home</h3>
                <h3>Live in your home. Share the gains. Split the costs. Leave whenever. Buy Whenever.</h3>
                <h3>Pioneering a new path to home ownership for the next generation</h3>
                <h3>Move in now. Split the costs & split the gains. Don't let your rent be dead money. Use it to own a home sooner.</h3>
                <h3>A newer, fairer path to homeownership</h3>
                <h3>By First home buyers, for first home buyers.</h3>
                <h3>Renting is dead money. Start building ownership from the first day.</h3> */}


                {/* <h3>We're pioneering a new model of home ownership to help more people afford a home sooner</h3>
                <h4>Insert Picture here</h4>

                {/* OwnHome is pioneering a new model of homeownership that works for the new generation of first home buyers facing historicly high. 

A housing affordability crisis calls for new paths to ownership 
A housing affordability crisis calls for new paths to ownership 

Crisis calls for Change. 

Affordability Crisis. A solution. 

Own a home sooner & easier. 



Affordability Crisis. 

A solution. 

By first home buyers, for first home buyers. 
we're creating a solution we wish existed. 

Own a home sooner & easier.  */}


        
                </div>
                <div className="what-statement">
                        <h2>By first home buyers, for first home buyers.</h2>
                        <p>Housing affordability is at historic lows. First home buyers have never had it harder to get on the ladder</p>
                </div>
            </div>
        )
    }
}

export default What