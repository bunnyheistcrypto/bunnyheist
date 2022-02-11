
import React from 'react';
import { Button, Row, Typography } from "antd";
import './Home.css';
import logo from '../gltf/coelho.png'

export const FirstBanner = () => {
    return (
        <Row className='home-container' align='bottom' justify='center'>
            <Button type='primary' className='play-btn' href='/game'><Typography.Title level={3} style={{ color: 'white' }}>Play Now</Typography.Title></Button>        
            {/* <div className="logo">
              <img src={logo} />
            </div> */}
        </Row>
    );
}