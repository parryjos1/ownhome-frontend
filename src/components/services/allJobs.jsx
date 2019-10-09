import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Jobs extends Component {

  constructor(props){
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = () => {
    axios.get('http://localhost:4000/jobs')
    .then(res => {
      // console.log(res);
      this.setState({jobs: res.data})
    })
  }


  // How to do it with async await
//   getUsers = async () => {
//     let res = await axios.get("https://reqres.in/api/users?page=1");
//     let { data } = res.data;
//     this.setState({ users: data });
// };

  addJob = () => {
    console.log('add!');
  }

  render(){
    return(
      <div>
        <nav>
          <div><Link to="/">Home</Link></div>
        </nav>
        <h3>Welcome to the Jobs page</h3>

      <Link to="/jobs/addjob"><button>Add New Job</button></Link>
      <br />
      <br />

        {
          this.state.jobs.length > 0
          ?
          this.state.jobs.map(j =>
            <div>
            <div><Link to={'/services/jobs/:id' + j._id}>{j.title}</Link></div>
            <div>{j.category}</div>
            <div>{j.price}</div>
            <br />
            </div>
          )
          :
          <div>Loading...</div>
        }

      </div>
    )
  }
}

export default Jobs
