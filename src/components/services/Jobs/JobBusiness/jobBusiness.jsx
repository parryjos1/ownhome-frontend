import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Input } from 'antd';
import { callExpression } from '@babel/types';
const { Search } = Input;

class JobBusiness extends Component {

    state = {
        isLoading: true,
        job: null
    }

    componentDidMount() {

        // Get request for jobs
        this.fetchJob();
    
    }

    fetchJob() {
        let id = this.props.match.params.id;
        axios({
            method: 'get',
            url: `http://localhost:4000/business/jobs/${id}`,

        })
        .then(response => {
            console.log(response)
            this.setState({
                job: response.data,
                isLoading: false
            })
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleSearch = (value) => {

        // 1) submit your bid on it
        const id = this.props.match.params.id
        const authToken = localStorage.getItem('token');
        const price = parseFloat(value)

        axios({
            method: 'post',
            url: `http://localhost:4000/business/jobs/${id}/bid`,
            headers: { Authorization: "Bearer " + authToken },
            data: {
                "price": price,
            }
        })
        .then(response => {
            console.log(response)
            this.setState({
                jobs: response.data,
                isLoading: false
            })
            
        })
        .catch(error => {
            console.log(error)
        })

        // 2) redirect back to the dashboard (for now) Future --> back to the jobs board

            this.props.history.push({
            // pathname: '/searchlistings',
            // pathname: `/services/businesses/dashboard/jobs/${jobId}`,
            pathname: `/services/businesses/dashboard`,
            // state: {
            //     id: jobId
            // }
        })

    }

    // const authToken = localStorage.getItem('token');
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:4000/business/jobs',
    //         headers: { Authorization: "Bearer " + authToken }
    //         // data: {
    //         // firstName: 'Finn',
    //         // lastName: 'Williams'
    //         // }
    //     })
    //     .then(response => {
    //         // console.log(response)
    //         this.setState({
    //             jobs: response.data,
    //             isLoading: false
    //         })
            
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

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

        const { isLoading, job, error } = this.state;

        return ( 
            <div>
                <h1>Welcome to the job page</h1>

                <button>Put bid on this job</button>

                {
                    !isLoading
                    ?
                    this.state.job.map( j => 
                    <div className="job-business-ctn">
                        <div>{j.service}</div>
                        <div>{j.title}</div>
                        <div>{j.description}</div>
                    </div>
                    
                    )
                    :
                    <h3>Loading...</h3>
                }

                <Search
                    placeholder="input search text"
                    enterButton="Bid on this job"
                    size="large"
                    // onSearch={value => console.log(value)}
                    onSearch={value => this.handleSearch(value)}
                    // onClick={value => this.handleSearch(value)}
                />

                <h1>
                    Info on job poster goes here
                </h1>

                <h1>Related jobs go here</h1>

            </div>
        )
    }
}

export default JobBusiness

