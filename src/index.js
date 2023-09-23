import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/common.css';
// import './css/about.css';
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Sliders from './home/slider';
// import Service from './home/service';
// import HomeAbout from './home/about';
// import SubService from './home/subService';
// import RecentProjects from './home/recentprojects';
// import Contactmain from './contact/maincontent';
// import Contactform from './contact/contactform';
// import Contact from './contact/contactbanner';
import Header from './common/header';
// import About from './about/about';
// import Aboutcounter from ".about/aboutcounter";
// import Aboutclient from "./about/aboutclient";
// import Carouselabout from './about/carousel';
// import Aboutus from './about/aboutus';

import Footer from './common/footer';
import About from './About';

import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact';

function App(){
  return(
      <BrowserRouter>
      <Routes>
              {/* <Route path="/" element={<Header/>}> */}
                <Route path='/' element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>} />
                <Route path='/About' element={<About/>}/>
                <Route path="/Footer" element={<Footer/>} />
                <Route path="*" element={"Haiii"} />
              {/* </Route> */}
      </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <App/>
  </>
);