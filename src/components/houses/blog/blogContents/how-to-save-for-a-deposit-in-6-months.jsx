import React, { Component } from 'react';
import './blogContents.css';
import FinalSignup from '../../final-signup/finalSignup';
import MailChimp from '../../Mailchimp/mailchimp'

function SaveDepositSixMonths (){
    return (
        <div className="blog-container">

            <div className="blog-title">
                <p>How to save for a house deposit in 6 months</p>
            </div>
            <div className="blog-social">
                {/* <p>Facebook, twitter, instagram</p> */}
            </div>
            <div className="blog-contents">

                <p id="content-title"> Option 1: Save $7650 per week.</p>    

                <div>
                    <p>
                        Depressing isn’t it. Taking our home city of Sydney as an example, in order to save up a 20% deposit for the average home price $918,000 (Syd 2019, Corelogic) you would need to squirrel away $7650 every week for 6 months or in total $183,600.
                    </p>

                    <p>
                        Most banks won’t let you take out a mortgage without a 20% deposit or if they do you’ll have to pay for Mortgage Lending insurance. 
                        Based off ATO calculators, we estimate that to achieve this a household would have to have at a minimum pre-tax annual income of $750,000

                    </p>

                </div>

            
                <p id="content-title">Option 2: OwnHome. Good income? Low savings? Move in right away no deposit</p>


                <div>

                    <p>
                        We’re a new company of people that are experiencing the pain of saving for a house to.
                    </p>
                    <p>
                        Our mission is to tackle housing affordability and disrupt renting for people ready to buy.
                    </p>
                    <p>
                        If you’re earning a good salary but are just starting your homeownership journey why should you spend the average 12 years it takes to save for a deposit while the property market moves further out of reach like a moving target.
                    </p>
                    <p>
                        Our aim is simple.  Don’t Rent. Own. 
                    </p>
                    <p>
                        Here’s how it works in 4 simple steps:
                    </p>
                    <ol>
                        <li>Choose the home you want to buy</li>
                        <li>We handle all purchase and legal work</li>
                        <li>You move into YOUR new home</li>
                        <li>We split the appreciation of the home 50-50. As partners.</li>
                    </ol>
                    <p>
                        Simple as that. No saving for 12 years, no renting or dealing with landlords. Make your home today and when you’re ready should you want you can buy the home off us.
                        If you want to find out more check out our page
                    </p>


                </div>


            </div>

            <div className="blog-signup">
                <p>We're launcing in the very near future. Be one of the first to know. Sign up below!</p>
                <MailChimp />

            </div>

            {/* <FinalSignup /> */}

        </div>

    )
}

export default SaveDepositSixMonths