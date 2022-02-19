
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { AppGame } from './Game';
import { WebPage } from './WebPage';

import './App.css';
import 'antd/dist/antd.min.css';

const { Content } = Layout;

export const App = () => {  
  return (
    <Router>
      <Layout className={'main-section'}>
          <div className="loading-box" style={{ display: (false ? "flex" : "none") }}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 80 }} spin />} />
          </div>
          <Content className="site-layout-background">
                <Switch>
                  <Route path="/" exact >
                    <WebPage />
                  </Route>
                  <Route path="/game" exact >
                    <AppGame />
                  </Route>
                </Switch>
            </Content>
      </Layout>
    </Router>
  );
}

export default App;
