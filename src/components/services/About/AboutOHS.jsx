import React, { Component } from 'react';
import './AboutOHS.css'

import { Card } from 'antd';

const { Meta } = Card;

class About extends Component {

    render() {
        return(
            <div>
                <h2>Welcome to the About page</h2>


                {/* <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>, */}
            </div>
        )
    }
}

export default About