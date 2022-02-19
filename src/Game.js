
import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import { useCurrentBreakpoint } from './hooks';
import { Layout, Menu } from 'antd';

import { config } from './game/GameRun';
import { MenuOutlined } from '@ant-design/icons';

import './game/Game.css';

const { Content, Footer, Header } = Layout;
  
export const AppGame = () => {
  const { isMobile } = useCurrentBreakpoint();
  const [navbar, setNavbar] = useState('3');
  useEffect(() => {
    new Phaser.Game(config);
  },[])
  return (
    <Layout className="site-layout" style={{ overflow: 'auto' }}>
        <Header className={isMobile ? 'mobile-app-header' : 'App-header'}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[navbar]} onClick={(e) => setNavbar(e.key)} overflowedIndicator={<MenuOutlined />} >
                <Menu.Item key={3}>Play</Menu.Item>
                <Menu.Item key={1} onClick={() => window.location = '/'}>WebSite</Menu.Item>
                <Menu.Item key={2}>Market Place</Menu.Item>
            </Menu>
        </Header>
        <Content >
          <div className="game-body" id='game-here' />
        </Content>
        <Footer style={{ fontFamily: 'grobold' }}>COPYRIGHT BUNNY HEIST 2022. ALL RIGHTS RESERVED.</Footer>
    </Layout>
  );
}

