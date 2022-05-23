import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/common.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>디너 플레이트</h1>
    <App />
  </React.StrictMode>
);
