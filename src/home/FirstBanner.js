
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserdata } from '../data/login/action';
import { useCurrentBreakpoint } from '../hooks';
import { Button, Row, Typography, Col } from "antd";
import * as waxjs from '@waxio/waxjs/dist';
import logo from '../gltf/logo.png'
import './Home.css';
import { listInventario } from '../data/player/action';

export const FirstBanner = () => {
    const { isMobile } = useCurrentBreakpoint();
    const wax = new waxjs.WaxJS("https://wax.greymass.com");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listInventario('aaaa', '2'));
    }, [])

    const login = async () => {
        try {
            dispatch(fetchUserdata('cc', 'cc'));
            const userAccount = await wax.login();
            console.log(userAccount);
            console.log(wax.userAccount);
            console.log(wax.pubKeys);
          } catch (e) {
            console.log(e.message);
          }
          alert("You have Succesfully loged in");
    }

    return (
        <Col className='home-container' align='bottom' justify='center'>
            <Row align='bottom' justify='center'>
                <img src={logo} className={'logo-image'} alt={'Bunny Heist Logo'}/>
            </Row>
            <Row align='bottom' justify='center'>
                <div className='play-container' onClick={login}>
                    <div className={isMobile ? 'play-btn play-btn-mobile' : 'play-btn play-btn-desk'} />
                    <Button type='primary' className={isMobile ? 'play play-mobile' : 'play play-desk'}>
                        <Typography.Text>Play Now</Typography.Text>
                    </Button>        
                    <div className={isMobile ? 'play-btn play-btn-mobile reverse' : 'play-btn play-btn-desk reverse'} />
                </div>
            </Row>
        </Col>
    );
}