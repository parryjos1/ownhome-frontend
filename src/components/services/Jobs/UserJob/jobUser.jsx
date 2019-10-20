import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './jobUser.css';

import { Modal, Button, Checkbox } from 'antd';

// const modal = Modal.info();

class JobUser extends Component {

    state = {
        isLoading: true,
        job: null,
        bids: null,
        visible: false, 
        disabled: true,
        modalKey: null,
        modalValue: null
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

    showModal(key, value) {

        console.log('showModal')
        console.log(key)
        console.log(value)
        this.setState({
          visible: true,
          modalKey: key.key,
          modalValue: value.value

        });

      };
    // showModal = (key, value) => {

    //     console.log('showModal')
    //     console.log(key)
    //     console.log(value)
    //     this.setState({
    //       visible: true,
    //     });

    //   };
    
      handleOk = e => {
        console.log(e);
        // this.setState({
        //   visible: false,
        // });

        // Make axios request to move the database

        // redirect to dashboard

        // send message / notification that's it's posted 


      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    //   function onChange(e) {
      onCheckboxChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
        // this.setState({ disabled: false })

        this.setState(prevState => ({
            disabled: !prevState.disabled
          }));

      }

    //   okButton = (e) => {
    //       console.log('what doing brah?')
    //         return JSON({disabled: this.state.disabled})
    //   }

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
                    <h4>The bidders are:</h4>


                   {
                    !isLoading
                    ?
                    // Object.keys(jobs).map(key => <Job key={key} body={jobs[key]} />) 
                    Object.entries(this.state.bids).map(([key,value])=>{
                        return (
                            <div className="bid-ctn">
                                <div>{key} : {value}</div>
                                {/* <button>Select as winner</button> */}

                                {/* <Button type="primary" onClick={this.showModal} onClick={() => showModal({key}, {value})} > */}
                                <Button type="primary"  onClick={() => this.showModal({key}, {value})} >
                                    Select for job
                                </Button>
                        {/* <Modal
                        title="Confirm ____ for job"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        okButtonProps={{ disabled: this.state.disabled }}
                        cancelButtonProps={{ disabled: false }}
                        centered={true}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>{this.props.passedinProps}</p>
                        <p>{key}</p>
                        <p>{value}</p>
                        <Checkbox onChange={this.onCheckboxChange}>Accept Terms and Conditions</Checkbox>
                        </Modal> */}

        

                            </div>
                        );
                      })

                    :
                    <h3>Loading...</h3>
                }   

                    <Modal
                        title="Confirm ____ for job"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        okButtonProps={{ disabled: this.state.disabled }}
                        cancelButtonProps={{ disabled: false }}
                        centered={true}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>{this.state.modalKey}</p>
                        <p>{this.state.modalValue}</p>
                        <Checkbox onChange={this.onCheckboxChange}>Accept Terms and Conditions</Checkbox>
                    </Modal> 

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

