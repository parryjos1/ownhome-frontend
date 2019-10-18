import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class JobUser extends Component {

    state = {
        isLoading: true,
        job: null,
        bids: null
    }

    componentDidMount() {

        // Get request for jobs
        this.fetchJob();
    
    }

    fetchJob() {
        
        let id = this.props.match.params.id;
        const authToken = localStorage.getItem('token');

        axios({
            method: 'get',
            url: `http://localhost:4000/users/jobs/${id}`,
            headers: { Authorization: "Bearer " + authToken },

        })
        .then(response => {
            console.log(response)
            this.setState({
                job: response.data,
                isLoading: false,
                bids: response.data[0].bids
            })
            
        })
        .catch(error => {
            console.log(error)
        })
    }

    // handleSearch = (value) => {

    //     // 1) submit your bid on it
    //     const id = this.props.match.params.id
    //     const authToken = localStorage.getItem('token');
    //     const price = parseFloat(value)

    //     axios({
    //         method: 'post',
    //         url: `http://localhost:4000/business/jobs/${id}/bid`,
    //         headers: { Authorization: "Bearer " + authToken },
    //         data: {
    //             "price": price,
    //         }
    //     })
    //     .then(response => {
    //         console.log(response)
    //         this.setState({
    //             jobs: response.data,
    //             isLoading: false
    //         })
            
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })

    //     // 2) redirect back to the dashboard (for now) Future --> back to the jobs board

    //         this.props.history.push({
    //         // pathname: '/searchlistings',
    //         // pathname: `/services/businesses/dashboard/jobs/${jobId}`,
    //         pathname: `/services/businesses/dashboard`,
    //         // state: {
    //         //     id: jobId
    //         // }
    //     })

    // }

    // returnBids = () => {

    // }



    render() {

        const { isLoading, job, error } = this.state;

        return ( 
            <div>
                <h1>Welcome to the job page</h1>

                <button>Finish this job</button>

                {
                    !isLoading
                    ?
                    this.state.job.map( j => 
                    <div className="job-business-ctn">
                        <div>{j.service}</div>
                        <div>{j.title}</div>
                        <div>{j.description}</div>
                        {/* <div>{j.bids}</div> */}
                    </div>
                    
                    )
                    :
                    <h3>Loading...</h3>
                } 

                <div className="job-bids-container">
                    <h4>The bidders are: </h4>


                   {
                    !isLoading
                    ?
                    // Object.keys(jobs).map(key => <Job key={key} body={jobs[key]} />) 
                    Object.entries(this.state.bids).map(([key,value])=>{
                        return (
                            <div>{key} : {value}</div>
                        );
                      })

                    // this.state.job.bids.map( b => 
                    // <div className="job-bids-ctn">
                    //     <div>{b}</div>
                    // </div>
                    // )

                    // {
                    //     Object.keys(this.props.data).map(function(key,index) {
                    //       return <li key={index}>{this.props.data[index]}</li>
                    //     }, this)
                    //   }

                //     Object.keys(this.state.bids).map((key,index)=> {
                //         // return <li key={index}>{this.props.data[key]}</li>
                //         return <li key={index}>{this.state.bids[key]}</li>
                //   })

                    :
                    <h3>Loading...</h3>
                }    

            </div>


                {/* <Search
                    placeholder="input search text"
                    enterButton="Bid on this job"
                    size="large"
                    // onSearch={value => console.log(value)}
                    onSearch={value => this.handleSearch(value)}
                    // onClick={value => this.handleSearch(value)}
                /> */}

                <h1>
                    Info on job poster goes here
                </h1>


            </div>
        )
    }
}

export default JobUser;

