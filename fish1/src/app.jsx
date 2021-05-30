import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Info from './components/info/info';
import License from './components/license/license';
import Login from './components/logoin/login';
import Weather from './components/weather/weather';
import Photoreview from './components/photoreview/photoreview';
import styles from './app.module.css';
import { BrowserRouter, Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from './components/Main';

function App({ authService }) {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => setScrollY(window.pageYOffset));
  //   return window.removeEventListener('scroll', () => setScrollY(window.pageYOffset));
  // });

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
