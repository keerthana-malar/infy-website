import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/common.css';
import 'font-awesome/css/font-awesome.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './common/header';
import Footer from './common/footer';
import About from './About';


import Home from "./Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './contact';
import Blogs from './blog';
import MainBlogs from './mainblog';
import Ispservice from './ispservice';



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

                <Route path="*" element={"Haiii"} />
      </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <Header/> */}
  <App/>
  </>
);