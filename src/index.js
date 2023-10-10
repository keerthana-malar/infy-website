
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/common.css";
import './css/seo.css';
import "font-awesome/css/font-awesome.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./common/header";
import Footer from "./common/footer";
import About from "./About";

import Home from "./Home";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Contact from "./contact";
import Blogs from "./blog";
import MainBlogs from "./mainblog";
import Ispservice from './ispservice';
import ServiceSeo from './ServiceSeo';
import Iotservices from './Iotservice';
import Login from "./admin/Login";
import DashBoard from "./admin/Dashboard";
import Category from "./admin/Category";
import AddCategory from "./admin/AddCategory";
import EditCategory from "./admin/EditCategory";
import Blog from "./admin/Blog";
import AddBlog from "./admin/AddBlog";
import EditBlog from "./admin/EditBlog";
import PrivacyPolicy from "./footermainpages/PrivacyPolicy";
import Termspage from './footermainpages/Termspage';
import Delivery from './footermainpages/Delivery';
import Refund from './footermainpages/refund';
import Quality  from "./footermainpages/quality";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/MainBlogs" element={<MainBlogs />} />
                          <Route path='/Ispservice' element={<Ispservice/>}/>
                <Route path='/ServiceSeo' element={<ServiceSeo/>}/>
                <Route path='/Iotservice' element={<Iotservices/>}/>
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/AddCategory" element={<AddCategory />} />
        <Route path="/editcategory/:id" element={<EditCategory />} />
        <Route path="/editblog/:id" element={<EditBlog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="*" element={"404 Page Not Found"} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/termspage" element={<Termspage/>} />
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/quality" element={<Quality/>} />


      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <App/>
  </>
);
