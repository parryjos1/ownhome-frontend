import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

    }

    // componentDidMount() {

    //     this.handleParentState();
    
    //   }
    
    // // Updates State of the Service
    //   handleParentState = () => {
    //     this.setState({service: this.props.location.state.job})
    //   }

    // https://stripe.com/docs/connect/testing
    // TO_DELETE
    // TEST CARD AUSTRALIA 4000000360000006
    // TEST MASTERCARD: 5200828282828210 --> not sure if works
    // TEST VISA: 4000056655665556 --> not sure if works
    async submit(ev) {
        // TODO: Fix the TESTNAME --> Name should be coming from the actual user I think
        let {token} = await this.props.stripe.createToken({name: "TestName"});
        // const {token, error} = await this.props.stripe.createToken(ev);
        // console.log(ev)

        // Pass the Token back up to the Checkout
        // this.props.purchaseClick(token.id), function( err, purchased) {
        this.props.purchaseClick(token.id, function( err, purchased) {

            if ( err ) {
                console.log('There is an error in submitting the payment')
                console.log(err)
            } else {
                console.log("Purchase succesfful from the checkoutform")
                this.props.history.push({
                    pathname: '/services/users/dashboard'
                    // state: {
                    //     // job: this.state.job
                    // }
                })
            }
        })

        // this.props.history.push({
        //     pathname: '/services/businesses/dashboard'
        //     // state: {
        //     //     // job: this.state.job
        //     // }
        // })


        // if (response.ok) {

        //     console.log('hello from the checkoutform')
            
        //   }
        // .then( response => {
        //     // console.log('Purchase complete!')
        //     this.props.history.push({
        //       pathname: '/services/businesses/dashboard'
        //       // state: {
        //       //     // job: this.state.job
        //       // }
        //     })

        //   })
        //   .catch( error => {
        //     console.log(error)
        //   })

        // let body = await this.props.location.state
        // console.log(body)
        // let body = await {
        //     token: token.id,
        //     amount: this.props.location.state.amount,
        //     amount: this.props.location.state.amount,
        //     business: this.props.location.state.business,
        //     user: this.props.location.state.userId
        // }

        // let authToken = await localStorage.getItem('token')
        // // let response = await fetch("/charge", {
        // let response = await fetch("http://localhost:4000/payment/stripe/account/connectcharge", {
        //     method: "POST",
        //     // headers: {"Content-Type": "text/plain"},
        //     // headers: { Authorization: "Bearer " + authToken, "Content-Type": "text/plain" },
        //     headers: { Authorization: "Bearer " + authToken, 'Content-Type': 'application/json'},
        //     body: token.id
        //     // body: test
        //     // body: body
        // });
        
        // if (response.ok) console.log("Purchase Complete!")

        }

    render() {
    return (
        <div className="checkout">

            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={this.submit}>Purchase</button>

        </div>
    );
    }
}

export default injectStripe(CheckoutForm);