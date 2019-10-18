import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios';
// import { Route, Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// import { createHashHistory } from 'history'

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

class LoginBusiness extends Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }

      handleChange = (e) => {

        this.props.history.push({
            // pathname: '/searchlistings',
            // pathname: '/services/business/dashboard',
            pathname: '/services'
            // state: {
            //     // job: this.state.job
            // }
        })

      }

      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);

            let body = {
                "email": values.username,
                "password": values.password
            }

                // axios.post("http://localhost:4000/business/login", body, {
                axios.post("http://localhost:4000/users/login", body, {
                    // headers: { Authorization: "Bearer " + authToken }
                })
                .then( res => {
                    // console.log(res.data.token)
                    localStorage.setItem('token', res.data.token); // write
                    // localStorage.getItem('token') // read

                    // Route to business dashboard
                    this.props.reroute()

                })
                .catch(err => console.warn('SELL USER AJAX ERROR!', err) );
          }
        });
      };

    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return(
            <div>
                <h1>Welcome to the business login</h1>
                <button onClick={this.handleChange}>Redirect</button>

                <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
            </div>
        )
    }
}

// export default LoginBusiness
export default Form.create()(LoginBusiness)