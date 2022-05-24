import React from 'react';
import Router from './Router.js';
import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
