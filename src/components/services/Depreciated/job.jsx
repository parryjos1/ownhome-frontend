import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Job extends Component {

  constructor(props) {
    super(props)
    this.state = {
      job: []
    }
  }

  componentDidMount(){

    axios.post('http://localhost:4000/job', {
      id: this.props.match.params.id
    })
    .then((response) => {
      console.log(response);
      this.setState({ job: response.data[0]})
    }, (error) => {
      console.log(error);
    });

    // axios.get('http://localhost:4000/job')
    // .then(res => {
    //   // console.log(res);
    //   this.setState({job: res.data})
    // })
  }

  render() {
    return(
      <div>
        <nav>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/jobs">All Jobs</Link></div>
        </nav>

        <h1>Job page</h1>
        <button>Edit Job</button>
        <button>Delete Job</button>

        <ul>
          <li>{this.state.job.title}</li>
          <li>{this.state.job.category}</li>
          <li>{this.state.job.price}</li>
        </ul>
      </div>
    )
  }
}

export default Job
