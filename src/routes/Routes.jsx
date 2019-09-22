import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from '../components/homepage';
import Jobs from '../components/services/allJobs';
import NewJob from '../components/services/newJob'
import Job from '../components/services/job'

const Routes = (

  <Router>

    <Route exact path="/" component={Home} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/jobs/addjob" component={NewJob} />
    <Route exact path="/jobs/:id" component={Job} />

  </Router>
)

export default Routes
