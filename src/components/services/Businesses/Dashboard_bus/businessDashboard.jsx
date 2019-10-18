import React, { Component } from 'react';
import BusinessJobs from './../BusinessJobs/businessJobs'

class BusinessDashboard extends Component {

    handleJobClick = (id) => {

        
        let jobId = id
        console.log(jobId)
        this.props.history.push({
            // pathname: '/searchlistings',
            pathname: `/services/businesses/dashboard/jobs/${jobId}`,
            // pathname: `/jobs/${jobId}`,
            // state: {
            //     id: jobId
            // }
        })
    }

    render() {
        return(
            <div>
                <h1>Welcome to the Business dashboard</h1>
                <BusinessJobs jobClick={this.handleJobClick} />
            </div>
        )
    }
}

export default BusinessDashboard