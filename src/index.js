
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes/Routes';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-152512781-1');

// function initializeReactGA() {
//     ReactGA.initialize('UA-152512781-1');
//     ReactGA.pageview('/homepage');
// }

ReactDOM.render(Routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
