
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentBreakpoint } from './hooks';
import { Button, Layout, Menu, Col, Row, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { getWallet } from './data/player/selector';
import { LoginModal } from './login/LoginModal';
import { setPlayerWallet } from './data/player/action';


const { Content, Footer, Header } = Layout;
  
export const AppGame = () => {
  const dispatch = useDispatch();
  const { isMobile } = useCurrentBreakpoint();
  const [navbar, setNavbar] = useState('3');
  const playerWallet = useSelector(state => getWallet(state));
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleOk = () => {
    setIsLoginVisible(false);
    dispatch(setPlayerWallet(true))
  }

  return (
    <Layout className="site-layout" style={{ overflow: 'auto' }}>
      {!playerWallet &&
          <Header className={isMobile ? 'mobile-app-header' : 'App-header'}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[navbar]} onClick={(e) => setNavbar(e.key)} overflowedIndicator={<MenuOutlined />} >
                  <Menu.Item key={3}>Play</Menu.Item>
                  <Menu.Item key={1} onClick={() => window.location = '/'}>WebSite</Menu.Item>
                  <Menu.Item key={2}>Market Place</Menu.Item>
              </Menu>
          </Header>
      }
        <Content >
          {playerWallet
            ? <div className="game-body" id='game-here' />
            : <Col className='play-now'>
                <Row align='bottom' justify='center'>
                  <LoginModal isVisible={isLoginVisible} setIsVisible={setIsLoginVisible} handleOk={handleOk}/>
                    <div className='play-container' onClick={() => setIsLoginVisible(true)}>
                        <div className={isMobile ? 'play-btn play-btn-mobile' : 'play-btn play-btn-desk'} />
                          <Button
                            type='primary'
                            className={isMobile ? 'play play-mobile' : 'play play-desk'}
                          >
                              <Typography.Text style={{ color: 'white' }}>Play Now</Typography.Text>
                          </Button>        
                        <div className={isMobile ? 'play-btn play-btn-mobile reverse' : 'play-btn play-btn-desk reverse'} />
                    </div>
                </Row>
              </Col>
          }          
        </Content>
        <Footer style={{ fontFamily: 'grobold' }}>COPYRIGHT BUNNY HEIST 2022. ALL RIGHTS RESERVED.</Footer>
    </Layout>
  );
}

