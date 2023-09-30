import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/common.css';
import './css/seo.css';
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './About';


import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact';
import Blogs from './blog';
import MainBlogs from './mainblog';
import Ispservice from './ispservice';
import ServiceSeo from './ServiceSeo';
import Iotservices from './Iotservice';
// import App from './App';



function App(){
  
  return(
     
      <BrowserRouter>
      <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>} />
                <Route path='/About' element={<About/>}/>
                <Route path='/Blogs' element={<Blogs/>}/>
                <Route path='/MainBlogs' element={<MainBlogs/>}/>
                <Route path='/Ispservice' element={<Ispservice/>}/>

                {/* <Route path='/Seo' element={<Seo/>}/> */}
                <Route path='/ServiceSeo' element={<ServiceSeo/>}/>
                <Route path='/Iotservice' element={<Iotservices/>}/>
                <Route path="*" element={"Haiii"} />
      </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  </>
);