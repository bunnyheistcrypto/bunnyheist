
import React from 'react';

import { Typography, Row, Col } from 'antd';

import twitter from '../gltf/icon-twitter.png';
import discord from '../gltf/icon-discord.png';
import telegram from '../gltf/icon-telegram.png';

export const ThirdBanner = () => {
    return (
        <div className='carousel-container'>
            <Row align='bottom' justify='center'>
                <div className='title'>
                    <Typography.Text style={{ color: 'black' }}>Social Midia</Typography.Text>
                </div>        
            </Row>
            <Row justify='center' align='start' className='secondary-font'>
                <Col span={16}>
                    <Typography.Title level={4}>
                        Be part of the best community of NFT games with players all over the world.
                    </Typography.Title>
                    <Typography.Text>
                        Follow us on social midia to be the first one to know about all the Bunny Heist news!
                        Our Discord community is active and friendly – you can always find a new partner to your missions over there.
                    </Typography.Text>
                </Col>
            </Row>
            <Row gutter={24} justify='center' style={{ marginTop: '2rem' }}>
                <Col>
                    <Row>
                        <a href={'www.twitter.com'}>
                            <img src={twitter} width={80} alt={'twitter'}/>
                        </a>
                    </Row>
                    <Row justify='center'>
                        <Typography.Text>Twitter</Typography.Text>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <a href={'www.teleram.com'}>
                            <img src={telegram} width={80} alt={'telegram'}/>
                        </a>
                    </Row>
                    <Row justify='center'>
                        <Typography.Text>Telegram</Typography.Text>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <a href={'www.discord.com'}>
                            <img src={discord} width={80} alt={'discord'}/>
                        </a>
                    </Row>
                    <Row justify='center'>
                        <Typography.Text>Discord</Typography.Text>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}