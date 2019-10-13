import React, { Component } from 'react';
import { Input, Checkbox, Switch } from 'antd';

const { TextArea } = Input;

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }

class JobType extends Component {

    render() {
        return(
            <div>
                <label>You're looking for</label>
                <TextArea value={this.props.job} rows={1} />
                <label>Title of the Job</label>
                <TextArea placeholder="Quick title of job" autosize onChange={this.props.change} name="title" value={this.props.title} />
                <label>Description</label>
                <TextArea placeholder="Detailed description of what needs to be done" rows={4} onChange={this.props.change} name="description" value={this.props.description} />
                <Checkbox onChange={onChange}>Is this a reoccuring service</Checkbox>
                <Switch defaultChecked onChange={onChangeSwitch} />
            </div>
        )
    }
}

export default JobType