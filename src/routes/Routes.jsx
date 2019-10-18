
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Home from '../components/homepage';
import Jobs from '../components/services/Depreciated/allJobs';
import PostJob from '../components/services/PostJob/PostJob'
import Job from '../components/services/Depreciated/job'
import ServicesHome from '../components/services/Homepage/ServicesHome';
import Signup from '../components/services/Signup/signup';
import Login from '../components/services/Login/login';
import BusinessJobs from '../components/services/Businesses/BusinessJobs/businessJobs';
import JobBusiness from '../components/services/Jobs/JobBusiness/jobBusiness';
import BusinessDashboard from '../components/services/Businesses/Dashboard_bus/businessDashboard';

import UserDashboard from '../components/services/Users/UserDashboard/userDashboard'
import JobUser from '../components/services/Jobs/UserJob/jobUser'

// import Parent from '../components/services/PassData/Parent';

const Routes = (

  <Router>

    <Route exact path="/" component={Home} />
    <Route exact path="/services/jobs" component={Jobs} />
    <Route exact path="/services/postjob" component={PostJob} />
    <Route exact path="/services/jobs/:id" component={Job} />
    <Route exact path="/services" component={ServicesHome} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/services/businesses/dashboard/jobs" component={BusinessJobs} />
    <Route exact path="/services/businesses/dashboard/jobs/:id" component={JobBusiness} />
    <Route exact path="/services/businesses/dashboard" component={BusinessDashboard} />

    <Route exact path="/services/users/dashboard" component={UserDashboard} />
    <Route exact path="/services/users/dashboard/jobs/:id" component={JobUser} />

  </Router>
)

export default Routes
