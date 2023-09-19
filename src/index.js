import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/common.css';
import './css/header.css';
import './css/about.css';
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Sliders from './home/slider';
import Service from './home/service';
import About from './home/about';
import SubService from './home/subService';
import RecentProjects from './home/recentprojects';
import Menu from './contact';
import Header from './header';
import About from './about';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sliders />
    <Service />
    <About />
    <SubService />
    <RecentProjects />
    <Header/>
    <About/>
  </React.StrictMode>
);