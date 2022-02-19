
import React, { useState } from 'react';
import { useCurrentBreakpoint } from './hooks';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { HomePageLayout } from './home/HomePageLayout';
import { FaqsLayout } from './faqs/FaqsLayout';
import { CollectionsLayout } from './collections/CollectionsLayout';

const { Content, Footer, Header } = Layout;

export const WebPage = () => {
  const { isMobile } = useCurrentBreakpoint();
  const [navbar, setNavbar] = useState('1');

  return (
    <Layout className="site-layout" style={{ overflow: 'auto' }}>
        <Header className={isMobile ? 'mobile-app-header' : 'App-header'}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[navbar]} onClick={(e) => setNavbar(e.key)} overflowedIndicator={<MenuOutlined />} >
                <Menu.Item key={1}>Home</Menu.Item>
                <Menu.Item key={2}>Play</Menu.Item>
                <Menu.Item key={6}>FAQs</Menu.Item>
                <Menu.Item key={3}>Collections</Menu.Item>
                <Menu.Item key={4}>Road Map</Menu.Item>
                <Menu.Item key={5}>White Paper</Menu.Item>
            </Menu>
        </Header>
        <Content className="site-layout-background">
            {navbar === '6' && <FaqsLayout />}
            {navbar === '1' && <HomePageLayout />}
            {navbar === '3' && <CollectionsLayout />}

        </Content>
        <Footer style={{ fontFamily: 'grobold' }}>COPYRIGHT BUNNY HEIST 2022. ALL RIGHTS RESERVED.</Footer>
    </Layout>
  );
}

export default WebPage;
