
import React from 'react';
import { useCurrentBreakpoint } from '../hooks';
import { Button, Row, Typography, Col } from "antd";
import logo from '../gltf/logo.png'
import './Home.css';

export const FirstBanner = () => {
    const { isMobile } = useCurrentBreakpoint();
    return (
        <Col className='home-container' align='bottom' justify='center'>
            <Row align='bottom' justify='center'>
                <img src={logo} className={'logo-image'} alt={'Bunny Heist Logo'}/>
            </Row>
            <Row align='bottom' justify='center'>
                <div className='play-container' onClick={() => window.location = '/game'}>
                    <div className={isMobile ? 'play-btn play-btn-mobile' : 'play-btn play-btn-desk'} />
                    <Button type='primary' className={isMobile ? 'play play-mobile' : 'play play-desk'} href='/game'><Typography.Text>Play Now</Typography.Text></Button>        
                    <div className={isMobile ? 'play-btn play-btn-mobile reverse' : 'play-btn play-btn-desk reverse'} />
                </div>
            </Row>
        </Col>
    );
}