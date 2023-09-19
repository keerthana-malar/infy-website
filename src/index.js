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
import HomeAbout from './home/about';
import SubService from './home/subService';
import RecentProjects from './home/recentprojects';
import Contact from './contact';
import Header from './common/header';
import About from './about';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Sliders />
    <Service />
    <HomeAbout />
    <SubService />
    <RecentProjects />
    <About/>
    <Contact/>
  </React.StrictMode>
);