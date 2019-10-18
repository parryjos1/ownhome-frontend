import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './businessJobs.css'

class BusinessJobs extends Component {

    state = {
        isLoading: true,
        jobs: null,
        error: null
    }

    componentDidMount() {

    // Get request for jobs
    this.fetchJobs();

    }

    fetchJobs() {
        const authToken = localStorage.getItem('token');
        axios({
            method: 'get',
            url: 'http://localhost:4000/business/jobs',
            headers: { Authorization: "Bearer " + authToken }
            // data: {
            // firstName: 'Finn',
            // lastName: 'Williams'
            // }
        })
        .then(response => {
            // console.log(response)
            this.setState({
                jobs: response.data,
                isLoading: false
            })
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    // handleClick = (id) => {

        
    //     let jobId = id
    //     console.log(jobId)
    //     this.props.history.push({
    //         // pathname: '/searchlistings',
    //         // pathname: `/services/businesses/dashboard/jobs/${jobId}`,
    //         pathname: `/jobs/${jobId}`,
    //         // state: {
    //         //     id: jobId
    //         // }
    //     })
    // }

    render() {

        const { isLoading, jobs, error } = this.state;

        return(
            <div>
                <h1>Welcome to the business component</h1>

                {/* {
                    !isLoading ? 
                    Object.keys(jobs).map(key => <Job key={key} body={jobs[key]} />) 
                    : <h3>Loading...</h3>
                } */}

                {
                    !isLoading
                    ?
                    this.state.jobs.map( j => 
                    // <div className="business-jobs-ctn" onClick={() => this.handleClick(j._id)}>
                    <div className="business-jobs-ctn" onClick={() => this.props.jobClick(j._id)}>
                        <div>{j.service}</div>
                        <div>{j.title}</div>
                        <div>{j.description}</div>
                    </div>
                    
                    )
                    :
                    <h3>Loading...</h3>
                }
            </div>
        )
    }
}

export default BusinessJobs


