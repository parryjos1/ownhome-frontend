import React, { Component } from 'react';
import './blogHome.css';
import BlogFramework from './blogFramework'
import SaveDepositSixMonths from './blogContents/how-to-save-for-a-deposit-in-6-months'

class BlogHome extends Component {

    render() {

        return (
            <div>
                <h1>Hello from the blog component</h1>

                <div className="blog-header">

                </div>

                <div className="blogs-container">

                {/* <BlogFramework /> */} 
                <SaveDepositSixMonths />


                </div>

            </div>
        )
    }

}

export default BlogHome;
