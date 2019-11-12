import React, { Component } from 'react';
import './faq.css';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const text1 = `
  No 20% downpayment as you would need for a traditional mortgage. Removing one of the biggest barriers to home ownership 
  for first home buyers was very important to us. All you need is 3 months rent as a bond just like you would when you're 
  renting and you're ready to move in!
`
const text2 = `
    Everything is split 50-50. We want this to be as beneficial and fair to you as possible. We're in this together, we 
    split the upside of the property and we also split the costs of the property?
`
const text3 = `
    If the value of the property goes down, you will never pay more than you've already paid. Infact you will still receive
    money back in the form of the equity in the property you've built up to date.
`
const text4 = `
    The purpose of ownhome is to give first home buyers a fairer and faster way to home ownership than the current traditional path. \n
    \n
    In order to stay true to this, this product is only for people who do not currently own property. You will also have to pass an income
    test varing on the cost of the house you want. 
`
const text5 = `
    Yes. However there is a reason renting is cheaper. With Ownhome you get access to the capital gains in the property. Theoretically the gains 
    could outsize what you pay, meaning in essence, you could rent for free. With traditional renting, it's 100% dead money. 
`
const text6 = `
    We make money two ways. First in the appreciation of the property we share with you. We believe that in the short term markets can be volatile 
    however in the long term housing has always strongly appreciated. The second way is we charge a small fee. We think this is the best way to make sure
    our incentives are aligned and we can be as transparent as possible. We do not make any money from sourcing the funds to buy the house. 
`

class Faq extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         'isHidden1': false,
    //         'isHidden2': false,
    //         'isHidden3': false,
    //         'isHidden4': false,
    //         'prevOpen': ''
    //     }
    // }


    // buttonClick = (event) => {
    //     const divToChange = event.target.id;
    //     const prevOpenFaq = this.state.prevOpen;

    //     console.log(`${divToChange} div to change`)
    //     console.log(`${prevOpenFaq} prevOpenFaq`)

    //     // Close the previous open FAQ
    //     this.setState(prevState => ({
    //         [prevOpenFaq]: !prevState[prevOpenFaq]
    //     }));

    //     // Open the new FAQ
    //     this.setState(prevState => ({
    //         [divToChange]: !prevState[divToChange]
    //     }));

    //     // Update current open FAQ
    //     this.setState({prevOpen: divToChange})

    // }


    render() {
        return(
            <div className='faq-containter'>
                <h1>Most frequently asked questions</h1>

                <Collapse accordion>
                    <Panel header="What deposit do I need?" key="1">
                    <p>{text1}</p>
                    </Panel>
                    <Panel header="Who pays for the costs?" key="2">
                    <p>{text2}</p>
                    </Panel>
                    <Panel header="What happens if the house value goes down" key="3">
                    <p>{text3}</p>
                    </Panel>
                    <Panel header="What are your eligibility criteria" key="4">
                    <p>{text4}</p>
                    </Panel>
                    <Panel header="Is this more expensive than renting?" key="5">
                    <p>{text5}</p>
                    </Panel>
                    <Panel header="How does OwnHome make money?" key="6">
                    <p>{text6}</p>
                    </Panel>
                </Collapse>





                {/* My own FAQ Table - Depreciated */}
                {/* <div className='faq-table'>
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

                </div> */}


            </div>
        )
    }
}

export default Faq