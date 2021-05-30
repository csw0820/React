import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import { ContextProvider } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';

const authService = new AuthService();
ReactDOM.render(
  <ContextProvider>
    <App authService = {authService} />
  </ContextProvider>,
  document.getElementById('root')
);

