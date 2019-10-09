import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MasterForm from './form/MasterForm';

class PostJob extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
      price: 0,
      description: ''
    }


  } // end of constructor

  onChangeTitle = (e) => {
    this.setState({title: e.target.value})
  }
  onChangeCategory = (e) => {
    this.setState({category: e.target.value})
  }
  onChangePrice = (e) => {
    this.setState({price: e.target.value})
  }

  onSubmit = () => {

    let body = {
      title: this.state.title,
      category: this.state.category,
      price: this.state.price,
      description: this.state.description
    }
    axios.post('http://localhost:4000/jobs/new', body)
    .then(res => {
      console.log(res);
    })
  }




  render(){
    return(
      <div>
        <nav>
          <div><Link to="/">Home</Link></div>
        </nav>
        <h3>New a Job</h3>

        <MasterForm />

        

      {/* <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="Title" onChange={this.onChangeTitle} />
        <input type="text" placeholder="Category" onChange={this.onChangeCategory} />
        <input type="text" placeholder="Price" onChange={this.onChangePrice} />
        <input type="text" placeholder="Description" onChange={this.onChangePrice} />
        <input type="submit" />
      </form> */}


      </div>
    )
  }
}

export default PostJob
