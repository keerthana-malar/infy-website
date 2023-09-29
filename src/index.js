import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/common.css";
import "font-awesome/css/font-awesome.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./common/header";
import Footer from "./common/footer";
import About from "./About";

import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact";
import Blogs from "./blog";
import MainBlogs from "./mainblog";
import Login from "./admin/Login";
import Sidebar from "./admin/sidebar";
import DashBoard from "./admin/Dashboard";
import Category from "./admin/Category";
import AddCategory from "./admin/AddCategory";
import EditCategory from "./admin/EditCategory";
// import SubCategory from "./admin/SubCategory";
// import AddSubCategory from "./admin/AddSubCategory";
// import EditSubCategory from "./admin/EditSubCategory";
// import users from "./admin/users";
// import AddUsers from "./admin/AddUsers";
// import EditUsers from "./admin/EditUsers";
// import Blog from "./admin/Blog";
// import AddBlog from "./admin/AddBlog";
// import EditBlog from "./admin/EditBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/MainBlogs" element={<MainBlogs />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/AddCategory" element={<AddCategory />} />
        <Route path="*" element={"404 Page Not Found"} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Header/> */}
    <App />
  </>
);
