import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/common.css';
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>
);


