
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Home from '../components/homepage';
import Jobs from '../components/services/allJobs';
import PostJob from '../components/services/PostJob/PostJob'
import Job from '../components/services/job'
import ServicesHome from '../components/services/homepage/ServicesHome';
import Signup from '../components/services/Signup/signup'

// import Parent from '../components/services/PassData/Parent';

const Routes = (

  <Router>

    <Route exact path="/" component={Home} />
    <Route exact path="/services/jobs" component={Jobs} />
    <Route exact path="/services/postjob" component={PostJob} />
    <Route exact path="/services/jobs/:id" component={Job} />
    <Route exact path="/services" component={ServicesHome} />
    <Route exact path="/signup" component={Signup} />

    {/* <Route exact path="/services/parent" component={Parent} /> */}

  </Router>
)

export default Routes
