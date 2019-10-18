import React, { Component } from 'react';
import UserActiveJobs from './../UserActiveJobs/userActiveJobs'

class UserDashboard extends Component {

    handleJobClick = (id) => {

        
        let jobId = id
        console.log(jobId)
        this.props.history.push({
            // pathname: '/searchlistings',
            pathname: `/services/users/dashboard/jobs/${jobId}`,
            // pathname: `/jobs/${jobId}`,
            // state: {
            //     id: jobId
            // }
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome to the UserDashboard</h1>
                <UserActiveJobs jobClick={this.handleJobClick} />
            </div>
        )
    }
}

export default UserDashboard