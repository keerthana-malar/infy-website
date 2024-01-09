import Footer from "./common/footer";
import "./css/mainpackage.css";
import Header from "./common/header";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Bannerspacsme from "./ispservice/Smebanner";
import SMEpackage from "./ispservice/smepackage";

function Packagessmes() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <Header/> */}
      <div className="ispmainservice">
        <Header />
        <Bannerspacsme />
        <SMEpackage />

        <Footer />
      </div>
      {/* <Enquiry/>
        <Footer /> */}
    </>
  );
}

export default Packagessmes;
