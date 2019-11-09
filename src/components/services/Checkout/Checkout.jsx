import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './Checkout.css';

class Checkout extends Component {

    processPayment = async (token) => {
        console.log(token)

        // let body = {
        //     token: token,
        //     amount: this.props.location.state.amount,
        //     business: this.props.location.state.business,
        //     user: this.props.location.state.userId
        // }

        let thisToken = token

        // console.log(body)

        let authToken = await localStorage.getItem('token')
        // let response = await fetch("/charge", {
        let response = await fetch("http://localhost:4000/payment/stripe/account/connectcharge", {
            method: "POST",
            // headers: {"Content-Type": "text/plain"},
            // headers: { Authorization: "Bearer " + authToken, "Content-Type": "text/plain" },
            headers: { Authorization: "Bearer " + authToken, 'Content-Type': 'application/json'},
            // body: body
            body: JSON.stringify({
                token: thisToken,
                amount: this.props.location.state.amount,
                business: this.props.location.state.business,
                jobId: this.props.location.state.jobId
            })
            // body: test
            // body: body

          })

          // TODO: BUG --> Will redirect even if there is an error.... 
          // Maybe use some form of state --> with a try / catch block 
          // Redirect to do differenbt page if there is still an error
                      this.props.history.push({
              pathname: '/services/users/dashboard'
              // state: {
              //     // job: this.state.job
              // }
            })

          
          // .then( response => {
          //   // console.log('Purchase complete!')
          //   this.props.history.push({
          //     pathname: '/services/businesses/dashboard'
          //     // state: {
          //     //     // job: this.state.job
          //     // }
          //   })

          // })
          // .catch( error => {
          //   console.log(error)
          // })
        // });
        
        // if (response.ok) console.log("Purchase Complete!")

        // if (response.ok) {

        //   // console.log('flabba wabba')

        //       this.props.history.push({
        //         pathname: '/services/users/dashboard'
        //         // state: {
        //         //     // job: this.state.job
        //         // }
        //     })
          
        // }

    }

  render() {
    return (
      <StripeProvider apiKey="pk_test_3Cg5Y9KiwPfXxupQKNWy9hCU00ebT5E2zk">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm purchaseClick={this.processPayment} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;






// import React, {Component} from 'react';
// // import {Elements, StripeProvider} from 'react-stripe-elements';
// const {
// 	CardElement,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCVCElement,
//   PostalCodeElement,
//   PaymentRequestButtonElement,
//   IbanElement,
//   IdealBankElement,
//   StripeProvider,
//   Elements,
//   injectStripe,
// } = ReactStripeElements;

// const handleBlur = () => {
//   console.log('[blur]');
// };
// const handleChange = (change) => {
//   console.log('[change]', change);
// };
// const handleClick = () => {
//   console.log('[click]');
// };
// const handleFocus = () => {
//   console.log('[focus]');
// };
// const handleReady = () => {
//   console.log('[ready]');
// };

// const createOptions = (fontSize, padding) => {
//   return {
//     style: {
//       base: {
//         fontSize,
//         color: '#424770',
//         letterSpacing: '0.025em',
//         fontFamily: 'Source Code Pro, monospace',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//         padding,
//       },
//       invalid: {
//         color: '#9e2146',
//       },
//     },
//   };
// };

// class Checkout extends React.Component {
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (this.props.stripe) {
//       this.props.stripe
//         .createToken()
//         .then((payload) => console.log('[token]', payload));
//     } else {
//       console.log("Stripe.js hasn't loaded yet.");
//     }
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Card details
//           <CardElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//         </label>
//         <button>Pay</button>
//       </form>
//     );
//   }
// }
// // const CardForm = injectStripe(Checkout);
// const Checkout = injectStripe(Checkout);

// export default Checkout

// class _SplitForm extends React.Component {
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (this.props.stripe) {
//       this.props.stripe
//         .createToken()
//         .then((payload) => console.log('[token]', payload));
//     } else {
//       console.log("Stripe.js hasn't loaded yet.");
//     }
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Card number
//           <CardNumberElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//         </label>
//         <label>
//           Expiration date
//           <CardExpiryElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//         </label>
//         <label>
//           CVC
//           <CardCVCElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//         </label>
//         <label>
//           Postal code
//           <PostalCodeElement
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//         </label>
//         <button>Pay</button>
//       </form>
//     );
//   }
// }
// const SplitForm = injectStripe(_SplitForm);

// class _PaymentRequestForm extends React.Component {
//   constructor(props) {
//     super(props);

//     const paymentRequest = props.stripe.paymentRequest({
//       country: 'US',
//       currency: 'usd',
//       total: {
//         label: 'Demo total',
//         amount: 1000,
//       },
//     });

//     paymentRequest.on('token', ({complete, token, ...data}) => {
//       console.log('Received Stripe token: ', token);
//       console.log('Received customer information: ', data);
//       complete('success');
//     });

//     paymentRequest.canMakePayment().then((result) => {
//       this.setState({canMakePayment: !!result});
//     });

//     this.state = {
//       canMakePayment: false,
//       paymentRequest,
//     };
//   }

//   render() {
//     return this.state.canMakePayment ? (
//       <PaymentRequestButtonElement
//         className="PaymentRequestButton"
//         onBlur={handleBlur}
//         onClick={handleClick}
//         onFocus={handleFocus}
//         onReady={handleReady}
//         paymentRequest={this.state.paymentRequest}
//         style={{
//           paymentRequestButton: {
//             theme: 'dark',
//             height: '64px',
//             type: 'donate',
//           },
//         }}
//       />
//     ) : null;
//   }
// }
// const PaymentRequestForm = injectStripe(_PaymentRequestForm);

// class _IbanForm extends React.Component {
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (this.props.stripe) {
//       this.props.stripe
//         .createSource({
//           type: 'sepa_debit',
//           currency: 'eur',
//           owner: {
//             name: ev.target.name.value,
//             email: ev.target.email.value,
//           },
//           mandate: {
//             notification_method: 'email',
//           },
//         })
//         .then((payload) => console.log('[source]', payload));
//     } else {
//       console.log("Stripe.js hasn't loaded yet.");
//     }
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input name="name" type="text" placeholder="Jane Doe" required />
//         </label>
//         <label>
//           Email
//           <input
//             name="email"
//             type="email"
//             placeholder="jane.doe@example.com"
//             required
//           />
//         </label>
//         <label>
//           IBAN
//           <IbanElement
//             supportedCountries={['SEPA']}
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize)}
//           />
//         </label>
//         <button>Pay</button>
//       </form>
//     );
//   }
// }
// const IbanForm = injectStripe(_IbanForm);

// class _IdealBankForm extends React.Component {
//   handleSubmit = (ev) => {
//     ev.preventDefault();
//     if (this.props.stripe) {
//       this.props.stripe
//         .createSource({
//           type: 'ideal',
//           amount: 1099,
//           currency: 'eur',
//           owner: {
//             name: ev.target.name.value,
//           },
//           redirect: {
//             return_url: 'https://example.com',
//           },
//         })
//         .then((payload) => console.log('[source]', payload));
//     } else {
//       console.log("Stripe.js hasn't loaded yet.");
//     }
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input name="name" type="text" placeholder="Jane Doe" required />
//         </label>
//         <label>
//           iDEAL Bank
//           <IdealBankElement
//             className="IdealBankElement"
//             onBlur={handleBlur}
//             onChange={handleChange}
//             onFocus={handleFocus}
//             onReady={handleReady}
//             {...createOptions(this.props.fontSize, '10px 14px')}
//           />
//         </label>
//         <button>Pay</button>
//       </form>
//     );
//   }
// }
// const IdealBankForm = injectStripe(_IdealBankForm);

// class Checkout extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
//     };
//     window.addEventListener('resize', () => {
//       if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
//         this.setState({elementFontSize: '14px'});
//       } else if (
//         window.innerWidth >= 450 &&
//         this.state.elementFontSize !== '18px'
//       ) {
//         this.setState({elementFontSize: '18px'});
//       }
//     });
//   }

//   render() {
//     const {elementFontSize} = this.state;
//     return (
//       <div className="Checkout">
//         <h1>Available Elements</h1>
//         <Elements>
//           <CardForm fontSize={elementFontSize} />
//         </Elements>
//         <Elements>
//           <SplitForm fontSize={elementFontSize} />
//         </Elements>
//         <Elements>
//           <PaymentRequestForm />
//         </Elements>
//         <Elements>
//           <IbanForm fontSize={elementFontSize} />
//         </Elements>
//         <Elements>
//           <IdealBankForm fontSize={elementFontSize} />
//         </Elements>
//       </div>
//     );
//   }
// }
// const App = () => {
//   return (
//     <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
//       <Checkout />
//     </StripeProvider>
//   );
// };
// ReactDOM.render(<App />, document.querySelector('.App'));
