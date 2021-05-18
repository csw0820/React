import React, { component, useEffect } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Info from './components/info/info';
import Licensee from './components/licensee/licensee';
import Login from './components/logoin/login';
import Message from './components/message/message';
import Potoreview from './components/potoreview/potoreview';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

function App({ authService }) {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className={styles.app}>
              <Login authService={authService} />
            </div>
          </Route>
          <Route path="/main">
            <Header onLogout={onLogout} />
            <Home />
            <Info />
            <Potoreview />
            <Message />
            <Licensee />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
