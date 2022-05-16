
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from 'antd';

import { WebPage } from './WebPage';

import './Loading.css';
import './App.css';
import 'antd/dist/antd.min.css';

const { Content } = Layout;

export const App = () => {  
  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    setTimeout(() => { 
      setLoadingState(false);
     }, 500);
  }, [])

  return (
    <Router>
      <Layout className={'main-section'}>
          <div className={`loading-box ${loadingState ? 'visible' : 'hidden'}`}>
            <div className="loadingio-spinner-double-ring-m9q3lour4c">
              <div className="ldio-imaykejpq0m">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <Content className={`site-layout-background  ${loadingState ? 'hidden' : 'visible'}`}>
                <Switch>
                  <Route>
                    <WebPage />
                  </Route>
                </Switch>
            </Content>
      </Layout>
    </Router>
  );
}

export default App;
