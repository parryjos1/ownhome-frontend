import React, { Component } from 'react';
import './faq.css';

class Faq extends Component {

    constructor() {
        super()
        this.state = {
            'isHidden1': false,
            'isHidden2': false,
            'isHidden3': false,
            'isHidden4': false,
            'prevOpen': ''
        }
    }



    buttonClick = (event) => {
        const divToChange = event.target.id;
        const prevOpenFaq = this.state.prevOpen;

        console.log(`${divToChange} div to change`)
        console.log(`${prevOpenFaq} prevOpenFaq`)

        // Close the previous open FAQ
        this.setState(prevState => ({
            [prevOpenFaq]: !prevState[prevOpenFaq]
        }));

        // Open the new FAQ
        this.setState(prevState => ({
            [divToChange]: !prevState[divToChange]
        }));

        // Update current open FAQ
        this.setState({prevOpen: divToChange})

        // this.setState({prevOpen: divToChange})

        // if (divToChange === prevOpenFaq) {

        //     this.setState(prevState => ({
        //         [divToChange]: !prevState[divToChange]
        //     }));

            
        // } else {

        //     // Close the previous open FAQ
        //     this.setState(prevState => ({
        //         [prevOpenFaq]: !prevState[prevOpenFaq]
        //     }));
    
        //     // Open the new FAQ
        //     this.setState(prevState => ({
        //         [divToChange]: !prevState[divToChange]
        //     }));
    
        //     // Update current open FAQ
        //     // this.setState({prevOpen: divToChange})
        // }


    }


    render() {
        return(
            <div className='faq-containter'>
                <h1>Frequently Asked Questions</h1>
                <div className='faq-table'>
                    <div className='faq-row'>
                        <div className='faq-question'>
                            <h3>What is OwnHome</h3>
                            <button className='faq-toggle' id='isHidden1' onClick={this.buttonClick}>^</button>
                        </div>
                        {
                            this.state.isHidden1 ?
                            <div className='faq-answer'>
                            <p>OwnHome is a new product to enable home ownership that enables millenials to actually get 
                                on the housing ladder and afford a new home sooner. 
                            </p>
                        </div>
                        : 
                        null
                        }
                    </div>

                    <div className='faq-row'>
                        <div className='faq-question'>
                            <h3>What is OwnHome</h3>
                            <button className='faq-toggle' id='isHidden2' onClick={this.buttonClick}>^</button>
                        </div>
                        {
                            this.state.isHidden2 ?
                            <div className='faq-answer'>
                            <p>OwnHome is a new product to enable home ownership that enables millenials to actually get 
                                on the housing ladder and afford a new home sooner. 
                            </p>
                        </div>
                        : 
                        null
                        }
                    </div>

                    <div className='faq-row'>
                        <div className='faq-question'>
                            <h3>What is OwnHome</h3>
                            <button className='faq-toggle' id='isHidden3' onClick={this.buttonClick}>^</button>
                        </div>
                        {
                            this.state.isHidden3 ?
                            <div className='faq-answer'>
                            <p>OwnHome is a new product to enable home ownership that enables millenials to actually get 
                                on the housing ladder and afford a new home sooner. 
                            </p>
                        </div>
                        : 
                        null
                        }
                    </div>

                    <div className='faq-row'>
                        <div className='faq-question'>
                            <h3>What is OwnHome</h3>
                            <button className='faq-toggle' id='isHidden4' onClick={this.buttonClick}>^</button>
                        </div>
                        {
                            this.state.isHidden4 ?
                            <div className='faq-answer'>
                            <p>OwnHome is a new product to enable home ownership that enables millenials to actually get 
                                on the housing ladder and afford a new home sooner. 
                            </p>
                        </div>
                        : 
                        null
                        }
                    </div>

                </div>


            </div>
        )
    }
}

export default Faq