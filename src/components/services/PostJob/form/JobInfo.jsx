import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

// Put on change for the text imnputs to update the state back in the main bad boy

class JobType extends Component {

    render() {
        return(
            <div>
                <label>You're looking for</label>
                <TextArea value="Plumber" rows={1} />
                <label>Title of the Job</label>
                <TextArea placeholder="Quick title of job" autosize onChange={this.props.change} name="title" value={this.props.title} />
                <label>Description</label>
                <TextArea placeholder="Detailed description of what needs to be done" rows={4} onChange={this.props.change} name="description" value={this.props.description} />
            </div>
        )
    }
}

export default JobType