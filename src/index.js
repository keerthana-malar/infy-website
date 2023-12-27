import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/common.css";
import "./css/seo.css";
import "font-awesome/css/font-awesome.css";
import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./contact";
import Blogs from "./blog";
import MainBlogs from "./mainblog";
import Ispservice from "./ispservice";
import ServiceSeo from "./ServiceSeo";
import Iotservices from "./Iotservice";
import Login from "./admin/Login";
import DashBoard from "./admin/Dashboard";
import Category from "./admin/Category";
import AddCategory from "./admin/AddCategory";
import EditCategory from "./admin/EditCategory";
import Blog from "./admin/Blog";
import AddBlog from "./admin/AddBlog";
import EditBlog from "./admin/EditBlog";
import Bookservicepage from "./Bookservicepage";
import PrivacyPolicy from "./footermainpages/PrivacyPolicy";
import Termspage from "./footermainpages/Termspage";
import Delivery from "./footermainpages/Delivery";
import Refund from "./footermainpages/refund";
import Quality from "./footermainpages/quality";
// import ServicePage from "./ServicePage";
import ScrollToTop from "./common/scrollToTop";
import Partner from "./partner/Partner";
import CareerPage from "./Career/CareerPage";
import Careers from "./admin/Careers";
import AddCareer from "./admin/AddCareer";
import EditCareers from "./admin/EditCareers";
import CareerDetails from "./Career/CareerDetails";
import Candidate from "./admin/Candidate";
import Four from "./404";
import Isppackage from "./isp-package";
import Packageslles from "./Internetleasedline";
import Packagessmes from "./smepackage";
import Packagestv from "./broadband";
import NewServicePage from "./services/NewServicePage";
import ServiceDetails from "./servicepage/ServiceDetails";
import WebService from "./services/WebService";
import JobDec from "./Career/JobDec";
import ModalForm from "./partner/PartnershipForm";
import PartnershipForm from "./partner/PartnershipForm";
import Modal from "./partner/Modal";
import NewPartner from "./partner/NewPartner";
import Work from "./admin/Work";
import Business from "./admin/Business";
import WorkDetail from "./admin/WorkDetail";
import BusinessDetail from "./admin/BusinessDetail";


function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs/:id" element={<Blogs />} />
        <Route path="/MainBlogs" element={<MainBlogs />} />
        <Route path="/Ispservice" element={<Ispservice />} />
        <Route path="/ServiceSeo" element={<ServiceSeo />} />
        <Route path="/Iotservice" element={<Iotservices />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/AddCategory" element={<AddCategory />} />
        <Route path="/editblog/:id" element={<EditBlog />} />
        <Route path="/editcategory/:id" element={<EditCategory />} />
        <Route path="/adminblog" element={<Blog />} />
        <Route path="/addblog" element={<AddBlog />} />
        <Route path="/Bookservicepage" element={<Bookservicepage />} />
        <Route path="/Partner" element={<NewPartner/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termspage" element={<Termspage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/quality" element={<Quality />} />
        {/* <Route path="/services/:id" element={<ServicePage />} /> */}
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/AddCareer" element={<AddCareer />} />
        <Route path="/edit-career/:id" element={<EditCareers />} />
        <Route path="/career/:id" element={<CareerDetails />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/isp-package" element={<Isppackage />} />
        <Route path="/Internet-Leased-Line" element={<Packageslles />} />
        <Route path="/smepackage" element={<Packagessmes />} />
        <Route path="/Business-Broadband" element={<Packagestv />} />
        <Route path="/ModelForm" element={<PartnershipForm />} />
        <Route path="/ModelForm" element={<Modal />} />


        <Route path="/Work" element={<Work />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/busniess/:id" element={<BusinessDetail />} />


        <Route path="/webservices/:id" element={<WebService />} />
        <Route path="/careerdetail/:id" element={<JobDec />} />

        <Route path="/services/:id" element={<NewServicePage />} />
        {/* <Route path="/categories/:id" element={<SubCategoryHead />} /> */}
        <Route path="/servicedetails/:cat/:id" element={<ServiceDetails />} />

        <Route path="*" element={<Four />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
