
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Layout, Menu, Row, Spin } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { HomePageLayout } from './home/HomePageLayout';
import { LoadingOutlined } from '@ant-design/icons';

import './App.css';
import 'antd/dist/antd.css';
import { AppGame } from './App copy';

const { Content } = Layout;

export const App = () => {
  return (
    <Router>
      <Layout className={'main-section'}>
          <div className="loading-box" style={{ display: (false ? "flex" : "none") }}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
          </div>
          <Layout className="site-layout" style={{ overflow: 'auto' }}>
          <Header className='App-header'>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key={1}>Home</Menu.Item>
              <Menu.Item key={4}>Getting Started</Menu.Item>
              <Menu.Item key={2}>Collection</Menu.Item>
              <Menu.Item key={3}>FAQs</Menu.Item>
            </Menu>
          </Header>
            <Content className="site-layout-background">
                <Switch>
                  {/* <Route path="/user" component={PetshopLayout} /> */}
                  <Route path="/" exact >
                    <HomePageLayout />
                  </Route>
                  <Route path="/game" exact >
                    <AppGame />
                  </Route>
                </Switch>
            </Content>
          </Layout>
      </Layout>
    </Router>
  );
}

export default App;
