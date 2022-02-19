
import React from 'react';
import { Collapse, Col, List, Row, Typography } from "antd";
import './Faqs.css';
import frame from '../gltf/imageFrame.png';

const { Panel } = Collapse;

export const FaqsLayout = () => {
    return (
        <Col className='faqs-container' align='bottom' justify='center'>
            <Row align='start' justify='center'>
                <div className='faqs-box'>
                    <Collapse defaultActiveKey={['1']} className={'faqs-collapse'}>
                        <Panel header="What is Bunny Heist?" key="1" style={{ borderColor: 'black' }}>
                            <Typography.Text>Bunny Heist is a fun game that runs on the NFTs platform.</Typography.Text>
                        </Panel>
                        <Panel header="What blockchain platform does Bunny Heist use?" key="2">
                            <Typography.Text>Testando</Typography.Text>
                        </Panel>
                        <Panel header="How to participate on heists?" key="3">
                            <p>Testando</p>
                        </Panel>
                        <Panel header="How to participate on heists?" key="4">
                            <p>Testando</p>
                        </Panel>
                        <Panel header="How to participate on heists?" key="5">
                            <p>Testando</p>
                        </Panel>
                        <Panel header="How to participate on heists?" key="6">
                            <p>Testando</p>
                        </Panel>
                        <Panel header="How to participate on heists?" key="7">
                            <p>Testando</p>
                        </Panel>
                        <Panel header="How to participate on heists?" key="8">
                            <p>Testando</p>
                        </Panel>
                    </Collapse>
                </div>
            </Row>
        </Col>
    );
}