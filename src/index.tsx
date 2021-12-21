import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login/index';
import Video from './pages/Video';
import Authenticate from './pages/Authenticate/index';

ReactDOM.render(
  <React.StrictMode>
    <Authenticate />
  </React.StrictMode>,
  document.getElementById('root')
);
